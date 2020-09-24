const tijera = document.getElementById("tijera");
const papel = document.getElementById("papel");
const piedra = document.getElementById("piedra");
const resultado = document.getElementById("resultado");

var puntajeUsu = 0;
var puntajeMaq = 0;
const azarMaq = document.getElementById("maquina");
const marcadorUsu = document.getElementById("marcadorUno");
const marcadorMaq = document.getElementById("marcadorDos");

tijera.addEventListener("click", () => {
    inicio(tijera.value)
});
papel.addEventListener("click", () => {
    inicio(papel.value)
});
piedra.addEventListener("click", () => {
    inicio(piedra.value)
});



function inicio (valor) {
    let juego = ["piedra","papel","tijera"];
    let usuario = valor;
    let maquiba = maquina();
    azarMaq.textContent = juego[maquiba];
    puntaje(usuario,maquiba);
}

function maquina() {
    let numero = Math.floor(Math.random()*3);
    if (numero == 3) {
        return 2
    }

    return numero;
}

function puntaje(usuario,maquina) {
   
    if (usuario == 1 && maquina == 0 || usuario == 2 && maquina == 1 || usuario == 0 && maquina == 2) {
        resultado.textContent = "Ganador";
        puntajeUsu ++
        marcadorUsu.textContent = puntajeUsu

    }else if (usuario == maquina) {
        resultado.textContent = "Empate";
    } else {
        
        resultado.textContent = "Perdio";
        puntajeMaq ++
        marcadorMaq.textContent = puntajeMaq
    }
}