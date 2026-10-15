

import { Server } from "socket.io";


export default function initializeSocket(httpServer){
    const io = new Server(httpServer)

    io.on("connection", (socket) => {
  console.log("A user connected");
  
  socket.on("disconnect" ,()=>{
      console.log("A user disconnected")
    })
    socket.on("elon" , (msg)=>{
        console.log(msg)
        io.emit("musk")
    })
});
}