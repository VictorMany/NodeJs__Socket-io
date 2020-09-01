var io = require('socket.io')();

var colores = {
   rojo: 255,
   verde: 255,
   zul: 255
}

io.sockets.on('connection', function (socket) {
   console.log('un nuevo cliente se ha conectado con el id: ' + socket.id)
   //socket.emit("actualizacion", colores);
   /*socket.on('cambio', function (data) {
      colores = data;
      socket.broadcast.emit("actualizacion", colores)
   })*/
})
module.exports = io;