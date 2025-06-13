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

    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      resultDiv.textContent = '';
      const questions = form.querySelectorAll('.question');
      let total = questions.length;
      let correctCount = 0;
      let unanswered = false;
      questions.forEach(q => {
        const correctAnswer = q.getAttribute('data-correct');
        const selected = q.querySelector('input[type="radio"]:checked');
        // Remove previous styling
        q.querySelectorAll('label.option').forEach(label => {
          label.classList.remove('correct', 'wrong');
          label.querySelector('input').disabled = false;
        });
        
if (!selected) {
          unanswered = true;
          return;
        }
        if (selected.value === correctAnswer) {
          correctCount++;
          const correctLabel = selected.closest('label.option');
          correctLabel.classList.add('correct');
        } else {
          const selectedLabel = selected.closest('label.option');
          selectedLabel.classList.add('wrong');
          // Highlight correct answer
          const options = q.querySelectorAll('input[type="radio"]');
          options.forEach(opt => {
            if (opt.value === correctAnswer) {
              opt.closest('label.option').classList.add('correct');
            }
          });
        }
        // Disable all options after submission
        q.querySelectorAll('input[type="radio"]').forEach(input => input.disabled = true);
      });
      if (unanswered) {
        resultDiv.style.color = 'var(--error-color)';
        resultDiv.textContent = 'Por favor, responde todas las preguntas antes de enviar.';
        return;
      }
      resultDiv.style.color = correctCount === total ? 'var(--correct-color)' : 'var(--primary-color)';
      resultDiv.textContent = `Has respondido correctamente ${correctCount} de ${total} preguntas.`;
    });

function desplegar() {
    let menu = document.querySelector('.menu')
    menu.classList.toggle('desplegar')
    if(localStorage.getItem('activo') == 'false') {
      let texto = document.querySelector('.texto')
      texto.innerHTML = `<a href="./userpage.html" class="texto">Iniciar Sesión</a>`
    }
  }
  
verificarUsuario()