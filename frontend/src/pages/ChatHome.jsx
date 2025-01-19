import React,{useState,useEffect} from 'react' 
import {useProfile} from "../contexts/profileContext"
import axios from "axios"
import Chatmessages from "../components/Chat/ChatMessages"
import MessageInputForm from "../components/Chat/MessageInputForm"
import Nav from "../components/Chat/Nav"
import OnlineUsersList from "../components/Chat/OnlineUserList"
import TopBar from "../components/Chat/TopBar"
import {socketURL} from "../../apiConfig"
import { useAuth } from '../contexts/authContext'
import { useNavigate } from 'react-router-dom'
import ChatWithAI from '../components/Chat/ChatWithAI'
const ChatHome = () => {
  //const time=Date.now().toISOString().split("T")[1].slice(0,5);
  const now = new Date();
const hours = String(now.getHours()).padStart(2, "0"); // Ensures two digits
const minutes = String(now.getMinutes()).padStart(2, "0"); // Ensures two digits
const time = `${hours}:${minutes}`;
//console.log(time);
  const {isAuthenticated,checkAuth}=useAuth();
  const [ws,setWs]=useState(null);
  const [selectedUserId,setSelectedUserId]=useState(null);
  const [onlinePeople,setOnlinePeople]=useState({});
  const [offlinePeople,setOfflinePeople]=useState({});
  const [messages,setMessages]=useState([]);
  const [newMessage,setNewMessage]=useState("");
  const {userDetails}=useProfile();
  const navigate=useNavigate();
  const [isMobile,setIsMobile]=useState(false);

  useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth <= 768);
      };
      window.addEventListener("resize", checkMobile);
      checkMobile(); // Run once on mount
    
      return () => window.removeEventListener("resize", checkMobile); // Clean up
    }, []);

  const connectToWebSocket=()=>{
    const ws=new WebSocket(socketURL);
    ws.addEventListener("message",handleMessage);
    setWs(ws);
  }

  useEffect(() => {
    connectToWebSocket();
    ws?.addEventListener("close",()=>{
      connectToWebSocket();
    })
  }, [userDetails,selectedUserId]);

  useEffect(() => {
    const fetchData=async()=>{
      if(selectedUserId && selectedUserId!=="AIChat"){
       try{
        const res=await axios.get(`/api/user/message/${selectedUserId}`);
        setMessages(res.data);

       }catch(err){
        console.error("Error fetching messages",err);
       }
      }
    }
    fetchData()
  }, [selectedUserId]);

  // const getData=async()=>{
  //   const res=await axios.get("/api/user/people");
  //   return res;
  // }

  useEffect(() => {
    //const res=getData();
    axios.get("/api/user/people").then((res)=>{
      console.log(res);
      const offlinePeopleArr=res?.data.filter((p)=>p._id!==userDetails?._id).filter((p)=>!onlinePeople[p._id]);
      console.log(offlinePeopleArr)

      const offlinePeopleWithAvatar=offlinePeopleArr.map((p)=>({
        ...p,
        avatarLink:p.avatarLink
      }));

      setOfflinePeople(
        offlinePeopleWithAvatar.reduce((acc,p)=>{
          acc[p._id]=p;
          return acc;
        },{})
      )
      
    })
 
  }, [onlinePeople,userDetails])

  useEffect(() => {
    const handleRealTimeMessage=(event)=>{
      const messageData=JSON.parse(event.data);

      if("text" in messageData){
        setMessages((prev)=>[...prev,{...messageData}]);
      }
    }

    if(ws){
      ws.addEventListener("message",handleRealTimeMessage);
    }

    return ()=>{
      if(ws){
        ws.addEventListener("message",handleRealTimeMessage);
      }
    }
  }, [ws,selectedUserId]);

  const showOnlinePeople=(peopleArray)=>{
    const people={};
    peopleArray.forEach(({userId,username,avatarLink})=>{
      if(userId!==userDetails?._id){
        people[userId]={
          username,avatarLink
        }
      }
    })

    setOnlinePeople(people);
  }

  const handleMessage=(ev)=>{
    const messageData=JSON.parse(ev.data);
    if("online" in messageData){
      showOnlinePeople(messageData.online);
    }
    else if("text" in messageData){
      if(messageData.sender===setSelectedUserId){
        setMessages((prev)=>[...prev,{...messageData}]);
      }
    }
  }

  const sendMessage=(ev)=>{
    if(ev) ev.preventDefault();
    //console.log("sending message");
    //console.log(userDetails._id,newMessage,selectedUserId);
    if(selectedUserId!=="AIChat"){ws.send(JSON.stringify({text:newMessage,recipient:selectedUserId}));}
    setNewMessage("");
    {selectedUserId!=="AIChat" && setMessages((prev)=>[...prev,{
      text:newMessage,
      sender:userDetails._id,
      recepient:selectedUserId,
      _id:Date.now()
    }])}
  }
  useEffect(() => {
    checkAuth();
    if(!isAuthenticated){
      navigate('/');
    }
  }, [])

  
  return (
    <div className="flex min-h-screen bg-background"> 
      <Nav/>
      <OnlineUsersList
       onlinePeople={onlinePeople}
       selectedUserId={selectedUserId}
       setSelectedUserId={setSelectedUserId}
       offlinePeople={offlinePeople}
       isMobile={isMobile}
      />

      {!isMobile && <section className='w-[71%] lg:w-[62%] relative pb-10 bg-dark'>
        {selectedUserId &&(
          <TopBar
          onlinePeople={onlinePeople}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          offlinePeople={offlinePeople} 
          />
        )}

        {selectedUserId=="AIChat"?<ChatWithAI userDetails={userDetails}/>:<Chatmessages
          messages={messages}
          userDetails={userDetails}
          selectedUserId={selectedUserId}
        />}

        {/* {selectedUserId==="AIChat"&&<ChatWithAI userDetails={userDetails}/>}

        {selectedUserId!=="AIChat" && <Chatmessages
          messages={messages}
          userDetails={userDetails}
          selectedUserId={selectedUserId}
        />} */}
        {/* {<Chatmessages
          messages={messages}
          userDetails={userDetails}
          selectedUserId={selectedUserId}
        />} */}

        {selectedUserId!=="AIChat" && <div className="absolute w-full bottom-0 flex justify-center px-7">
          <MessageInputForm
            sendMessage={sendMessage}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            selectedUserId={selectedUserId}
          />
        </div>}
        {/* {<div className="absolute w-full bottom-0 flex justify-center px-7">
          <MessageInputForm
            sendMessage={sendMessage}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            selectedUserId={selectedUserId}
          />
        </div>} */}
      </section>
      }

      {isMobile && selectedUserId && <section className='w-full relative pb-10 bg-dark'>
        {selectedUserId &&(
          <TopBar
          onlinePeople={onlinePeople}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          offlinePeople={offlinePeople} 
          />
        )}

        {selectedUserId==="AIChat"?<ChatWithAI userDetails={userDetails}/>:<Chatmessages
          messages={messages}
          userDetails={userDetails} 
          selectedUserId={selectedUserId}
        />}

        {selectedUserId!=="AIChat" && <div className="absolute w-full bottom-0 flex justify-center px-7">
          <MessageInputForm
            sendMessage={sendMessage}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            selectedUserId={selectedUserId}
          />
        </div>}
      </section>
      }
    </div>
  )
}

export default ChatHome