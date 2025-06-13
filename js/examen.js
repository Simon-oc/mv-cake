
    (() => {
      const quizData = [
        {
          question: "Modulo 1: ¿Cuál de estos ingredientes es esencial para hacer un bizcocho esponjoso?",
          options: [
            { text: "Harina", correct: true },
            { text: "Sal", correct: false },
            { text: "Azúcar morena", correct: false },
            { text: "Mantequilla", correct: false },
          ],
        },
        {
          question: "Modulo 1: ¿Qué tipo de azúcar se usa tradicionalmente para hacer merengue?",
          options: [
            { text: "Azúcar granulada", correct: false },
            { text: "Azúcar glas o impalpable", correct: true },
            { text: "Azúcar morena", correct: false },
            { text: "Azúcar invertido", correct: false },
          ],
        },
        {
          question: "Modulo 1: ¿Cuál es el método correcto para saber si un bizcocho está listo?",
          options: [
            { text: "Presionar la superficie y que vuelva inmediatamente", correct: true },
            { text: "Abrir el horno y ver si está dorado", correct: false },
            { text: "Preguntar al horno", correct: false },
            { text: "Golpear la base y escuchar un sonido seco", correct: false },
          ],
        },
        {
          question: "Modulo 1: ¿Qué tipo de harina es la más adecuada para pastelería?",
          options: [
            { text: "Harina de fuerza", correct: false },
            { text: "Harina integral", correct: false },
            { text: "Harina de repostería (baja en gluten)", correct: true },
            { text: "Harina para pizza", correct: false },
          ],
        },
        {
          question: "Modulo 1: ¿Cuál es la función de la levadura química en los productos de pastelería?",
          options: [
            { text: "Hacer que la masa suba y quede esponjosa", correct: true },
            { text: "Añadir sabor dulce", correct: false },
            { text: "Dar color dorado", correct: false },
            { text: "Evitar que la masa se pegue", correct: false },
          ],
        },
      ];

      const quizContent = document.getElementById('quiz-content');
      const nextBtn = document.getElementById('next-btn');
      let currentQuestionIndex = 0;
      let score = 0;
      let answered = false;

      function createOptionBtn(option, index) {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.type = 'button';
        btn.setAttribute('data-index', index);
        btn.setAttribute('aria-pressed', 'false');
        btn.innerHTML = `<span>${option.text}</span><span class="option-feedback" aria-hidden="true"></span>`;
        btn.addEventListener('click', () => selectOption(btn, option.correct));
        return btn;
      }

      function selectOption(btn, isCorrect) {
        if (answered) return;

        answered = true;
        const allBtns = quizContent.querySelectorAll('button.option-btn');
        allBtns.forEach(button => {
          button.disabled = true;
          button.setAttribute('aria-pressed', 'false');
        });

        if (isCorrect) {
          btn.classList.add('correct');
          btn.setAttribute('aria-pressed', 'true');
          score++;
          showIcon(btn, true);
        } else {
          btn.classList.add('incorrect');
          btn.setAttribute('aria-pressed', 'true');
          showIcon(btn, false);
          allBtns.forEach(button => {
            const idx = button.getAttribute('data-index');
            if (quizData[currentQuestionIndex].options[idx].correct) {
              button.classList.add('correct');
              showIcon(button, true);
            }
          });
        }
        nextBtn.disabled = false;
        nextBtn.setAttribute('aria-disabled', 'false');
      }

      function showIcon(btn, correct) {
        const iconSpan = btn.querySelector('.option-feedback');
        iconSpan.textContent = correct ? 'check_circle' : 'cancel';
        iconSpan.className = 'option-feedback icon-material';
        iconSpan.style.color = correct ? '#388e3c' : '#c62828';
        iconSpan.setAttribute('aria-label', correct ? 'Respuesta correcta' : 'Respuesta incorrecta');
      }

      function showQuestion() {
        answered = false;
        nextBtn.disabled = true;
        nextBtn.setAttribute('aria-disabled', 'true');
        const q = quizData[currentQuestionIndex];
        quizContent.innerHTML = `
          <p class="question-number" aria-live="polite">Pregunta ${currentQuestionIndex + 1} de ${quizData.length}</p>
          <p class="question-text">${q.question}</p>
          <div class="options" role="list">${q.options.map((opt, i) => '') /* placeholder */}</div>
        `;
        const optionsContainer = quizContent.querySelector('.options');
        q.options.forEach((option, i) => {
          optionsContainer.appendChild(createOptionBtn(option, i));
        });
      }

      function showScore() {
        quizContent.innerHTML = `
          <div class="score-screen">
            <h2>¡Tu puntaje es ${score} de ${quizData.length}!</h2>
            <p>${score === quizData.length ? '¡Excelente trabajo!' : 'Puedes intentarlo de nuevo para mejorar.'}</p>
            <button id="restart-btn" class="next-btn" aria-label="Reiniciar quiz">Reiniciar Quiz</button>
          </div>
        `;
        document.getElementById('restart-btn').addEventListener('click', () => {
          currentQuestionIndex = 0;
          score = 0;
          showQuestion();
          nextBtn.style.display = 'inline-block';
          nextBtn.disabled = true;
          nextBtn.setAttribute('aria-disabled', 'true');
        });
        nextBtn.style.display = 'none';
      }

      // Next button click handler
      nextBtn.addEventListener('click', () => {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
          showQuestion();
        } else {
          showScore();
        }
      });

      // Initial
      showQuestion();

    })();