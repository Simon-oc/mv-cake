const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")


function registroDatos (e){
    e.preventDefault()
    console.log(inputUserName.value)
    console.log
    localStorage.setItem('user',inputUserName.value)
    localStorage.setItem('password',inputUserPass.value)

    const cajitaMensaje = document.createElement('p');
    cajitaMensaje.innerHTML = `Usuario registrado, ya puedes <a href="../vistas/iniciosesion.html">Iniciar Sesión</a>`

    formRegistro.appendChild(cajitaMensaje)

    formRegistro.reset()
}
formRegistro.addEventListener('submit',registroDatos)
