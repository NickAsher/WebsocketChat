const http = require('http') ;
const websocket = require('ws') ;

const server = http.createServer((req, res)=>{
  console.log("this is the backend_server on port 4000") ;
  res.end("this is the backend_server on port 4000");
}) ;

const wsServer = new websocket.Server({server}) ;



wsServer.on('connection', (socket, req)=>{


  let welcomeMessage = JSON.stringify({senderName:'Server', chatMessage:'Hey! Welcome here'}) ;
  socket.send('' + welcomeMessage) ;

  socket.on('message', (msg)=>{

    wsServer.clients.forEach((client)=>{
      if (client.readyState === websocket.OPEN) {
        client.send('' + msg);
      }
    }) ;
  }) ;
}) ;









server.listen(4000) ;