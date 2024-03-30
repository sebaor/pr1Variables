document.querySelector("#btnCalcular").addEventListener("click", calcularOperaciones);

function calcularOperaciones(){
    let valor1 = Number(document.querySelector("#txtValor1").value);
    Number(document.querySelector("#txtValor1").value = "");
    Number(document.querySelector("#txtValor1").focus());
    let valor2 = Number(document.querySelector("#txtValor2").value);
    Number(document.querySelector("#txtValor2").value = "");let valor3 = Number(document.querySelector("#txtValor3").value);
    Number(document.querySelector("#txtValor3").value = "");
    resultadoFinal = (valor1 + valor2) - valor3;
    document.querySelector("#pResultado").innerHTML = `El resultado de sumar los dos primeros valores menos el tercero es: ${resultadoFinal}`;
}