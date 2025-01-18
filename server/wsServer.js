const ws=require('ws');
const jwt=require('jsonwebtoken');
const fs=require("fs");
const Message=require('./models/messageModel');
const {clear}=require('console');
const {User}=require('./models/userModel');


const createWebSocketServer=(server)=>{
    const wss=new ws.WebSocketServer({server});

    wss.on("connection",(connection,req)=>{
        console.log('A new user connected');
        console.log("userId",connection.userId);
        const notifyAboutOnlinePeople=async()=>{
            const onlineUsers=await Promise.all(
                Array.from(wss.clients).map(async (client)=>{
                    const {userId,username}=client;
                    const user=await User.findById(userId);
                    const avatarLink=user?user.avatarLink:null;

                    return{
                        userId,
                        username,
                        avatarLink,
                    };
                })
            );

            [...wss.clients].forEach((client)=>{
                client.send(
                    JSON.stringify({
                        online:onlineUsers,
                    })
                );
            });

            console.log('Onine Users:',onlineUsers);
        };

        connection.isAlive=true;

        connection.timer=setInterval(()=>{
            connection.ping();
            connection.deathTimer=setTimeout(()=>{
                connection.isAlive=false;
                clearInterval(connection.timer);
                connection.terminate();
                notifyAboutOnlinePeople();
                console.log("dead");

            },1000)
        },5000)

        connection.on("pong",()=>{
            clearTimeout(connection.deathTimer);
        })

        const cookies=req.headers.cookie;
        console.log("cookies:",cookies);

        // if(cookies){
        //     const tokenString=cookies
        //       .split(";")
        //       .find((str)=>str.startsWith("authToken"));

        //       console.log("tokenString:",tokenString);

        //     if(tokenString){
        //         const token=tokenString.split("=")[1];
        //         console.log("token:",token);
        //         jwt.verify(token,process.env.JWTPRIVATEKEY,{},(err,userData)=>{
        //             if(err){
        //                 console.log(err);
        //                 return;
        //             } 
        //             const {_id,firstName,lastName}=userData;
        //             connection.userId=_id;
        //             connection.username=`${firstName}${lastName}`;

        //         });
        //     }
        // }

        if (cookies) {
            const tokenString = cookies
              .split(";")
              .map((str) => str.trim()) // Trim each cookie
              .find((str) => str.startsWith("authToken"));
              
            console.log("tokenString:", tokenString);
          
            if (tokenString) {
              const token = tokenString.split("=")[1];
              console.log("token:", token);
          
              jwt.verify(token, process.env.JWTPRIVATEKEY, {}, (err, userData) => {
                if (err) {
                  console.log("JWT verification error:", err);
                  return;
                }
                const { _id, firstName, lastName } = userData;
                connection.userId = _id;
                connection.username = `${firstName} ${lastName}`;
                console.log("Authenticated user:", connection.userId, connection.username);
              });
            } else {
              console.log("authToken not found in cookies.");
            }
          }
          

        connection.on("message",async(message)=>{
            const messageData=JSON.parse(message.toString());
            const {recipient,text}=messageData;
            console.log(connection.userId,recipient,text);
            const msgDoc=await Message.create({
                sender:connection.userId,
                recipient,
                text,
            });

            if(recipient && text){
                [...wss.clients].forEach((client)=>{
                    if(client.userId===recipient){
                        client.send(
                            JSON.stringify({
                                sender:connection.username,
                                text,
                                id:msgDoc._id,
                            })
                        );
                    }
                });
            }
        });
        notifyAboutOnlinePeople();
        
    });
};

module.exports=createWebSocketServer;