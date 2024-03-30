document.querySelector("#btnSumyMult").addEventListener("click", calcularSumayMultiplicacion);

function calcularSumayMultiplicacion(){
    let valor1 = Number(document.querySelector("#txtValorUno").value);
    Number(document.querySelector("#txtValorUno").value = "");
    Number(document.querySelector("#txtValorUno").focus());
    let valor2 = Number(document.querySelector("#txtValorDos").value);
    Number(document.querySelector("#txtValorDos").value = "");
    let resultadoSuma = valor1 + valor2;
    let resultadoMultiplicacion = valor1 * valor2;
    document.querySelector("#pResultado").innerHTML = `El resultado de la suma es: ${resultadoSuma} <br><br>El resultado de la multiplicación es: ${resultadoMultiplicacion}`;
}