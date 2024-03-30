document.querySelector("#btnCalcular").addEventListener("click", calcularResto);

function calcularResto(){
    let valor1 = Number(document.querySelector("#txtValorUno").value);
    Number(document.querySelector("#txtValorUno").value = "");
    Number(document.querySelector("#txtValorUno").focus());
    let valor2 = Number(document.querySelector("#txtValorDos").value);
    Number(document.querySelector("#txtValorDos").value = "");
    let resultadoResto = valor1 % valor2;
    document.querySelector("#pResultado").innerHTML = `El resto de división es de: ${resultadoResto}`;
}