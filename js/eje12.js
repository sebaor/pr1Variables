document.querySelector("#btnCalcular").addEventListener("click", calcularIMC);

function calcularIMC(){
    let pesoIngresado = Number(document.querySelector("#txtPeso").value);
    Number(document.querySelector("#txtPeso").value = "");
    Number(document.querySelector("#txtPeso").focus());
    let alturaIngresada = Number(document.querySelector("#txtAltura").value);
    Number(document.querySelector("#txtAltura").value = "");
    /* Fórmula del IMC */
    let resultadoImc = pesoIngresado / (alturaIngresada * alturaIngresada);
    document.querySelector("#pResultado").innerHTML = `Su indice de masa corporal es de: ${resultadoImc}`;
}