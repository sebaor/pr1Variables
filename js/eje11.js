document.querySelector("#btnCalcular").addEventListener("click", calcularIVA);

/* Declaro una variable inicializada */
let iva = 0.22;

function calcularIVA(){
    let importe = Number(document.querySelector("#txtImporte").value);
    Number(document.querySelector("#txtImporte").value = "");
    Number(document.querySelector("#txtImporte").focus());
    let importeFinal = importe + (importe * iva);
    document.querySelector("#pResultado").innerHTML = `El importe final es de: $${importeFinal} IVA incluído`;
}