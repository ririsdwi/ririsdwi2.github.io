const questions = [
    {
      question: "Apa ibu kota Indonesia?",
      options: ["Jakarta", "Bandung", "Surabaya", "Medan"],
      answer: "Jakarta"
    },
    {
      question: "Gunung tertinggi di Indonesia adalah?",
      options: ["Semeru", "Rinjani", "Kerinci", "Puncak Jaya"],
      answer: "Puncak Jaya"
    },
    {
      question: "Siapa presiden pertama Indonesia?",
      options: ["Jokowi", "Soekarno", "Soeharto", "Habibie"],
      answer: "Soekarno"
    },
    {
      question: "Negara mana yang terkenal dengan bunga sakura?",
      options: ["Jepang", "Korea", "Cina", "Thailand"],
      answer: "Jepang"
    },
    {
        question: "Apa ibu kota Jepang?",
        options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
        answer: "Tokyo"
    },
    {
        question: "Berapa hasil 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        question: "Berapa hasil 9 : 3 ?",
        options: ["6", "7", "5", "3"],
        answer: "3"
    },
    {
        question: "Indonesia merdeka pada tahun?",
        options: ["1945", "1999", "1456", "1955"],
        answer: "1945"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 15;
  let timer;
  
  const questionText = document.getElementById("question-text");
  const optionsContainer = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const questionNumber = document.getElementById("question-number");
  const timerDisplay = document.getElementById("timer");
  const resultBox = document.getElementById("result-box");
  const scoreText = document.getElementById("score-text");
  
  function startQuiz() {
    showQuestion();
    startTimer();
  }
  
  function showQuestion() {
    const q = questions[currentQuestion];
    questionNumber.textContent = `Pertanyaan ${currentQuestion + 1}`;
    questionText.textContent = q.question;
    optionsContainer.innerHTML = "";
    nextBtn.disabled = true;
    timeLeft = 15;
    timerDisplay.textContent = `Waktu: ${timeLeft}`;
    timer = setInterval(updateTimer, 1000);
  
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.onclick = () => selectAnswer(btn, q.answer);
      optionsContainer.appendChild(btn);
    });
  }
  
  function selectAnswer(button, correctAnswer) {
    clearInterval(timer);
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correctAnswer) {
        btn.classList.add("correct");
      }
      if (btn !== button && btn.textContent !== correctAnswer) {
        btn.classList.remove("wrong");
      }
    });
  
    if (button.textContent === correctAnswer) {
      score++;
    } else {
      button.classList.add("wrong");
    }
    nextBtn.disabled = false;
  }
  
  function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Waktu: ${timeLeft}`;
    if (timeLeft === 0) {
      clearInterval(timer);
      autoAnswer();
    }
  }
  
  function autoAnswer() {
    const q = questions[currentQuestion];
    const buttons = optionsContainer.querySelectorAll("button");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === q.answer) {
        btn.classList.add("correct");
      }
    });
    nextBtn.disabled = false;
  }
  
  nextBtn.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });
  
  function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreText.textContent = `Kamu menjawab benar ${score} dari ${questions.length} pertanyaan.`;
  }
  
  startQuiz();

  
  