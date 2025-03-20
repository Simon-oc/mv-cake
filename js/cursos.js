function desplegar() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('desplegar')
    if(localStorage.getItem('activo') == 'false') {
      let texto = document.querySelector('.texto')
      texto.innerHTML = `<a href="./userpage.html" class="texto">Iniciar Sesión</a>`
    }
  }

let main = document.querySelector('.modules')

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
});