function nextQuestion(questionNumber ){
    let questions = document.getElementsByClassName('question');
    for(let i=0;i <questions.length;i++){
        questions[i].style.display="none";
    }
    let currentQuestion = document.getElementById('question-'+questionNumber);
    currentQuestion.style.display = "block";
}
function submitQuiz(){
    alert('Quiz Submitted!');
}

let timer;
let timeLeft = 1200; // 10 seconds for each question

function startTimer() {
    // Clear any existing timer
    clearInterval(timer);
    timeLeft = 1200;

    // Update timer display every second
    timer = setInterval(function() {
        document.getElementById("timer").innerText = `Time left: ${timeLeft} seconds`;
        timeLeft--;

        // If time runs out, move to the next question automatically
        if (timeLeft < 0) {
            clearInterval(timer);
            alert("Time's up!");
            nextQuestion(3); // Move to the next question or handle accordingly
        }
    }, 1000);
}

// Example function to show a question and start timer
function showQuestion(id) {
    // Hide all questions
    document.querySelectorAll(".question").forEach(q => q.style.display = "none");
    // Show current question
    document.getElementById(`question-${id}`).style.display = "block";
    startTimer(); // Start the timer each time a question is shown
}

// Call showQuestion when navigating between questions
function nextQuestion(id) {
    showQuestion(id); // Display the next question
}

