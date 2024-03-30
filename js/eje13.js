document.querySelector("#btnContar").addEventListener("click", calcularContador);

let contador = 0;

function calcularContador(){
    document.querySelector("#pResultado").innerHTML = contador++;
}