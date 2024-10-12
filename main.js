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
function calculateScore(){
    let correctAnswer = {
        q1:"0",
        q2:"4",
        q3:"Charles Babbage",
        q4:"I*V",
        q5:"I=V/R",
        q6:"",
        q7:"",
        q8:"",
        q9:"",
        q10:""
    }
;
let score = 0;
let totalQuestion = 17;
 const userAnswers = new FormData(document.getElementsByClassName('quiz-container'));
 for(let [question,answer] of userAnswers.entries()){
    if(answer === correctAnswers[question]){
        score++;
    }
 }
 document.getElementById('result').textContent = 'Your score is  ${score}/${totalQuestions} ';
}