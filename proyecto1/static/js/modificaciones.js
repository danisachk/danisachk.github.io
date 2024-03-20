// const URL = "http://127.0.0.1:5000/"
const URL = "https://danisachk.pythonanywhere.com/"

const app = Vue.createApp({
    data() {
        return {
            dni: '',
            nombre: '',
            apellido: '',
            mail: '',
            telefono: '',
            imagen_url: '',
            imagenUrlTemp: null,
            mostrarDatosSuscriptor: false,
        };
    },
    methods: {
        obtenerSuscriptor() {
            fetch(URL + 'suscriptores/' + this.dni)
            .then(response => {
                if (response.ok) {
                    return response.json()
                } 
                else {
                    //Si la respuesta es un error, lanzamos una excepción para ser "catcheada" más adelante en el catch.
                    throw new Error('Error al obtener los datos del suscriptor.')
                }
            })
            .then(data => {
                this.nombre = data.nombre;
                this.apellido = data.apellido;
                this.mail = data.mail;
                this.telefono = data.telefono;
                this.imagen_url = data.imagen_url;
                this.mostrarDatosSuscriptor = true;
            })
            .catch(error => {
                console.log(error);
                alert('DNI no encontrado.');
            })
        },
        seleccionarImagen(event) {
            const file = event.target.files[0];
            this.imagenSeleccionada = file;
            this.imagenUrlTemp = URL.createObjectURL(file); 
            // Crea una URL temporal para la vista previa
        },
        guardarCambios() {
            const formData = new FormData();
            formData.append('dni', this.dni);
            formData.append('nombre', this.nombre);
            formData.append('apellido', this.apellido);
            formData.append('telefono', this.telefono);
            formData.append('mail', this.mail);
            if (this.imagenSeleccionada) {
                formData.append('imagen', this.imagenSeleccionada, this.imagenSeleccionada.name);
            } //Utilizamos fetch para realizar una solicitud PUT a la API y guardar los cambios. 
            fetch(URL + 'suscriptores/' + this.dni, {
                method: 'PUT', body: formData,
            })
            .then(response => {
                //Si la respuesta es exitosa, utilizamos response.json() para parsear la respuesta en formato JSON.
                if (response.ok) {
                    return response.json()
                }
                else { //Si la respuesta es un error, lanzamos una excepción. 
                    throw new Error('Error al guardar los cambios del suscriptor.')
                }
            }) 
            .then(data => {
                alert('Suscriptor actualizado correctamente.');
                this.limpiarFormulario();
            })
            .catch(error => {
                console.error('Error:', error);
                alert('Error al actualizar el suscriptor.');
            });
        },
        limpiarFormulario() {
            this.dni = '';
            this.nombre = '';
            this.apellido = '';
            this.mail = '';
            this.imagen_url = '';
            this.imagenSeleccionada = null;
            this.imagenUrlTemp = null;
            this.mostrarDatosSuscriptor = false;
        }
    }
});
app.mount('#app');