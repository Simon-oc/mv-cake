localStorage.setItem('activo',false)

window.location = "../index.html"
for (let i = 0; i < personas.length; i++) {
    console.log(`${i + 1}. ${personas[i].nombre} - ${personas[i].pais} ${personas[i].icono}`);
  }