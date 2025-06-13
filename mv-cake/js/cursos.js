const modulosVerificacion = document.querySelector("#modulos")
const users = JSON.parse(localStorage.getItem("user")) || [];
const linkCerrar = document.querySelector("#cerrar")
const linkIniciar = document.querySelector("#iniciar")
const linkCerrar2 = document.querySelector("#cerrar2")
const linkIniciar2 = document.querySelector("#iniciar2")
const linkModulo = document.querySelector("#modu-link")
const linkModulo2 = document.querySelector("#modu-link2")


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

/* let main = document.querySelector('.modules')

cursos.forEach(items => {
    let crear = document.createElement('div')
    crear.classList.add('module')
    crear.innerHTML = `
    <img src="${items.img}" alt="Modulo 1">
                        <div>
                            <h2 class="titulo">${items.modulo}</h2>
                        <h2> ${items.nombre}</h2>
                        <p>Temas:</p>
                        <ul>
                            <li>${items.tema1}</li>
                            <li>${items.tema2}</li>
                            <li>${items.tema3}</li>
                        </ul>
                        </div>
                        
                    </div>
    `

    main.appendChild(crear)
}); */
verificarUsuario()