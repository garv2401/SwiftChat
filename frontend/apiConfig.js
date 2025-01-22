let baseURL;
let socketURL;

// if(import.meta.env.VITE_NODE_ENV==="production"){
//     baseURL="https://swiftchat-oasr.onrender.com";
//     socketURL="ws://swiftchat-oasr.onrender.com";
// }else{
//     baseURL="http://localhost:4000";
//     socketURL="ws://localhost:4000";
// }

baseURL="https://swiftchat-oasr.onrender.com";
socketURL="wss://swiftchat-oasr.onrender.com";

export {baseURL,socketURL};
