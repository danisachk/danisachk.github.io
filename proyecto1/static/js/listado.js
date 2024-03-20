// const URL = "http://127.0.0.1:5000/"
const URL = "https://danisachk.pythonanywhere.com/"

// Realizamos la solicitud GET al servidor para obtener todos los productos
fetch(URL + 'suscriptores')
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } 
        else {

            // Si hubo un error, lanzar explícitamente una excepción para ser "catcheada" más adelante 
            throw new Error('Error al obtener los suscriptores.');
        } 
    })
    .then(function (data) {
        let tablaSuscriptores = document.getElementById('tablaSuscriptores');
        // Iteramos sobre los productos y agregamos filas a la tabla
        for (let suscriptor of data) {
            let fila = document.createElement('tr');
            fila.innerHTML = '<td>' + suscriptor.dni + '</td>' + '<td>' + suscriptor.nombre + '</td>' + '<td align="right">' + suscriptor.apellido + '</td>' + '<td align="right">' + suscriptor.mail + '</td>' + '<td><img src=https://www.pythonanywhere.com/user/danisachk/files/home/danisachk/mysite/static/img/' + suscriptor.imagen_url +' alt="Imagen del producto" style="width: 100px;"></td>' + '<td align="right">' + suscriptor.telefono + '</td>';
            // fila.innerHTML = '<td>' + suscriptor.dni + '</td>' + '<td>' + suscriptor.nombre + '</td>' + '<td align="right">' + suscriptor.apellido + '</td>' + '<td align="right">' + suscriptor.mail + '</td>' + '<td><img src==static/img/' + suscriptor.imagen_url +' alt="Imagen del producto" style="width: 100px;"></td>' + '<td align="right">' + suscriptor.telefono + '</td>';
            // Mostrar miniatura de la imagen 
            //Una vez que se crea la fila con el contenido del producto, se agrega a la tabla utilizando el método appendChild del elemento tablaProductos. 
            tablaSuscriptores.appendChild(fila); 
        }
    })
    .catch(function (error) {
        // En caso de error
        alert('Error al obtener los suscriptores.');
        console.error('Error:', error);
    })