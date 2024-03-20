let header = `
    <div id="empresa">
        <a href="index.html" id="iconheader">
            <img id="logo" src="static/img/logo.png" alt="Mundo">
        </a>
        <p>Green Solutions</p>
    </div>
    <div class="barra">
        <div class="container-fluid">
            <nav id="nav" class="navbar navbar-expand-md navbar-light">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-toggler" aria-controls="navbar-toggler" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-toggler">
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link" href="index.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="soluciones.html">Soluciones</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="clientes.html" target="_self">Clientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contacto.html" target="_self">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="login.html" target="_self">LogIn</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="altass.html" target="_self">Suscripción</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
`
 document.getElementById ("idheader").innerHTML = header;

 let footer =`
    
    <nav id="redes">
        <a href="https://www.facebook.com" target="_blank" alt="Facebook"><i class="fa-brands fa-facebook" style="color: #fffff6;"></i></a>
        <a href="https://twitter.com" target="_blank" alt="Twitter"><i class="fa-brands fa-twitter" style="color: #fffff6;"></i></a>
        <a href="https://www.instagram.com" target="_blank" alt="Instagram"><i class="fa-brands fa-instagram" style="color: #fffff6;"></i></a>
        <a href="https://youtube.com" target="_blank" alt="Youtube"><i class="fa-brands fa-youtube" style="color: #fffff6;"></i></a>
    </nav>
    <br>
    <p id="reg">© Green Solutions - 2023</p>
 `
 document.getElementById("idfooter").innerHTML = footer;