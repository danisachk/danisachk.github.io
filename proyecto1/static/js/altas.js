// const URL = "http://127.0.0.1:5000/"
const URL = "https://danisachk.pythonanywhere.com/"

// Capturamos el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function (event) {

    event.preventDefault(); // Evitamos que se envie el form

    var formData = new FormData();
    formData.append('dni', document.getElementById('dni').value);
    formData.append('nombre', document.getElementById('nombre').value);
    formData.append('apellido', document.getElementById('apellido').value);
    formData.append('mail', document.getElementById('mail').value);
    formData.append('imagen', document.getElementById('imagenSuscriptor').files[0]);
    formData.append('telefono', document.getElementById('telefonoSuscriptor').value);
    // Realizamos la solicitud POST al servidor 
    fetch(URL + 'suscriptores', {
        method: 'POST', body: formData // Aquí enviamos formData en lugar de JSON
    })
    //Después de realizar la solicitud POST, se utiliza el método then() para manejar la respuesta del servidor. 
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        else {
             // Si hubo un error, lanzar explícitamente una excepción 
             // para ser "catcheada" más adelante 
             throw new Error('Error al agregar el suscriptor.');
        }
    })

    // Respuesta OK 
    .then(function () {
        // En caso de éxito 
        alert('Suscriptor agregado correctamente.');
    })
    .catch(function (error) {
        // En caso de error
        alert('Error al agregar el suscriptor.');
        console.error('Error:', error);
    }) 
    .finally(function () {
        // Limpiar el formulario en ambos casos (éxito o error)
        document.getElementById('dni').value = "";
        document.getElementById('nombre').value = "";
        document.getElementById('apellido').value = "";
        document.getElementById('mail').value = "";
        document.getElementById('imagenSuscriptor').value = "";
        document.getElementById('telefonoSuscriptor').value = "";
    });
})
