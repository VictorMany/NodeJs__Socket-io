var io = require('socket.io')();
var estado = {
   f1: false,
   f2: false,
   f3: false
} ;
io.sockets.on('connection', function (socket) {
   socket.emit('actualizar', estado)
   console.log('un nuevo cliente se ha conectado con el id: ' + socket.id)

   socket.on('cambio', function(data){
      estado = data;
      //console.log(estado);
      socket.broadcast.emit('actualizar', estado);
   })
})


module.exports = io;