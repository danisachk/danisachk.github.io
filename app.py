from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

@app.route('/')
def formulario_contacto():
    return render_template('index.html')

@app.route('/enviar_formulario', methods=['POST'])
def enviar_formulario():
    nombre = request.form['name']
    correo = request.form['email']
    mensaje = request.form['message']

    # Configura el servidor de correo
    servidor_smtp = smtplib.SMTP('smtp.gmail.com', 587)
    servidor_smtp.starttls()
    servidor_smtp.login('danisa.achkar@gmail.com', 'ftoe nnav egvs ygab')

    # Construye el mensaje
    cuerpo_mensaje = f"Nombre: {nombre}\nCorreo: {correo}\nMensaje: {mensaje}"

    try:
        # Envía el correo electrónico
        servidor_smtp.sendmail('danisa.achkar@gmail.com', correo, cuerpo_mensaje)
        servidor_smtp.quit()
        return 'Mensaje enviado con éxito'
    except Exception as e:
        return f'Error al enviar el mensaje: {str(e)}'

if __name__ == '__main__':
    app.run(debug=True)
