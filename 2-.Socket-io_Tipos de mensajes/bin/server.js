var io = require('socket.io')();
var clientesTotales =0;
var contador = 0;
io.sockets.on('connection', function (socket) {
   clientesTotales++;
   socket.emit("actualizar_conteo", contador); //mensaje al que se conecta
   console.log('un nuevo cliente se ha conectado con el id: ' + socket.id)
   var nuevo = "Un nuevo cliente se ha conectado con ID: " + socket.id
   io.sockets.emit("nuevo_usuario", nuevo);  //Evento emit a todos

   //Mensaje solo al que e conecta 
   socket.emit("bienvenida", "Bienvenido Usuario");
   io.sockets.emit("conexiones", clientesTotales);   //Mandamos la cantidad de clientes conectados

   //Mandamos info del desconectado a los demas conectados
   socket.on("disconnect", function(){
      clientesTotales--;
      socket.broadcast.emit("conexiones", clientesTotales);
      socket.broadcast.emit("desconexion", "se ha desconectado el cliente con el id: "+ socket.id)
   })
    
   socket.on("contador", function(){
      contador ++;
      io.sockets.emit("actualizar_conteo", contador);
   })
   //Mensaje para todos menos a uno (el que genera la conexion) 
   socket.broadcast.emit("new_broadcast", nuevo);  
   
})
module.exports = io;