$(document).ready(function(){
  $(function () {
    $('a[href^="#"]').on('click', function(event) {
      var target = $( $(this).attr('href') );
      if( target.length ) {
      event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top - 75
        }, 100);
      }
    }); 
  });
});

$(document).ready(function(){
  var flag = false;
  var scroll;

  $(window).scroll(function(){
    scroll = $(window).scrollTop();

    if(scroll > 0){
      if(!flag){
        $(".navbar").css({"background-color": "#000"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        $(".navbar-nav li a.active").css({"color": "#ABC566"});
        flag = true;
      }
    } 
    else{
      if(flag){
        $(".navbar").css({"background-color": "rgba(0, 0, 0, 0)"});
        $(".navbar-nav li a").css({"color": "#fff"});
        $(".navbar-nav .dropdown-menu li a").css({"color": "#ABC566"});
        flag = false;
      }
    }       
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 0) {
    $('.navbar').addClass('scrolled');
  }
  if ($(window).scrollTop() < 1) {
    $('.navbar').removeClass('scrolled');
  }
});

/*Efecto botón hamburger*/
$(document).ready(function(){
  var hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("is-active");
  });
});

/*Efecto marcas medios de pagor*/
$(document).ready(function(){
  $('.customer-logos').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 2
      }
    }]
  });
});

/*DATOS TÉCNICOS - PORCENTAJES*/
/*Porcentaje 1*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 65) setTimeout(animate, 15); 
    })(); 
  })(); 
});

/*Porcentaje 2*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter2').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd2').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress2').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent2'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 30) setTimeout(animate, 15); 
    })(); 
  })(); 
});

/*Porcentaje 3*/
$(document).ready(function(){
  function setProgress(elem, percent) {
    var
    degrees = percent * 3.6,
    transform = /MSIE 9/.test(navigator.userAgent) ? 'msTransform' : 'transform';
    elem.querySelector('.counter3').setAttribute('data-percent', Math.round(percent));
    elem.querySelector('.progressEnd3').style[transform] = 'rotate(' + degrees + 'deg)';
    elem.querySelector('.progress3').style[transform] = 'rotate(' + degrees + 'deg)';
    if(percent >= 50 && !/(^|\s)fiftyPlus(\s|$)/.test(elem.className))
      elem.className += ' fiftyPlus';
  }

  (function() {
    var
    elem = document.querySelector('.circlePercent3'),
    percent = 0;
    (function animate() {
      setProgress(elem, (percent += .25));
      if(percent < 5) setTimeout(animate, 15); 
    })(); 
  })(); 
});


//EFECTO LUPA
$(document).ready(function () {
  $('.laftImg').bup('laftImg',1)
  $('.laftImg1').bup('laftImg1',1)
  $('.laftImg2').bup('laftImg2',1)
  $('.laftImg3').bup('laftImg3',1)
  $('.laftImg4').bup('laftImg4',1)
  $('.laftImg5').bup('laftImg5',1)
}) 

sup=`
<nav class="navbar navbar-default" data-target=".navbar-collapse" data-toggle="collapse">
    <div class="container">
      <a class="navbar-brand" href="index.html"><img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck"></a>
      <button class="hamburger hamburger--emphatic" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">            
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav">
          <li>
            <a class="nav-link" href="index.html"><i class="bi bi-house-door-fill icono-home"></i></a>
          </li>
          <li>
            <a class="nav-link" href="quienes-somos.html">¿Quienes somos?</a>
          </li>
          <li class="dropdown">
            <a class="nav-link dropdown-toggle" href="." id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Productos <i id="flecha" class="bi bi-caret-down-fill"></i>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="nav-link" href="comparativa.html">Comparativa</a></li>
              <li><a class="nav-link" href="deck-ecologico.html">Deck Ecológico WPC</a></li>
              <li><a class="nav-link" href="deck-madera.html">Deck de madera</a></li>
              <li><a class="nav-link" href="wall-panel.html">Wall Panel</a></li>
              <li><a class="nav-link" href="pergolas.html">Pérgolas</a></li>
              <li><a class="nav-link" href="pisos.html">Pisos SPC</a></li>
              <li><a class="nav-link" href="perfiles.html">Perfiles WPC</a></li>
              <li><a class="nav-link" href="cielorrasopvc.html">Revestimientos / Cielorraso PVC</a></li>
            </ul>
          </li> 
          <li>
            <a class="nav-link" href="obras.html">Obras</a>
          </li>
          <li class="nav-item-contacto">
            <a id="nav-contacto" class="nav-link" href="contacto.html">Contactanos</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;
document.write(sup);


sup=`
  <footer>  
    <div class="bg-dark">
      <div class="py-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-12">
              <div class="logo-footer">
                <a href="index.html"><img src="imagenes/logo/ecodeck-logo.png" alt="logo Ecodeck"></a>
                <p>Somos una empresa dedicada a la venta, distribución e instalación de Productos Ecológicos Libres de mantenimiento. Nos especializamos en Decks de WPC, Revestimientos, Cielorrasos de PVC, Pérgolas y Parasoles de WPC. Materiales Premium de última generación.</p>
                <a class="boton-transparente btn btn-default btn animate__animated animate__slideInUp" href="#" role="button" data-bs-toggle="modal" data-bs-target="#ModalForm">Suscribite<i class="bi bi-arrow-right-circle-fill"></i></a>                
              </div><!-- cierra logo-footer-->
            </div><!-- cierra col-->
            <div class="col-lg-3 col-md-12"> 
                <h4>PRODUCTOS</h4>
                <ul>       
                <li><a class="nav-link" href="deck-ecologico.html"><i class="bi bi-caret-right-fill"></i> Deck Ecologico WPC</a></li>
                <li><a class="nav-link" href="deck-madera.html"><i class="bi bi-caret-right-fill"></i> Deck de madera</a></li>
                <li><a class="nav-link" href="wall-panel.html"><i class="bi bi-caret-right-fill"></i> Wall Panel</a></li>
                <li><a class="nav-link" href="pergolas.html"><i class="bi bi-caret-right-fill"></i> Pérgolas</a></li>
                <li><a class="nav-link" href="pisos.html"><i class="bi bi-caret-right-fill"></i> Pisos SPC</a></li>
                <li><a class="nav-link" href="perfiles.html"><i class="bi bi-caret-right-fill"></i> Perfiles WPC</a></li>
                <li><a class="nav-link" href="cielorrasopvc.html"><i class="bi bi-caret-right-fill"></i> Revestimientos / Cielorraso PVC</a></li>                              
              </ul>
            </div><!-- cierra col-->
            <div class="col-lg-4 col-md-12">  
                <h4>CONTACTO</h4>
                <ul class="contacto-footer">
                  <li><a class="footer-direccion" href="https://goo.gl/maps/pG6BBr4cebvdmBFX9" target="_blank"><i class="bi bi-geo-alt"></i><span>Dirección Oficina administrativa y Showroom:</span> Amenabar 618, CABA </a></li>                
                  <li><a href=""><i class="bi bi-phone-vibrate"></i> <span>Celular:</span> (011) 15-6759-1079</a></li>
                  <li><a href=""><i class="bi bi-phone-vibrate"></i> <span>Celular:</span> (011) 15-6733-1111</a></li>
                  <li><a href=""><i class="bi bi-envelope"></i> <span>E-mail:</span> info@ecodeck.com.ar</a></li>        
                </ul>
                <div class="redes-sociales">
                  <ul>
                    <li><a href="https://www.facebook.com/ecodeckarg" target="_blank"><i class="bi bi-facebook" title="Encontranos en Facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/ecodeckarg" target="_blank"><i class="bi bi-instagram" title="Encontranos en Instagram"></i></a></li>
                  </ul>
                </div><!-- cierra redes-sociales-->
              </div><!-- cierra col-->
            </div><!-- cierra row-->
          </div> <!-- cierra container-->  
        </div> <!-- cierra py-3-->  
      </div><!-- cierra bg-dark -->       
    </footer>
`;
document.write(sup);


sup=`
  <div class="footer-bottom">
      <p class="copyright">Copyright &copy; <script>document.write(new Date().getFullYear())</script> Ecodeck. Todos los derechos reservados.</p>
    </div><!-- cierra footer-bottom -->
  `;
document.write(sup);


/*MODAL SUSCRIPCION*/
sup=`
<div class="modal fade" id="ModalForm" tabindex="-1" aria-labelledby="ModalFormLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-body">
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
        <div class="form-area">
          <h4 class="text-center" id="ModalFormLabel">Completá los campos para suscribirte</h4>
          <form>
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="exampleInputName1" required>
            </div><!-- cierra mb -->
            <div class="mb-3 mt-4">
              <label for="exampleInputEmail1" class="form-label">E-mail</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            </div><!-- cierra mb -->
            <button type="submit" class="btn animate__animated animate__slideInUp">ENVIAR <i class="bi bi-envelope-fill"></i></button>
          </form>
        </div><!-- cierra form-area-->  
      </div><!-- cierra modal-body-->  
    </div><!-- cierra modal-content-->  
  </div><!-- cierra modal-dialog-->  
</div><!-- cierra modal-->  
`;
document.write(sup);


document.querySelectorAll(".nav-link").forEach((link) => {
  if (link.href === window.location.href) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
  }  
});

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus();
});

var exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Botón que activó el modal
  var button = event.relatedTarget;
  // Extraer información de los atributos data-bs-*
  var recipient = button.getAttribute('data-bs-whatever');
  // Si es necesario, puedes iniciar una solicitud AJAX aquí
  // y luego realiza la actualización en una devolución de llamada.
  //
  // Actualizar el contenido del modal.
  var modalTitle = exampleModal.querySelector('.modal-title');
  var modalBodyInput = exampleModal.querySelector('.modal-body input');

  modalTitle.textContent = 'Nuevo mensaje para ' + recipient;
  modalBodyInput.value = recipient;
});

