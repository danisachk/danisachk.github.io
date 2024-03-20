// const URL = "http://127.0.0.1:5000/"
const URL = "https://danisachk.pythonanywhere.com/"

const app = Vue.createApp({
    data() {
        return {
            suscriptores: []
        }
    }, methods: {
        obtenerSuscriptores() {
            // Obtenemos el contenido del inventario 
            fetch(URL + 'suscriptores')
            .then(response => {
                // Parseamos la respuesta JSON 
                if (response.ok) { 
                    return response.json();
                }
            })
            .then(data => {
                // El código Vue itera este elemento para generar la tabla 
                this.suscriptores = data;
            })
            .catch(error => {
                console.log('Error:', error);
                alert('Error al obtener los suscriptores.');
            });
        }, 
        eliminarSuscriptor(dni) {
            if (confirm('¿Estás seguro de que quieres eliminar este suscriptor?')) {
                fetch(URL + `suscriptores/${dni}`, { method: 'DELETE' })
                .then(response => { if (response.ok) {
                    this.suscriptores = this.suscriptores.filter(suscriptor => suscriptor.dni !== dni);
                    alert('Suscriptor eliminado correctamente.');
                }
            })
            .catch(error => {
                alert(error.message);
            });
        }
    }
    }, mounted() {
        //Al cargar la página, obtenemos la lista de productos 
        this.obtenerSuscriptores();
    }
});
app.mount('body');