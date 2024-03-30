/* Capturo eventos (btn) */
document.querySelector("#btnFormato").addEventListener("click", mostrarFormato);

function mostrarFormato(){
    /* Creo mis variables de forma local*/
    let nombre = document.querySelector("#txtNombreIngresado").value;
    /* Una vez que el usuario haya completado el campo este se reseteara */
    document.querySelector("#txtNombreIngresado").value = "";
    /* Foco a mi campo de texto */
    document.querySelector("#txtNombreIngresado").focus();
    let apellido = document.querySelector("#txtApellidoIngresado").value;
    document.querySelector("#txtApellidoIngresado").value = "";
    document.querySelector("#pResultado").innerHTML = `${apellido}, ${nombre}`;
}
