const users = JSON.parse(localStorage.getItem("user")) || [];

function verificarUsuario(){
  for (let i = 0; i < users.length; i++) {
  if(users[i].logged){
    console.log("Puedes cerrar sesión")
    return
  }
  
}
console.log("Debes iniciar sesión")}

function desplegar() {
  let menu = document.querySelector('.menu')
  menu.classList.toggle('desplegar')
  if(localStorage.getItem('activo') == 'false') {
    let texto = document.querySelector('.texto')
    texto.innerHTML = `<a href="./vistas/userpage.html" class="texto">Iniciar Sesión</a>`
  }
}

let slideIndex = 1;
/* showSlides(slideIndex);
 */
// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

/* function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
} */

verificarUsuario()