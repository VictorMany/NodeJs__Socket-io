var socket = io('http://localhost:3000')

var imgFoco1 = document.getElementById('imgFoco1')
var btnFoco1 = document.getElementById('btnFoco1')

var estado = {
    f1: false,
    f2: false,
    f3: false
}

var foco = (n) => {
    switch (n) {
        case 1:
            if (estado.f1) {
                estado.f1 = false;
                imgFoco1.src = "../img/lampOff.gif"
                btnFoco1.innerHTML = "Encender"
            }
            else {
                estado.f1 = true;
                imgFoco1.src = "../img/lampOn.gif"
                btnFoco1.innerHTML = "Apagar"
            }
            break;
        case 2:
            if (estado.f2) {
                estado.f2 = false;
                imgFoco2.src = "../img/lampOff.gif"
                btnFoco2.innerHTML = "Encender"
            }
            else {
                estado.f2 = true;
                imgFoco2.src = "../img/lampOn.gif"
                btnFoco2.innerHTML = "Apagar"
            }
            break;
        case 3:
            if (estado.f3) {
                estado.f3 = false;
                imgFoco3.src = "../img/lampOff.gif"
                btnFoco3.innerHTML = "Encender"
            }
            else {
                estado.f3 = true;
                imgFoco3.src = "../img/lampOn.gif"
                btnFoco3.innerHTML = "Apagar"
            }
            break;
    }
    socket.emit('cambio', estado);
}


socket.on('actualizar', function (data) {
    if (!data.f1) {
        estado.f1 = false;
        imgFoco1.src = "../img/lampOff.gif"
        btnFoco1.innerHTML = "Encender"
    }
    else {
        estado.f1 = true;
        imgFoco1.src = "../img/lampOn.gif"
        btnFoco1.innerHTML = "Apagar"
    }
    if (!data.f2) {
        estado.f2 = false;
        imgFoco2.src = "../img/lampOff.gif"
        btnFoco2.innerHTML = "Encender"
    }
    else {
        estado.f2 = true;
        imgFoco2.src = "../img/lampOn.gif"
        btnFoco2.innerHTML = "Apagar"
    }
    if (!data.f3) {
        estado.f3 = false;
        imgFoco3.src = "../img/lampOff.gif"
        btnFoco3.innerHTML = "Encender"
    }
    else {
        estado.f3 = true;
        imgFoco3.src = "../img/lampOn.gif"
        btnFoco3.innerHTML = "Apagar"
    }
})