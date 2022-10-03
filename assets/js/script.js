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

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex;

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

function nextQuestion() {
    if (currentQuestionIndex < 10) {
        resetQuizContent();
        displayQuizContent(shuffledQuestions[currentQuestionIndex]);
        currentQuestionIndex++;
      } else {
        finalResult();
      }
}

function displayQuizContent(question) {
    
}

function displayQuestionNumber() {

}

function timer() {

}

function timeUp() {

}

function checkAnswer() {

}

function incrementScore() {

}

function resetQuizContent() {

}

function finalResult() {

}