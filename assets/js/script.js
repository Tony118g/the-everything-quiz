/*
Ideas on how to implement certain parts of code
for the quiz were taken from the following youtube tutorial:
https://www.youtube.com/watch?v=riDzcEQbX6k 
*/

// global variables

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const rulesModal = document.getElementById("rules");
const quizArea = document.getElementById("quiz-area");
const answersArea = document.getElementById('answer-area');
const timeDisplay = document.getElementById("timer");
const nextButton = document.getElementById("next-button");

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex;
let timeLeft;
let timerInterval;

// waits for DOM to load before executing first function
// gets the menu buttons and adds event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    const menuButtons = document.getElementsByClassName("menu-btn");
    for (let menuButton of menuButtons) {
        menuButton.addEventListener("click", function() {
            if (this.getAttribute("id") === "rules-button") {
                displayRules();
            } else if  (this.getAttribute("id") === "quiz-button") {
                quizDifficultyPrompt();
            }
        })
    }
});

/*
 Listens for a click on the next button
and calls function for the next question.
*/

nextButton.addEventListener("click", nextQuestion);

/**
 * Hides the main menu while displaying the rules modal
 * and adds an event listener to the close button.
 */

function displayRules() {
    rulesModal.classList.remove("hide");
    heading.classList.add("hide");
    menu.classList.add("hide");
    const closeRulesButton = document.getElementById("close-rules");
    closeRulesButton.addEventListener("click", closeRules);
}

/**
 * Hides the rules modal and displays the main menu.
 */

function closeRules() {
    rulesModal.classList.add("hide");
    heading.classList.remove("hide");
    menu.classList.remove("hide");
}

/**
 * Displays the difficulty selection while hiding the main menu 
 * as well as gets the difficulty selection buttons 
 * and adds event listeners to them.
 */

function quizDifficultyPrompt() {
    const difficultyPrompt = document.getElementById("quiz-difficulty-prompt");
    difficultyPrompt.classList.remove("hide");
    heading.classList.add("hide");
    menu.classList.add("hide");
    const difficultyOptions = document.getElementsByClassName("difficulty-option");
    for (let difficultyOption of difficultyOptions) {
        difficultyOption.addEventListener("click", function() {
            difficultyPrompt.classList.add("hide");
            if (this.getAttribute("id") === "easy" ) {
                startEasyQuiz();
            } else if (this.getAttribute("id") === "medium") {
                startMediumQuiz();
            } else if (this.getAttribute("id") === "hard") {
                startHardQuiz();
            } 
        })
    }
}

/**
 * Displays the quiz area and gets 10 random questions 
 * from the easyQuestions object for the easy quiz whilst
 * setting the currentQuestionIndex to 0 for the start of the quiz.
 */

function startEasyQuiz() {
    quizArea.classList.remove("hide");
    shuffledQuestions = easyQuestions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    nextQuestion();
}

/**
 * Displays the quiz area and gets 10 random questions 
 * from the mediumQuestions object for the medium quiz whilst
 * setting the currentQuestionIndex to 0 for the start of the quiz.
 */

function startMediumQuiz() {
    quizArea.classList.remove("hide");
    shuffledQuestions = mediumQuestions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    nextQuestion();
}

/**
 * Displays the quiz area and gets 10 random questions 
 * from the hardQuestions object for the hard quiz whilst
 * setting the currentQuestionIndex to 0 for the start of the quiz.
 */

 function startHardQuiz() {
    quizArea.classList.remove("hide");
    shuffledQuestions = hardQuestions.sort(() => .5 - Math.random()).slice(0, 10);
    currentQuestionIndex = 0;
    nextQuestion();
}

/**
 * Checks whether the current question index is below 10
 * and if it is, increments the currentQuestionIndex and calls 
 * functions to reset and display the quiz content.
 * Otherwise it calls the function
 * to display the final result.
 */

function nextQuestion() {
    if (currentQuestionIndex < 10) {
        resetQuizContent();
        displayQuizContent(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
        timer();
      } else {
        finalResult();
      }
}

/**
 * Gets the quiz content containers and
 * inputs the question and answers content
 * into the appropriate ones.
 */

function displayQuizContent(question) {
    const questionContainer= document.getElementById("question");

    // Adds the question content
    questionContainer.innerText = question.question;

    // creates a button for each answer option associated with the question.
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = true;
            button.id = "correct";
        } else {
            button.classList.add("incorrect");
        }
        button.addEventListener("click", checkAnswer);
        answersArea.appendChild(button);
    });
    
    displayQuestionNumber();
}

/**
 * Gets the question number element and changes its
 * contents according to the current question index
 * to display the current question number.
 */

function displayQuestionNumber() {
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = currentQuestionIndex + 1;
}

/**
 * Sets the interval time for the timer function.
 */

function startTimer() {
    timerInterval = setInterval(timer, 1000);
}

/**
 * Checks whether the timeLeft is above 0
 * and decrements it if so. Otherwise it calls the timeUp function
 */

function timer() {
    if (timeLeft <= 0){
        console.log("time up!");
        timeUp();
      } else {
        console.log("timer working");
        timeLeft--;
      }
      timeDisplay.innerHTML = 'Time: ' + timeLeft;    
}

function timeUp() {

}

/**
 * Checks the answer chosen against the correct answer
 * and responds accordingly.
 */

function checkAnswer(event) {
    answersArea.classList.add("no-pointer"); // Prevents clicks after answer is chosen.
    let correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    const correct = clickedButton.dataset.correct;
    correctAnswer.classList.add("correct-answer");
        if (correct) {
            incrementScore();
        } else {
            this.classList.add("wrong-answer");
        }     
    nextButton.classList.remove("hide"); // Displays the next button.
}

/**
 * Gets the current score and increments by 1.
 */

// The idea on how to implement code to increment the score was taken
// from the love maths project (https://github.com/Tony118g/love-maths).
function incrementScore() {
    let score = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++score;
}

/**
 * Restores original structure and presentation
 * of the quiz area in preparation for new content.
 */

function resetQuizContent() {
    nextButton.classList.add("hide"); // Hides the next button.
    answersArea.classList.remove("no-pointer"); // Allows clicks again in answer area.
    timeLeft = 16; // resets the time amount
    startTimer(); // resets the interval for the timer
    // Removes previous answer options
    while (answersArea.firstChild) {
        answersArea.removeChild(answersArea.firstChild);
      }
}

function finalResult() {

}