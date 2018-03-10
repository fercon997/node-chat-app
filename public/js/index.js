var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');

  // socket.emit('createEmail', {
  //   to: "Elgue@gamam.com",
  //   text: "Hey, qlq"
  // });

  // socket.emit('createMessage', {
  //   to: "Ginea@hotm.com",
  //   text: "Todo fino"
  // })
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('welcomeMessage', function(message){
  console.log('welcomeMessage', message);
});

socket.on('welcomeMessageAll', function(message) {
  console.log('welcomeMessageAll', message);
})

socket.on('newMessage', function(message){
  console.log('newMessage', message);
});
