document.querySelector("#btnSumar").addEventListener("click", calcularSuma);

function calcularSuma(){
    let valor1 = Number(document.querySelector("#txtValorUno").value);
    Number(document.querySelector("#txtValorUno").value = "");
    Number(document.querySelector("#txtValorUno").focus());
    let valor2 = Number(document.querySelector("#txtValorDos").value);
    Number(document.querySelector("#txtValorDos").value = "");
    let valor3 = Number(document.querySelector("#txtValorTres").value);
    Number(document.querySelector("#txtValorTres").value = "");
    let resultado = valor1 + valor2 + valor3;
    document.querySelector("#pResultado").innerHTML = `El resultado de la suma es: ${resultado}`;
}