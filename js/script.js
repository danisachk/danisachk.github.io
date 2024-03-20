// PRESENTACIÓN: 

// Presentación ESPAÑOL
document.addEventListener('DOMContentLoaded', function () {
    const codeElement = document.getElementById('code');
    const codeText = `DANISA ACHKAR`;

    const codeElement2 = document.getElementById('code2');
    const codeText2 = `<Desarrollo Web FullStack>`;

    // Divide el código en letras para codeText
    const codeLetters = codeText.trim().split('');

    // Añade cada letra con un retraso simulando la escritura para codeText
    codeLetters.forEach((letter, index) => {
        setTimeout(() => {
            codeElement.textContent += letter;
            codeElement.scrollTop = codeElement.scrollHeight;

            // Cuando se completa la animación de codeText, iniciar la animación de codeText2
            if (index === codeLetters.length - 1) {
                animateCodeText2();
            }
        }, index * 120);
    });

    // Agrega la clase para la animación de escritura para codeText
    codeElement.classList.add('typing-animation');

    // Función para animar codeText2
    function animateCodeText2() {
        // Divide el código en letras para codeText2
        const codeLetters2 = codeText2.trim().split('');

        // Añade cada letra con un retraso simulando la escritura para codeText2
        codeLetters2.forEach((letter, index) => {
            setTimeout(() => {
                codeElement2.textContent += letter;
                codeElement2.scrollTop = codeElement2.scrollHeight;
            }, index * 100);
        });

        // Agrega la clase para la animación de escritura para codeText2
        codeElement2.classList.add('typing-animation');
    }
});

// Presentación INGLÉS
document.addEventListener('DOMContentLoaded', function () {
    const codeElement3 = document.getElementById('code3');
    const codeText3 = `DANISA ACHKAR`;

    const codeElement4 = document.getElementById('code4');
    const codeText4 = `<FullStack Web Development>`;

    // Divide el código en letras para codeText
    const codeLetters2 = codeText3.trim().split('');

    // Añade cada letra con un retraso simulando la escritura para codeText
    codeLetters2.forEach((letter, index) => {
        setTimeout(() => {
            codeElement3.textContent += letter;
            codeElement3.scrollTop = codeElement3.scrollHeight;

            // Cuando se completa la animación de codeText, iniciar la animación de codeText2
            if (index === codeLetters2.length - 1) {
                animateCodeText2();
            }
        }, index * 120);
    });

    // Agrega la clase para la animación de escritura para codeText
    codeElement3.classList.add('typing-animation');

    // Función para animar codeText2
    function animateCodeText2() {
        // Divide el código en letras para codeText2
        const codeLetters4 = codeText4.trim().split('');

        // Añade cada letra con un retraso simulando la escritura para codeText2
        codeLetters4.forEach((letter, index) => {
            setTimeout(() => {
                codeElement4.textContent += letter;
                codeElement4.scrollTop = codeElement4.scrollHeight;
            }, index * 100);
        });

        // Agrega la clase para la animación de escritura para codeText2
        codeElement4.classList.add('typing-animation');
    }
});


//----------------------------------------------------------------------------
// FOOTER
let footer =`
<div class="footer">
    <ul class="social-media-list">
        <li><a href="https://www.linkedin.com/in/danisa-achkar/" target="_blank" class="contact-icon">
        <i class="fa fa-linkedin" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://github.com/danisachk" target="_blank" class="contact-icon">
        <i class="fa fa-github" aria-hidden="true"></i></a>
        </li>
        <!-- 
        <li><a href="#" target="_blank" class="contact-icon">
        <i class="fa fa-whatsapp" aria-hidden="true"></i></a>
        </li>
        -->
        <li><a href="https://www.instagram.com/danisa_achkar/" target="_blank" class="contact-icon">
        <i class="fa fa-instagram" aria-hidden="true"></i></a>
        </li>
        <li><a href="https://www.facebook.com/danisa.achkar/" target="_blank" class="contact-icon">
        <i class="fa fa-facebook" aria-hidden="true"></i></a>
        </li>
    </ul>
    <div class="copyright">&copy; 2024 ALL OF THE RIGHTS RESERVED</div>
</div>
`
document.getElementById("idfooter").innerHTML = footer;

// FORMULARIO
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

//---------------------------------------------------------------------------------
// // BOTÓN PARA ARRIBA Y SCROLL NAVBAR

$(document).ready(function() {
    const navbar = $("#navbar");
    const scrollNavbar = $("#scrollNavbar");
    const btnArriba = $("#btnArriba");

    $(window).scroll(function() {
        const currentScrollPos = $(this).scrollTop();

        // Mostrar u ocultar la barra de navegación con efecto de deslizamiento
        if (currentScrollPos < 400) {
            navbar.css("top", "0");
            scrollNavbar.slideUp(); // Desliza hacia arriba para ocultar la scrollNavbar
        } else {
            navbar.css("top", "-40px");
            scrollNavbar.slideDown(); // Desliza hacia abajo para mostrar la scrollNavbar
        }

        // Mostrar u ocultar el botón "Ir arriba"
        btnArriba.css("display", currentScrollPos > 30 ? "block" : "none");
    });

    // Desplazamiento suave al hacer clic en el botón "Ir arriba"
    btnArriba.click(function() {
        $("html, body").animate({ scrollTop: 0 }, "fast");
    });
});


//----------------------------------------------------------------------------
// Language Switch
// const translateButton = document.getElementById('translateButton');
//     const content = document.getElementById('content');
//     const originalLanguage = 'es';
//     let currentLanguage = originalLanguage;

//     translateButton.addEventListener('click', () => {
//       if (currentLanguage === 'es') {
//         currentLanguage = 'en';
//         translateButton.textContent = 'Translate to Spanish';
//       } else {
//         currentLanguage = 'es';
//         translateButton.textContent = 'Traducir a Inglés';
//       }
      
//       translatePage();
//     });

//     function translatePage() {
//       const elementsToTranslate = document.querySelectorAll('[data-translate]');
      
//       elementsToTranslate.forEach(element => {
//         const textToTranslate = element.dataset.translate;

//         $.ajax({
//           url: 'https://translation.googleapis.com/language/translate/v2',
//           type: 'POST',
//           data: {
//             q: textToTranslate,
//             target: currentLanguage,
//             key: 'YOUR_GOOGLE_TRANSLATE_API_KEY'
//           },
//           success: function(response) {
//             const translatedText = response.data.translations[0].translatedText;
//             element.innerText = translatedText;
//           },
//           error: function(error) {
//             console.error('Error:', error);
//           }
//         });
//       });
//     }

//     translatePage(); // Translate initial content on page load

  
  
  


// //---------------------------------------------------------------------------------
// // Validación formulario contacto

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;
    
//     if (!name || !email || !message) {
//         alert('Por favor, completa todos los campos.');
//         event.preventDefault(); // Evita que se envíe el formulario
//     } else if (!isValidEmail(email)) {
//         alert('Por favor, introduce una dirección de correo electrónico válida.');
//         event.preventDefault(); // Evita que se envíe el formulario
//     } else {
//         alert('El formulario fue enviado correctamente.');
//     }
// });

// function isValidEmail(email) {
//     console.log('Validando correo electrónico:', email); // Agregar este console.log
//     // Patrón de expresión regular para validar direcciones de correo electrónico
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
// }

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name == "" || email == "" || message == "") {
      alert("Por favor, completa todos los campos.");
      return false;
    }
    
    if (email.indexOf("@") == -1) {
      alert("Por favor, introduce una dirección de correo electrónico válida.");
      return false;
    }
    
    // Puedes agregar más validaciones según sea necesario
    alert("Formulario enviado correctamente.");
    return true; // Envía el formulario si pasa todas las validaciones
}


// //---------------------------------------------------------------------------------
// // LANGUAGE SWITCHER
document.addEventListener("DOMContentLoaded", function() {
    var languageCheckbox = document.getElementById("languageCheckbox");
    var languageCheckbox2 = document.getElementById("languageCheckbox2");

    // var languageSwitcher = document.querySelector(".language-switcher");

    languageCheckbox.addEventListener("change", function() {
        if (this.checked) {
            // Si el checkbox está marcado (inglés seleccionado), redireccionar a la página en inglés
            window.location.href = "ingles.html";
        } else {
            // Si el checkbox no está marcado (español seleccionado), redireccionar a la página en español
            window.location.href = "index.html";
        }
    });
    languageCheckbox2.addEventListener("change", function() {
        if (this.checked) {
            // Si el checkbox está marcado (inglés seleccionado), redireccionar a la página en inglés
            window.location.href = "ingles.html";
        } else {
            // Si el checkbox no está marcado (español seleccionado), redireccionar a la página en español
            window.location.href = "index.html";
        }
    });

    // Verificar la URL actual y aplicar la clase correspondiente al interruptor
    // if (window.location.href.indexOf("ingles.html") > -1) {
    //     languageSwitcher.classList.add("switched");
    // }
});

// //---------------------------------------------------------------------------------
// // CONTRAER NAVBAR COLLAPSE

$(document).ready(function () {
    $(".navbar-nav .nav-link").on("click", function () {
      $(".navbar-collapse").collapse("hide");
    });
});