/*
Ideas on how to implement certain parts of code
for the quiz were taken from the following youtube tutorial:
https://www.youtube.com/watch?v=riDzcEQbX6k 
*/

// global variables

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const rulesModal = document.getElementById("rules");
const difficultyPrompt = document.getElementById("quiz-difficulty-prompt");
const quizArea = document.getElementById("quiz-area");
const answersArea = document.getElementById('answer-area');
const timeDisplay = document.getElementById("timer");
const nextButton = document.getElementById("next-button");

// variables to be defined

let shuffledQuestions;
let currentQuestionIndex;
let correctAnswer;
let score;
let timeLeft;
let timerInterval;

// waits for DOM to load before executing the first function
// gets the menu buttons and adds event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    const menuButtons = this.querySelectorAll(".menu-btn");
    menuButtons.forEach((menuButton) => {
        menuButton.addEventListener("click", function() {
            if (this.getAttribute("id") === "rules-button") {
                displayRules();
            } else if  (this.getAttribute("id") === "quiz-button") {
                quizDifficultyPrompt();
            }
        });
    });
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
 * Displays the difficulty menu while hiding the main menu 
 * as well as gets the difficulty selection buttons 
 * and adds event listeners to them.
 */

function quizDifficultyPrompt() {
    /*
    Gets the button to close the difficulty menu
    and adds an event listener to it.
    */
    const closeDifficultyButton = document.getElementById("close-difficulty");
    closeDifficultyButton.addEventListener("click", closeDifficultyMenu);
    
    // Displays the difficulty menu
    difficultyPrompt.classList.remove("hide");
    heading.classList.add("hide");
    menu.classList.add("hide");

    // Gets buttons for difficulty options and adds event listeners to them
    const difficultyOptions = document.querySelectorAll(".difficulty-option");
    difficultyOptions.forEach((difficultyOption) => {
        difficultyOption.addEventListener("click", function() {
            difficultyPrompt.classList.add("hide");
            if (this.getAttribute("id") === "easy" ) {
                startEasyQuiz();
            } else if (this.getAttribute("id") === "medium") {
                startMediumQuiz();
            } else if (this.getAttribute("id") === "hard") {
                startHardQuiz();
            } 

            // Gets the button to quit the quiz and adds an event listener to it
            const quitButton = document.getElementById("close-quiz");
            quitButton.addEventListener("click", closeQuiz);
        });
    });
}

/**
 * Hides the difficulty menu and displays the main menu.
 */

 function closeDifficultyMenu() {
    difficultyPrompt.classList.add("hide");
    heading.classList.remove("hide");
    menu.classList.remove("hide");
}

/**
 * Hides the quiz area, resets the quiz 
 * and displays the main menu.
 */

 function closeQuiz() {
    currentQuestionIndex = 0;
    clearInterval(timerInterval);
    resetScore();
    quizArea.classList.add("hide");
    heading.classList.remove("hide");
    menu.classList.remove("hide");
}

/**
 * Displays the quiz area and gets 10 random questions 
 * from the easyQuestions object for the easy quiz whilst
 * setting the currentQuestionIndex to 0 for the start of the quiz.
 */

function startEasyQuiz() {
    quizArea.classList.remove("hide");
    shuffledQuestions = easyQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
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
    shuffledQuestions = mediumQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
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
    shuffledQuestions = hardQuestions.sort(() => 0.5 - Math.random()).slice(0, 10);
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
    clearInterval(timerInterval); // stops the timer from continuing
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
    // Gets the question container
    const questionContainer= document.getElementById("question");

    // Adds the question content
    questionContainer.innerText = question.question;

    // creates a button for each answer option associated with the question.
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.id = "correct";
        } else {
            button.classList.add("incorrect");
        }

        // Adds an event listener to button and appends it to the answer area
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

/*
Ideas on how to implement code for the timer
were taken from https://stackoverflow.com/questions/44314897/javascript-timer-for-a-quiz
*/

/**
 * Sets the interval time for the timer function.
 */

function startTimer() {
    timerInterval = setInterval(timer, 1000);
}

/**
 * Checks whether the timeLeft is above 0
 * and decrements it if so. Otherwise, it calls the timeUp function
 */

function timer() {
    if (timeLeft <= 0){
        timeUp();
      } else {
        timeLeft--;
      }
      timeDisplay.innerHTML = 'Time: ' + timeLeft;    
}

/**
 * creates an alert that time is up and
 * provides feedback on correct and incorrect answers
 */

function timeUp() {
    alert("Oh no! You ran out of time!");
    clearInterval(timerInterval); // Stops the timer from continuing.
    answersArea.classList.add("no-pointer"); // Prevents clicks when time runs out.

    // Gets incorrect answers and adds class for incorrect answers to them.
    const wrongAnswers = document.querySelectorAll('.incorrect');
    for (let wrongAnswer of wrongAnswers) {
    wrongAnswer.classList.add('wrong-answer');
    }

    // Gets correct answer and adds class for correct answer to it.
    correctAnswer = document.getElementById("correct");
    correctAnswer.classList.add("correct-answer");
    nextButton.classList.remove("hide");
}

/**
 * Checks the answer chosen against the correct answer
 * and responds accordingly.
 */

function checkAnswer(event) {
    clearInterval(timerInterval); // stops the timer from continuing
    answersArea.classList.add("no-pointer"); // Prevents clicks after answer is chosen.
    correctAnswer = document.getElementById("correct");
    const clickedButton = event.target;
    correctAnswer.classList.add("correct-answer");
        if (clickedButton === correctAnswer) {
            incrementScore();
        } else {
            this.classList.add("wrong-answer");
        }     
    nextButton.classList.remove("hide"); // Displays the next button.
}

/*
 Listens for a click on the next button
and calls function for the next question.
*/

nextButton.addEventListener("click", nextQuestion);

/**
 * Gets the current score and increments by 1.
 */

// The idea of how to implement code to increment the score was taken
// from the love maths project (https://github.com/Tony118g/love-maths).
function incrementScore() {
    score = parseInt(document.getElementById("score").innerText);
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

/**
 * Displays the div with an id of "quiz-complete" 
 * as well as the main heading
 * and hides the quiz area.
 */

function finalResult() {
    const quizComplete = document.getElementById("quiz-complete");
    const finalScore = document.getElementById("final-score");
    quizArea.classList.add("hide"); 
    heading.classList.remove("hide"); 
    quizComplete.classList.remove("hide");
    finalScore.innerText = score; // inputs the final score

    /*
    Gets the buttons with a class of "quiz-complete-btn" and
    adds event listeners to them.
    */
    const endOfQuizButtons = document.querySelectorAll(".quiz-complete-btn");
    endOfQuizButtons.forEach((endOfQuizButton) => {
        endOfQuizButton.addEventListener("click", function() {
            resetScore();
            quizComplete.classList.add("hide");
            if (this.getAttribute("id") === "retry-button") {
                quizDifficultyPrompt();
            } else if  (this.getAttribute("id") === "main-menu-button") {
               menu.classList.remove("hide");
            }
        });
    });
}

/**
 * Resets the score to 0 for a new quiz.
 */

function resetScore() {
    score = document.getElementById("score");
    score.innerText = 0;
}