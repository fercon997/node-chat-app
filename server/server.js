const path = require('path');
const http = require('http')
const express = require('express');
const socketIO = require('socket.io')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

//EJEMPLOS
  // socket.emit('newEmail', {
  //   from: 'fercon@example.com',
  //   text: 'Qlq',
  //   createAt: 12873
  // });

  // socket.emit('newMessage', {
  //   from: "asdka@gmai.com",
  //   text: "Qlq bruja",
  //   createdAt: 212
  // });

 // socket.on('createEmail', (newEmail) => {
 //   console.log('createEmail', newEmail);
 // })
//FIN DE EJEMPLOS

 socket.on('createMessage', (message) => {
   console.log('createMessage', message);
   io.emit('newMessage', {
    from: message.from,
    text: message.text,
    createdAt: new Date().getTime()
   });
 });

  socket.on('disconnect', () => {
    console.log("Client disconnected");
  });
});

server.listen(port , () => {
  console.log(`Server is up on port ${port}`);
});
