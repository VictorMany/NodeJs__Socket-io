var io = require('socket.io')();
var Timer = require('easytimer.js').Timer;
var Tiempo = '00:00:00'
var temporizador = new Timer();
var estadoFoco = false;
io.sockets.on('connection', function (socket) {
   console.log('un nuevo cliente se ha conectado con el id: ' + socket.id)


   io.sockets.emit('estadoActual', estadoFoco, Tiempo);
   //Inicia el temporizador
   socket.on('startTimer', function (data) {
      console.log('INICIAR TIMER', data)
      temporizador.start({
         countdown: true,
         startValues: {
            hours: Number(data.horas),
            minutes: Number(data.minutos),
            seconds: Number(data.segundos),
         }
      })
      estadoFoco = true;
   })
   //DEtiene el temporizador
   socket.on('stopTimer', function () {
      temporizador.stop()
      io.sockets.emit('stop')
      estadoFoco = false;
   });

   //Pausar el temporizador 
   socket.on('pauseTimer', function () {
      temporizador.pause()
      estadoFoco = true;
   });
   //Resetear el temporizador 
   socket.on('resetTimer', function () {
      temporizador.reset()
      estadoFoco = true;
   });
})

temporizador.addEventListener('secondsUpdated', function (err) {
   console.log(temporizador.getTimeValues().toString())
   var tiempo = temporizador.getTimeValues().toString();
   Tiempo = tiempo;
   io.sockets.emit('focoOn', tiempo)
})

temporizador.addEventListener('targetAchieved', function () {
   console.log('FINALIZADO')
   io.sockets.emit('focoOff', 'hola');
})


module.exports = io;