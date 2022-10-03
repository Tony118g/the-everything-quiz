// global variables

const heading = document.getElementById("heading");
const menu = document.getElementById("menu");
const rulesModal = document.getElementById("rules");

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
            if (this.getAttribute("id") === "easy" ) {
                console.log("easy quiz");
            } else if (this.getAttribute("id") === "medium") {
                console.log("medium quiz");
            } else if (this.getAttribute("id") === "hard") {
                console.log("hard quiz");
            } 
        })
    }
}
