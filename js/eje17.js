document.querySelector("#btnCalcular").addEventListener("click", calcularChirridos);

function calcularChirridos(){
    let nChirridos = Number(document.querySelector("#txtChirridos").value);
    Number(document.querySelector("#txtChirridos").value = "");
    Number(document.querySelector("#txtChirridos").focus());
    /* formula de temperatura en Fahrenheit */
    let tempFahrenheit = 50 + (nChirridos - 40 / 4);
    /* formula para convertir Fahrenheit a Celsius */
    let tempFaC = (tempFahrenheit - 32) / 1.8;
    /* formula de temperatura en Celcius */
    let tempCelcius = 10 + (nChirridos - 40 / 7);
    document.querySelector("#pResultado").innerHTML = `La temperatura actuál en Fahrenheit es de: ${tempFahrenheit}<br><br>
    La temperatura convertida de Fahrenheit a grados Celcius es de: ${tempFaC}<br><br>
    La temperatura en grados Celcius es de: ${tempCelcius}
    `
}