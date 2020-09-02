var socket = io('http://localhost:3000')

var imgFoco1 = document.getElementById('imgFoco1')
var btnFoco1 = document.getElementById('btnFoco1')

var estado = {
    f1: false,
    f2: false,
    f3: false, 
    f4: false,
    f5: false,
    f6: false,
    f7: false,
    f8: false
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
        case 4:
            if (estado.f4) {
                estado.f4 = false;
                imgFoco4.src = "../img/lampOff.gif"
                btnFoco4.innerHTML = "Encender"
            }
            else {
                estado.f4 = true;
                imgFoco4.src = "../img/lampOn.gif"
                btnFoco4.innerHTML = "Apagar"
            }
            break;
        case 5:
            if (estado.f5) {
                estado.f5 = false;
                imgFoco5.src = "../img/lampOff.gif"
                btnFoco5.innerHTML = "Encender"
            }
            else {
                estado.f5 = true;
                imgFoco5.src = "../img/lampOn.gif"
                btnFoco5.innerHTML = "Apagar"
            }
            break;
        case 6:
            if (estado.f6) {
                estado.f6 = false;
                imgFoco6.src = "../img/lampOff.gif"
                btnFoco6.innerHTML = "Encender"
            }
            else {
                estado.f6 = true;
                imgFoco6.src = "../img/lampOn.gif"
                btnFoco6.innerHTML = "Apagar"
            }
            break;
        case 7:
            if (estado.f7) {
                estado.f7 = false;
                imgFoco7.src = "../img/lampOff.gif"
                btnFoco7.innerHTML = "Encender"
            }
            else {
                estado.f7 = true;
                imgFoco7.src = "../img/lampOn.gif"
                btnFoco7.innerHTML = "Apagar"
            }
            break;
        case 8:
            if (estado.f8) {
                estado.f8 = false;
                imgFoco8.src = "../img/lampOff.gif"
                btnFoco8.innerHTML = "Encender"
            }
            else {
                estado.f8 = true;
                imgFoco8.src = "../img/lampOn.gif"
                btnFoco8.innerHTML = "Apagar"
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
    if (!data.f4) {
        estado.f4 = false;
        imgFoco4.src = "../img/lampOff.gif"
        btnFoco4.innerHTML = "Encender"
    }
    else {
        estado.f4 = true;
        imgFoco4.src = "../img/lampOn.gif"
        btnFoco4.innerHTML = "Apagar"
    }
    if (!data.f5) {
        estado.f5 = false;
        imgFoco5.src = "../img/lampOff.gif"
        btnFoco5.innerHTML = "Encender"
    }
    else {
        estado.f5 = true;
        imgFoco5.src = "../img/lampOn.gif"
        btnFoco5.innerHTML = "Apagar"
    }
    if (!data.f6) {
        estado.f6 = false;
        imgFoco6.src = "../img/lampOff.gif"
        btnFoco6.innerHTML = "Encender"
    }
    else {
        estado.f6 = true;
        imgFoco6.src = "../img/lampOn.gif"
        btnFoco6.innerHTML = "Apagar"
    }
    if (!data.f7) {
        estado.f7 = false;
        imgFoco7.src = "../img/lampOff.gif"
        btnFoco7.innerHTML = "Encender"
    }
    else {
        estado.f7 = true;
        imgFoco7.src = "../img/lampOn.gif"
        btnFoco7.innerHTML = "Apagar"
    }
    if (!data.f8) {
        estado.f8 = false;
        imgFoco8.src = "../img/lampOff.gif"
        btnFoco8.innerHTML = "Encender"
    }
    else {
        estado.f8 = true;
        imgFoco8.src = "../img/lampOn.gif"
        btnFoco8.innerHTML = "Apagar"
    }
    
})