var socket = io('http://localhost:3000')



var lblRojo = document.getElementById('lblRojo');
var lblVerde = document.getElementById('lblVerde');
var lblAzul = document.getElementById('lblAzul');

var sldRojo = document.getElementById('sldRojo');
var sldVerde = document.getElementById('sldVerde');
var sldAzul = document.getElementById('sldAzul');

var body = document.getElementById('body');

body.style = "background-color: rgb(100, 100, 100)";

lblRojo.innerHTML = "Rojo: " + sldRojo.value;
lblVerde.innerHTML = "Verde: " + sldVerde.value;
lblAzul.innerHTML = "Azul: " + sldAzul.value;

var cambioColor = () => {
    lblRojo.innerHTML = "Rojo: " + sldRojo.value;
    lblVerde.innerHTML = "Verde: " + sldVerde.value;
    lblAzul.innerHTML = "Azul: " + sldAzul.value;

    body.style = "background-color: rgb(" + sldRojo.value + "," + sldVerde.value + "," + sldAzul.value + ")";

    var colores = {
        rojo: sldRojo.value,
        verde: sldVerde.value,
        azul: sldAzul.value
    }

    socket.emit('cambio', colores)
}

socket.on('actualizacion', function (data) {
    lblRojo.innerHTML = "Rojo: " + data.rojo;
    lblVerde.innerHTML = "Verde: " + data.verde;
    lblAzul.innerHTML = "Azul: " + data.azul;

    sldRojo.value = data.rojo;
    sldVerde.value = data.verde;
    sldAzul.value = data.azul;

    body.style = "background-color: rgb(" + sldRojo.value + "," + sldVerde.value + "," + sldAzul.value + ")";


})
