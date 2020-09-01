var socket = io('http://localhost:3000')
var lblCliente = document.getElementById("lblCliente")
var lblContador = document.getElementById("lblContador")

var cuenta = () => {
    
   socket.emit("contador")
}

socket.on("nuevo_usuario", function(data){
   console.log(data);
})

socket.on("bienvenida", function(data){
   console.log(data);
})

socket.on("conexiones", function(data){
   console.log("CLIETES CONECTADOS" + data);
   lblCliente.innerHTML= "Clientes conectados: " + data;
})

socket.on("actualizar_conteo", function(data){
lblContador.innerHTML= data;
});


socket.on("desconexion", function(data){
   console.log(data);
})