const formRegistro = document.querySelector("#formRegistro")
const inputUserName = document.querySelector("#inputUserName")
const inputUserPass = document.querySelector("#inputUserPass")


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
