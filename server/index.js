require('dotenv').config();
const express=require('express');
const app=express();
const port=process.env.PORT||8000;
const cors=require('cors');
const userRoute=require('./routes/userRoute.js');
const avatarRoute=require('./routes/avatarRoute.js');
const cookieParser=require('cookie-parser');
const path=require('path');
const connection=require('./db/db.js');
const createWebSocketServer=require('./wsServer.js');

//database connect
connection();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins=[
    "http://localhost:5173", 
    "http://localhost:4000",
    "https://mtp3b6l5-5173.inc1.devtunnels.ms/",
    "https://swiftchat-f.onrender.com",
    "https://swiftchat-oasr.onrender.com",
    "https://accounts.google.com" 
];

// const allowedOrigins=[
//     "https://swift-chat-rust.vercel.app",
// ];

// app.use(cors({
//     origin: 'https://swiftchat-f.onrender.com', // Your frontend domain
//     credentials: true, // Allow credentials (cookies) to be sent
// }));


const corsOptions={
    origin:(origin,callback)=>{
        if(allowedOrigins.includes(origin)||!origin){
            callback(null,true);
        }else{
            callback(new Error("Not allowed by cors"))
        }
    },
    methods:"GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus:204,
    credentials:true
}

// }
app.use((req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
    res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
    next();
});

app.use((req, res, next) => {
    console.log('Request Origin:', req.headers.origin);
    res.setHeader("Access-Control-Allow-Origin", '*'); // For now, allow all origins
    res.setHeader("Access-Control-Allow-Credentials", "true");
    next();
  });
  


// const corsOptions = {
//     origin: (origin, callback) => {
//         console.log("Origin:", origin); // Debug log
//         if (allowedOrigins.includes(origin) || !origin) {
//             callback(null, true);
//         } else {
//             callback(new Error("Not allowed by CORS"));
//         }
//     },
//     credentials: true,
// };

app.options("*", (req, res) => {
    res.set("Access-Control-Allow-Origin", req.headers.origin);
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send();
});

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

app.use("/api/user",userRoute);
app.use("/api/avatar",avatarRoute);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});


const server=app.listen(port,()=>console.log("Server running on 8000"));

createWebSocketServer(server);
app.use(express.static(path.join(__dirname,"..","frontend","dist")));

app.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, "../frontend/dist/index.html"), (error) => {
    //   if (error) {
    //     console.error("Error sending file:", error);
    //     res.status(500).send("Error sending file.");
    //   }
    // });

    res.send("hello server")
});