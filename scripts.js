<script>
function toggleDivs() {
  const mainMenu = document.getElementById("main-menu");
  const quiz = document.getElementById("quiz");

  // Main-Menu ausblenden
  mainMenu.style.visibility = "hidden";

  // Quiz einblenden
  quiz.style.visibility = "visible";
}
</script>

<script>
// Array mit Fragen und Antworten
const questions = [
  {
    question: "Welche Hauptstadt hat Frankreich?",
    answers: ["Berlin", "Paris", "Rom", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    question: "Wie viele Beine hat ein Oktopus?",
    answers: ["4", "6", "8", "10"],
    correctAnswer: "8",
  },
  {
    question: "Welche Hauptstadt hat Deutschland?",
    answers: ["Berlin", "Paris", "Rom", "Madrid"],
    correctAnswer: "Berlin",
  },
  {
    question: "Welche Hauptstadt hat Groß-Britannien?",
    answers: ["London", "Paris", "Rom", "Madrid"],
    correctAnswer: "London",
  },
  {
    question: "Welche Hauptstadt hat Deutschland?",
    answers: ["Berlin", "Paris", "Rom", "Madrid"],
    correctAnswer: "Berlin",
  },
  // ... weitere Fragen
];

// Variablen für aktuelle Frage, Antwort und Fragezähler
let currentQuestionIndex = 0;
let selectedAnswer = null;
let questionCount = 0;

const maxQuestions = 5; // Maximale Anzahl der Fragen

// Zufällige Frage auswählen
function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

// Frage und Antworten im HTML anzeigen
function showQuestion(question) {
  document.getElementById("question").textContent = question.question;
  const answerList = document.getElementById("answers");
  answerList.innerHTML = "";
  for (const answer of question.answers) {
    const answerElement = document.createElement("li");
    answerElement.textContent = answer;
    answerElement.addEventListener("click", function () {
      selectedAnswer = this.textContent; // Zugriff auf Text der angeklickten Antwort
      evaluateAnswer(selectedAnswer, question.correctAnswer);
    });
    answerList.appendChild(answerElement);
  }
}

// Funktion zum Auswerten der Antwort
function evaluateAnswer(selectedAnswer, correctAnswer) {
  const feedbackElement = document.getElementById("feedback");

  if (selectedAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = "Richtig";
  } else {
    document.getElementById("feedback").textContent = "Falsch. Die richtige Antwort ist " + correctAnswer;
  }
}

// Event-Listener für "Nächste Frage"-Button
document.getElementById("next-question").addEventListener("click", () => {
  // ... Code für die Auswertung der aktuellen Frage ...

  questionCount++;
  if (questionCount < maxQuestions) {
    currentQuestionIndex++;
    showQuestion(getRandomQuestion());
    document.getElementById("feedback").textContent = ""; // Feedback nach Beantwortung der Frage zurücksetzen
  } else {
    // Quiz beenden
    // ... Code für die Anzeige des Ergebnisses einfügen ...
    location.reload();
  }
});

// Start mit erster Frage
showQuestion(getRandomQuestion());

</script>
