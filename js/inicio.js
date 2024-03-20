// function validarContraseña() {
//     var contraseñaIngresada = document.getElementById("contraseña").value;
//     var contraseñaCorrecta = "contraseña123"; // Contraseña fija para fines de ejemplo

//     if (contraseñaIngresada === contraseñaCorrecta) {
//         alert("¡Contraseña correcta! Puedes continuar.");
//         return true;
//     } else {
//         alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
//         return false;
//     }
// }

// // Agregar la funcionalidad para validar la contraseña al presionar "Enter"
// document.getElementById("contraseña").addEventListener("keyup", function(event) {
//     if (event.key === "Enter") {
//         event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
//         validarContraseña(); // Llamar a la función para validar la contraseña
//     }
// });

function validarContraseña() {
    var contraseñaIngresada = document.getElementById("contraseña").value;
    var contraseñaCorrecta = "Contraseña123"; // Contraseña fija para fines de ejemplo

    if (contraseñaIngresada === contraseñaCorrecta) {
        // Contraseña correcta, redirigir a otra página
        window.location.href = "index.html"; // Cambia "otra_pagina.html" por la URL de la página a la que deseas redirigir
    } else {
        alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
    }
}

// Agregar la funcionalidad para validar la contraseña al presionar "Enter"
document.getElementById("contraseña").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // Evitar el comportamiento predeterminado del formulario
        validarContraseña(); // Llamar a la función para validar la contraseña
    }
});