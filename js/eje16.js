document.querySelector("#btnCalcular").addEventListener("click", cacularPuntos);

let acumuladorDePuntos = 0;

function cacularPuntos(){
    let partidosG = Number(document.querySelector("#txtPartidosGanados").value);
    Number(document.querySelector("#txtPartidosGanados").value = "");
    let partidosE = Number(document.querySelector("#txtPartidoEmpatados").value);
    Number(document.querySelector("#txtPartidoEmpatados").value = "");
    let partidosP = Number(document.querySelector("#txtPartidosPerdidos").value);
    Number(document.querySelector("#txtPartidosPerdidos").value = "");
    acumuladorDePuntos += partidosG + partidosE + partidosP;
    console.log(acumuladorDePuntos);
    document.querySelector("#pResultado").innerHTML = `El total de puntos obtenidos es de: ${acumuladorDePuntos}`;
}