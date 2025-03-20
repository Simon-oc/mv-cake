
function desplegar() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('desplegar')
    if(localStorage.getItem('activo') == 'false') {
      let texto = document.querySelector('.texto')
      texto.innerHTML = `<a href="./userpage.html" class="texto">Iniciar Sesión</a>`
    }
  }

const formAcesso = document.querySelector("#formAcesso")
const inputUserNam = document.querySelector("#inputUserNam")
const inputUserPas = document.querySelector("#inputUserPas")


function validarUsuario (e){
    e.preventDefault()
    
    let usuarioLocal = localStorage.getItem('user')
    let passwordLocal = localStorage.getItem('password')

    if(usuarioLocal === inputUserNam.value && passwordLocal === inputUserPas.value){
        console.log('Bienvenido ')
        localStorage.setItem('activo',true)
        window.location = "././cursos.html"
        
    }else{
        console.log('Datos incorrectos ')
    }
    

    formAcesso.reset()
}
formAcesso.addEventListener('submit',validarUsuario)
