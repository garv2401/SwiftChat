let baseURL;
let socketURL;

if(import.meta.env.VITE_NODE_ENV==="production"){
    baseURL="deployed-url";
    socketURL="deployed-url";
}else{
    baseURL="http://localhost:4000";
    socketURL="ws://localhost:4000";
}

export {baseURL,socketURL};
