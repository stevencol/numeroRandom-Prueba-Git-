var numero = document.getElementById("numero");

var respuesta = document.getElementById("respuesta");



function iniciar() {
    var aleatorio = Math.round(Math.random() * (10 * 1));
    console.log(aleatorio)
    if (parseInt(numero.value) === aleatorio) {
        respuesta.style.color = "green";
        respuesta.innerHTML = "Adivino";



    } else {
        respuesta.style.color = "red";
        respuesta.innerHTML = "<small>No adivino</small>";
    }
    numero.value = "";
    numero.focus();
    
}

