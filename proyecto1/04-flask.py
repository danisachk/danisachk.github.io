#-------------------------------------------------------------------- 
# Instalar con pip install Flask 
from flask import Flask, request, jsonify, render_template
from flask import request
# Instalar con pip install flask-cors 
from flask_cors import CORS
# Instalar con pip install mysql-connector-python 
import mysql.connector
# Si es necesario, pip install Werkzeug 
from werkzeug.utils import secure_filename
# No es necesario instalar, es parte del sistema standard de Python 
import os
import time
#-------------------------------------------------------------------- 


app = Flask(__name__)
CORS(app) # Esto habilitará CORS para todas las rutas
# CORS(app, origins="http://127.0.0.1:5501")
# CORS(app, resources={r"/productos/*": {"origins": "http://127.0.0.1:5500"}})

class Catalogo: 

# Constructor de la clase 
    def __init__(self, host, user, password, database): 
        # Primero, establecemos una conexión sin especificar la base de datos 
        self.conn = mysql.connector.connect( 
            host=host, 
            user=user, 
            password=password
        ) 
        self.cursor = self.conn.cursor() 
        # Intentamos seleccionar la base de datos 
        try: self.cursor.execute(f"USE {database}") 
        except mysql.connector.Error as err: 
            # Si la base de datos no existe, la creamos 
            if err.errno == mysql.connector.errorcode.ER_BAD_DB_ERROR:
                self.cursor.execute(f"CREATE DATABASE {database}") 
                self.conn.database = database
            else:
                raise err 
        # Una vez que la base de datos está establecida, creamos la tabla si no existe
        self.cursor.execute('''CREATE TABLE IF NOT EXISTS suscriptores (
                            dni INT,
                            nombre VARCHAR(255) NOT NULL,
                            apellido VARCHAR(255) NOT NULL,
                            mail VARCHAR(255) NOT NULL,
                            imagen_url VARCHAR(255),
                            telefono INT)''')
        self.conn.commit() 
        # Cerrar el cursor inicial y abrir uno nuevo con el parámetro dictionary=True 
        self.cursor.close()
        self.cursor = self.conn.cursor(dictionary=True) 
        
        #---------------------------------------------------------------- 
    def listar_suscriptores(self):
        self.cursor.execute("SELECT * FROM suscriptores")
        suscriptores = self.cursor.fetchall()
        #print(productos)
        return suscriptores
    #----------------------------------------------------------------
    def consultar_suscriptor(self, dni):
        # Consultamos un producto a partir de su código 
        self.cursor.execute(f"SELECT * FROM suscriptores WHERE dni = {dni}")
        return self.cursor.fetchone() 
    #---------------------------------------------------------------- 
    def mostrar_suscriptor(self, dni): 
        # Mostramos los datos de un producto a partir de su código 
        suscriptor = self.consultar_suscriptor(dni) 
        if suscriptor: 
            print("-" * 40) 
            print(f"DNI........: {suscriptor['dni']}") 
            print(f"Nombre.....: {suscriptor['nombre']}") 
            print(f"Apellido...: {suscriptor['apellido']}") 
            print(f"Mail.......: {suscriptor['mail']}") 
            print(f"Imagen.....: {suscriptor['imagen_url']}") 
            print(f"Telefono...: {suscriptor['telefono']}") 
            print("-" * 40) 
        else: 
            print("Suscriptor no encontrado.") 
            
    def agregar_suscriptor(self, dni, nombre, apellido, mail, imagen, telefono): 
        self.cursor.execute(f"SELECT * FROM suscriptores WHERE dni = {dni}") 
        suscriptor_existe = self.cursor.fetchone() 
        if suscriptor_existe: 
            return False 
        
        sql = "INSERT INTO suscriptores (dni, nombre, apellido, mail, imagen_url, telefono) VALUES (%s, %s, %s, %s, %s, %s)" 
        valores = (dni, nombre, apellido, mail, imagen, telefono) 
        self.cursor.execute(sql,valores) 
        self.conn.commit() 
        return True 
    
    def eliminar_suscriptor(self, dni): 
        # Eliminamos un producto de la tabla a partir de su código 
        self.cursor.execute(f"DELETE FROM suscriptores WHERE dni = {dni}") 
        self.conn.commit() 
        return self.cursor.rowcount > 0 
    
    def modificar_suscriptor(self, dni, nuevo_nombre, nuevo_apellido, nuevo_mail, nueva_imagen, nuevo_telefono): 
        sql = "UPDATE suscriptores SET nombre = %s, apellido = %s, mail = %s, imagen_url = %s, telefono = %s WHERE dni = %s"
        valores = (nuevo_nombre, nuevo_apellido, nuevo_mail, nueva_imagen, nuevo_telefono, dni)
        self.cursor.execute(sql, valores)
        self.conn.commit()
        return self.cursor.rowcount > 0
    

#--------------------------------------------------------------------
# CUERPO DEL PROGRAMA
#-------------------------------------------------------------------- 

# Crear una instancia de la clase Catalogo 
# catalogo = Catalogo(host='localhost', user='root', password='', database='miapp') 
catalogo = Catalogo(host='danisachk.mysql.pythonanywhere-services.com', user='danisachk', password='codoacodo', database='danisachk$miapp') 

# Carpeta para guardar las imagenes 
# ruta_destino = 'static/img/' 
ruta_destino = '/home/danisachk/mysite/static/img/' 


# catalogo.agregar_suscriptor(1234561, 'Nombre1', 'Apellido1', 'mail1@gmail.com', 'Imagen1.jpg', 1)
# catalogo.agregar_suscriptor(1234562, 'Nombre2', 'Apellido2', 'mail2@gmail.com', 'Imagen2.jpg', 2)
# catalogo.agregar_suscriptor(1234563, 'Nombre3', 'Apellido3', 'mail3@gmail.com', 'Imagen3.jpg', 3)
# catalogo.agregar_suscriptor(1234564, 'Nombre4', 'Apellido4', 'mail4@gmail.com', 'Imagen4.jpg', 4)
# catalogo.agregar_suscriptor(1234565, 'Nombre5', 'Apellido5', 'mail5@gmail.com', 'Imagen5.jpg', 5)
# catalogo.agregar_suscriptor(1234566, 'Nombre6', 'Apellido6', 'mail6@gmail.com', 'Imagen6.jpg', 6)
# catalogo.agregar_suscriptor(1234567, 'Nombre7', 'Apellido7', 'mail7@gmail.com', 'Imagen7.jpg', 7)
# catalogo.agregar_suscriptor(1234568, 'Nombre8', 'Apellido8', 'mail8@gmail.com', 'Imagen8.jpg', 8)
# catalogo.agregar_suscriptor(1234569, 'Nombre9', 'Apellido9', 'mail9@gmail.com', 'Imagen9.jpg', 9)
# catalogo.agregar_suscriptor(1234560, 'Nombre10', 'Apellido10', 'mail10@gmail.com', 'Imagen10.jpg', 10)
# catalogo.agregar_suscriptor(1234511, 'Nombre11', 'Apellido11', 'mail11@gmail.com', 'Imagen11.jpg', 11)

@app.route("/")
def home():
    return render_template('prueba.html', title='Flask API', heading='Bienvenidos a Flask!', contenido='API Catálogo de suscriptores')

#-------------------------------------------------------------------- 

@app.route("/suscriptores", methods=["GET"]) 
def listar_suscriptores(): 
    suscriptores = catalogo.listar_suscriptores()
    return jsonify(suscriptores) 

#-------------------------------------------------------------------- 

@app.route("/suscriptores/<int:dni>", methods=["GET"]) 
def mostrar_suscriptor(dni): 
    catalogo.mostrar_suscriptor(dni) 
    suscriptor = catalogo.consultar_suscriptor(dni) 
    if suscriptor: 
        return jsonify(suscriptor) 
    else: 
        return "Suscriptor no encontrado", 404 

#-------------------------------------------------------------------- 

@app.route("/suscriptores", methods=["POST"]) 
def agregar_suscriptor(): 
# Recojo los datos del form 
    dni = request.form['dni'] 
    nombre = request.form['nombre'] 
    apellido = request.form['apellido'] 
    mail = request.form['mail'] 
    telefono = request.form['telefono']
    imagen = request.files['imagen'] 
    nombre_imagen = secure_filename(imagen.filename) 
    nombre_base, extension = os.path.splitext(nombre_imagen) 
    nombre_imagen = f"{nombre_base}_{int(time.time())}{extension}" 
    imagen.save(os.path.join(ruta_destino, nombre_imagen)) 

    if catalogo.agregar_suscriptor(dni, nombre, apellido, mail, nombre_imagen, telefono):
        return jsonify({"mensaje": "Suscriptor agregado"}), 201 
    else: 
        return jsonify({"mensaje": "Suscriptor ya existe"}), 400 

#-------------------------------------------------------------------- 

@app.route("/suscriptores/<int:dni>", methods=["DELETE"]) 
def eliminar_suscriptor(dni): 
    # Primero, obtén la información del producto para encontrar la imagen 
    suscriptor = catalogo.consultar_suscriptor(dni) 
    if suscriptor: 
        # Eliminar la imagen asociada si existe 
        ruta_imagen = os.path.join(ruta_destino, suscriptor['imagen_url']) 
        if os.path.exists(ruta_imagen): 
            os.remove(ruta_imagen) 
            # Luego, elimina el producto del catálogo 
            if catalogo.eliminar_suscriptor(dni): 
                return jsonify({"mensaje": "Suscriptor eliminado"}), 200 
            else: 
                return jsonify({"mensaje": "Error al eliminar el suscriptor"}), 500 
    else:      
        return jsonify({"mensaje": "Suscriptor no encontrado"}), 404 

#-------------------------------------------------------------------- 
     
@app.route("/suscriptores/<int:dni>", methods=["PUT"]) 
def modificar_suscriptor(dni): 
    # Recojo los datos del form 
    nuevo_nombre = request.form.get("nombre") 
    nuevo_apellido = request.form.get("apellido") 
    nuevo_mail = request.form.get("mail") 
    nuevo_telefono = request.form.get("telefono") 
    # Procesamiento de la imagen 
    imagen = request.files['imagen'] 
    nombre_imagen = secure_filename(imagen.filename) 
    nombre_base, extension = os.path.splitext(nombre_imagen) 
    nombre_imagen = f"{nombre_base}_{int(time.time())}{extension}" 
    imagen.save(os.path.join(ruta_destino, nombre_imagen)) 
    # Actualización del producto 
    if catalogo.modificar_suscriptor(dni, nuevo_nombre, nuevo_apellido, nuevo_mail, nombre_imagen, nuevo_telefono): 
        return jsonify({"mensaje": "Suscriptor modificado"}), 200 
    else: 
        return jsonify({"mensaje": "Suscriptor no encontrado"}), 404 

#-------------------------------------------------------------------- 

if __name__ == "__main__": 
    app.run(debug=True)