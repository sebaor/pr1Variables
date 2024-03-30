document.querySelector("#btnCalcular").addEventListener("click", calcularOperaciones);

function calcularOperaciones(){
    let valor1 = Number(document.querySelector("#txtValor1").value);
    Number(document.querySelector("#txtValor1").value = "");
    Number(document.querySelector("#txtValor1").focus());
    let valor2 = Number(document.querySelector("#txtValor2").value);
    Number(document.querySelector("#txtValor2").value = "");
    let valor3 = Number(document.querySelector("#txtValor3").value);
    Number(document.querySelector("#txtValor3").value = "");
    let resultado1 = valor1 * valor1;
    console.log(resultado1)
    let resultado2 = valor2 + valor3;
    console.log(resultado2)
    let resultadoFinal = resultado1 - resultado2
    document.querySelector("#pResultado").innerHTML = `El resultado de elevar el primer valor al cuadrado, menos la suma de valor 2 y 3 es de: ${resultadoFinal}`;
}