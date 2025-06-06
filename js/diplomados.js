const modulosVerificacion = document.querySelector("#modulos")
const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#cerrar")
const linkIniciar = document.querySelector("#iniciar")
const linkCerrar2 = document.querySelector("#cerrar2")
const linkIniciar2 = document.querySelector("#iniciar2")
const linkModulo = document.querySelector("#modu-link")
const linkModulo2 = document.querySelector("#modu-link2")
const linkRegistro = document.querySelector("#registrar")
const linkRegistro2 = document.querySelector("#registrar2")
const bienvenidaUser = document.querySelector("#registrar2")
const bienvenidaUser2 = document.querySelector("#registrar2")
const progresoUser = document.querySelector("#registrar2")
const registroUser = document.querySelector("#registrar2")


function verificarUsuario(){
  for (let i = 0; i < users.length; i++) {
  if(users[i].logged){
    console.log("Puedes cerrar sesión")
    linkCerrar.style.display = "block"
    linkIniciar.style.display = "none"
    linkCerrar2.style.display = "block"
    linkIniciar2.style.display = "none"
    linkModulo.style.display = "block"
    linkModulo2.style.display = "block"
    linkRegistro.style.display = "none"
    linkRegistro2.style.display = "none"
    bienvenidaUser2.style.display = "none"
    bienvenidaUser.style.display = "block"
    progresoUser.style.display = "block"
    registroUser.style.display = "none"
    return
  }
  
}
console.log("Debes iniciar sesión")
linkCerrar.style.display = "none"
linkIniciar.style.display = "block"
linkCerrar2.style.display = "none"
linkIniciar2.style.display = "block"
linkModulo.style.display = "none"
linkModulo2.style.display = "none"
linkRegistro.style.display = "block"
linkRegistro2.style.display = "block"
bienvenidaUser2.style.display = "block"
bienvenidaUser.style.display = "none"
progresoUser.style.display = "none"
registroUser.style.display = "block"
}

function desplegar() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('desplegar')
    if(localStorage.getItem('activo') == 'false') {
      let texto = document.querySelector('.texto')
      texto.innerHTML = `<a href="./userpage.html" class="texto">Iniciar Sesión</a>`
    }
  }
  
verificarUsuario()