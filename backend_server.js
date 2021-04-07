const http = require('http') ;
const websocket = require('ws') ;

const server = http.createServer((req, res)=>{
  console.log("this is the backend_server on port 4000") ;
  res.end("this is the backend_server on port 4000");


}) ;

const wsServer = new websocket.Server({server}) ;



wsServer.on('connection', (socket, req)=>{


  socket.send("Server : Hey welcome here") ;

  socket.on('message', (msg)=>{
    console.log(msg) ;
  }) ;
}) ;









server.listen(4000) ;