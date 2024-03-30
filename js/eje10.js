document.querySelector("#btnCalcular").addEventListener("click", calcularImporteFinal);

function calcularImporteFinal(){
    let importeInicial = Number(document.querySelector("#txtImporte").value);
    Number(document.querySelector("#txtImporte").value = "");
    Number(document.querySelector("#txtImporte").focus());
    let porcentajeRecargo = Number(document.querySelector("#txtPorcentaje").value);
    Number(document.querySelector("#txtPorcentaje").value = "");
    /* Formula */
    let importeFinal = importeInicial + (importeInicial * porcentajeRecargo);
    document.querySelector("#pResultado").innerHTML = `El importe final es de: $${importeFinal}`;
}