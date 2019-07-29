var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, () => {
    console.log(`Socket io is now live on port 4200`);
});

io.on('connection', function (socket) {
    socket.on('join', function (data) {
        socket.join(data.room);
        socket.broadcast.to(data.room).emit('new user joined', {
            message: `Say hello to ${data.username}`
        });
    });
    socket.on('send message', function (data) {
        io.in(data.room).emit('new message', {message: data});
    });
    socket.on('typing', function (data) {
        io.in(data.room).emit('new typing', {message: `${data.username} is typing`});
    });
    socket.on('stop typing', function (data) {
        io.in(data.room).emit('no more typing', {message: ''});
    });
});