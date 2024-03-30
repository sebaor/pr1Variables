document.querySelector("#btnCalcular").addEventListener("click", calcularConversion);

function calcularConversion(){
    let valorUYU = Number(document.querySelector("#txtValorUyu").value);
    Number(document.querySelector("#txtValorUyu").value = "");
    Number(document.querySelector("#txtValorUyu").focus());
    let valorUSD = Number(document.querySelector("#txtValorUsd").value);
    Number(document.querySelector("#txtValorUsd").value = "");
    let resultadoConversion = valorUYU * valorUSD;
    document.querySelector("#pResultado").innerHTML = `El equivalente de $${valorUYU} es de: USD ${resultadoConversion}`;
}