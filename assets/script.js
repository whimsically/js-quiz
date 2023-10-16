//variables holding HTML elements
var startGameBtn = document.getElementById("start-game");
var highScoreBtn = document.getElementById("high-scores");
var quizContainer = document.getElementById("quiz-container");
var timer = document.getElementById("timer");

//Array containing the quiz's questions, which are objects
var quizQuestions = [
    {
        "question": "Test question 1?",
        "wrong1": "Wrong answer 1",
        "correct": "Correct answer",
        "wrong2": "Wrong answer 2",
        "wrong3": "wrong answer 3"
    },
    {
        "question": "Test question 2?",
        "wrong1": "Wrong answer 1",
        "correct": "Correct answer",
        "wrong2": "Wrong answer 2",
        "wrong3": "wrong answer 3"
    },
    {
        "question": "Test question 3?",
        "wrong1": "Wrong answer 1",
        "correct": "Correct answer",
        "wrong2": "Wrong answer 2",
        "wrong3": "wrong answer 3"
    },
    {
        "question": "Test question 4?",
        "wrong1": "Wrong answer 1",
        "correct": "Correct answer",
        "wrong2": "Wrong answer 2",
        "wrong3": "wrong answer 3"
    },
    {
        "question": "Test question 5?",
        "wrong1": "Wrong answer 1",
        "correct": "Correct answer",
        "wrong2": "Wrong answer 2",
        "wrong3": "wrong answer 3"
    }
]

//Function that randomizes our question order using the Fisher Yates method. (thanks w3schools)
function randomizeQuestions() {
    for (let i = quizQuestions.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = quizQuestions[i];
        quizQuestions[i] = quizQuestions[j];
        quizQuestions[j] = k;
      }
}

function timeOut() {

}

function startGame() {
    //call randomize questions functions
    randomizeQuestions();

    //set up timer
    var timeLeft = 75;
    var gameTimer = setInterval(setTimer, 1000);

    function setTimer() {
        timeLeft--;
        timer.innerHTML = "Time Left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval();
            timeOut();
        }
    }
}

startGameBtn.addEventListener("click", startGame);
//highScoreBtn.addEventListener("click", showHighScores);