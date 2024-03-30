document.querySelector("#btnAcumulador").addEventListener("click", calcularAcumulado);

document.querySelector("#btnAcumulado").addEventListener("click", mostrarAcumulado);

let contador = 0;

function calcularAcumulado(){
    let valorIngresado = Number(document.querySelector("#txtValor").value);
    Number(document.querySelector("#txtValor").value = "");
    Number(document.querySelector("#txtValor").focus());
    contador += valorIngresado;
}
function mostrarAcumulado(){
    document.querySelector("#pResultado").innerHTML = `El acumulado es de: ${contador}`;
}