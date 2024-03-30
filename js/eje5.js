document.querySelector("#btnCalcular").addEventListener("click", calcularArea);

function calcularArea(){
    let lado = Number(document.querySelector("#txtLado").value);
    Number(document.querySelector("#txtLado").value = "");
    Number(document.querySelector("#txtLado").focus());
    /* Formula: Área = Longitud del lado 2 */
    let area = lado * lado;
    document.querySelector("#pResultado").innerHTML = `El área del cuadrado es de: ${area}`;
}