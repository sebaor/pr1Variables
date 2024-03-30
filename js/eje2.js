document.querySelector("#btnSumar").addEventListener("click", calcularSuma);

function calcularSuma(){
    /* Creo tres variables locales */
    let valor1 = Number(document.querySelector("#txtValorUno").value);
    /* Limpio campo de texto (numero 1): */
    Number(document.querySelector("#txtValorUno").value ="");
    /* Foco a mi campo de texto (numero 1)*/
    document.querySelector("#txtValorUno").focus();
    let valor2 = Number(document.querySelector("#txtValorDos").value);
    /* Limpio campo de texto (numero): */
    Number(document.querySelector("#txtValorDos").value ="");
    let resultado = valor1 + valor2;
    document.querySelector("#pResultado").innerHTML = `El resultado de la suma es: ${resultado}`;
}