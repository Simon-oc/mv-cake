const modulosVerificacion = document.querySelector("#modulos")
const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#cerrar")
const linkIniciar = document.querySelector("#iniciar")
const linkCerrar2 = document.querySelector("#cerrar2")
const linkIniciar2 = document.querySelector("#iniciar2")
const linkModulo = document.querySelector("#modu-link")
const linkModulo2 = document.querySelector("#modu-link2")



const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")

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
}

function desplegar() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('desplegar')
    if(localStorage.getItem('activo') == 'false') {
      let texto = document.querySelector('.texto')
      texto.innerHTML = `<a href="./userpage.html" class="texto">Iniciar Sesión</a>`
    }
  }
  
function registroDatos (e){
    e.preventDefault()

    let user = {
        user: inputUserName.value,
        pass: inputUserPass.value,
        logged: false,
        progreso: 0,
        certificado: false,
    }

    const users = JSON.parse(localStorage.getItem("user")) || [];
    
    for (let i = 0; i < users.length; i++) {
        if(users[i].user === user.user){
            alert("El usuario ya esta registrado😵")
            return
        }
    }
    users.push(user)

    localStorage.setItem("user", JSON.stringify(users))
 //   localStorage.setItem("password",inputUserPass.value)
    const cajitaMensaje = document.createElement('p');
    cajitaMensaje.innerHTML = `Usuario registrado😋, ya puedes <a href="../vistas/iniciosesion.html">Iniciar Sesión</a>`

    formRegistro.appendChild(cajitaMensaje)

    formRegistro.reset()
}
formRegistro.addEventListener('submit',registroDatos)
verificarUsuario()