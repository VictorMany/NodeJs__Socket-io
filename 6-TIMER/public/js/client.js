var socket = io('http://localhost:3000')

var segundos = document.getElementById('segundos')
var minutos = document.getElementById('minutos')
var horas = document.getElementById('horas')
var btnStart = document.getElementById('btnStart')

var startTimer = () => {
    tiempo = {
        segundos: segundos.value,
        minutos: minutos.value,
        horas: horas.value
    }
    socket.emit('startTimer', tiempo);
    console.log(tiempo);
    btnPause.disabled = false
}

var stopTimer = () => {
    socket.emit('stopTimer');
}

socket.on('stop', function () {
    lblTimer.innerHTML = '00:00:00';
    imgFoco.src = "./img/lampOff.gif";
    btnStart.disabled = false;
    horas.disabled = false;
    minutos.disabled = false;
    segundos.disabled = false;
    segundos.value = '';
    minutos.value = '';
    horas.value = '';
});


socket.on('estadoActual', function (data, Tiempo) {
    if (data) {
        imgFoco.src = "./img/lampOn.gif";
        lblTimer.innerHTML = Tiempo
    }
    else {
        imgFoco.src = "./img/lampOff.gif";
    }
});

var pauseTimer = () => {
    socket.emit('pauseTimer');
    btnPause.disabled = true;
    btnStart.disabled = false
}

var resetTimer = () => {
    socket.emit('resetTimer');
}

socket.on('focoOn', function (data) {
    imgFoco.src = "./img/lampOn.gif";
    lblTimer.innerHTML = data;
    btnStart.disabled = true;
    horas.disabled = false;
    minutos.disabled = false;
    segundos.disabled = false;

});

socket.on('focoOff', function (data) {
    imgFoco.src = './img/lampOff.gif';
    btnStart.disabled = false;
    horas.value = null;
    minutos.value = null;
    segundos.value = null;
    horas.disabled = false;
    minutos.disabled = false;
    segundos.disabled = false;
})