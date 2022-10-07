# Testing

## Code Validation
All code for the site has been tested thoroughly.
* All HTML code has been run through the [W3C HTML Validator](https://validator.w3.org/).
    * A few warnings were presented when testing the HTML code.
* All CSS code has been run through the [W3C CSS Validator](https://jigsaw.w3.org/css-validator/).
    * No warnings or errors were presented when testing the CSS code.
* All JavaScript code has been run through [JSHint](https://jshint.com/).
    * A few warnings were presented when testing the JavaScript code.

After making the necessary adjustments to the code, no errors or warnings were presented 
* For more information on the warnings that were presented, please go to the [known Bugs](#known-bugs) section.

### W3C HTML Validator Final Results

![Screenshot of html validator result](assets/readme-images/html-validation-screenshot.png)

### W3C CSS Validator Final Results

![Screenshot of CSS validator result](assets/readme-images/css-validation-screenshot.png)

### JSHint Final Results

#### Main Script (script.js)
* No warnings are shown.
* When the code from the main script is tested in JSHint it shows that there are 3 undefined variables which are named as easyQuestions, mediumQuestions, and hardQuestions.
    * This is because these variables have been defined in another script (questions.js)

![Screenshot of JSHint result for script.js](assets/readme-images/jshint-main-script-screenshot.png)

#### Script Containing Questions (questions.js)
* No warnings are shown.
* When the code from the script containing the questions is tested in JSHint it shows that there are 3 unused variables which are the same variables shown as undefined in the main script (script.js).
    * This is because the functions are used in another script (script.js).

![Screenshot of JSHint result for questions.js](assets/readme-images/jshint-questions-screenshot.png)

## Responsiveness

The site was tested for responsiveness throughout the development phase using [Google Chrome Devtools](https://developer.chrome.com/docs/devtools/) and the [Responsive Design Checker](https://responsivedesignchecker.com/).

* The site was designed with a simple centered layout which required very few adjustments for different-sized screens.
* The site was designed for small screens and then a few adjustments were made for larger screens using a media query.

I tested the site across multiple screen sizes used by different devices and the site worked and was displayed as intended across all the screen sizes.
* Some of the screen sizes used for testing were:
    * Moto G4 - 360px x 640px.
    * Galaxy S9+ - 320px x 658px.
    * iPhone SE - 375px x 667px.
    * Nexus 9 - 1024px x 768px
    * Apple iPad Mini - 768px x 1024px.
    * Apple iPad Pro - 1366px x 1024px.
    * 13" Notebook - 1024px x 800px.
    * 15" Notebook - 1366px x 768px.
    * 20" Desktop - 1600px x 900px.



## Browser Compatibility

The site was tested on the following browsers:
* Google Chrome
* Microsoft Edge
* Safari

I did not come across any problems on any of these browsers and the functionality and appearance remained consistent.

## Testing User Stories

As a user I want to:

* test my general knowledge with a quiz.
    * The focus of the site is on a general knowledge quiz.
    * The site has intuitive buttons to initiate a quiz.
    * There are different difficulty levels for the user to select and test their knowledge at different levels.

* be able to initiate the start of the quiz.
    * A button is available for the user to click on to initiate the difficulty selection and the start of the quiz.

* be able to understand how to take the quiz.
    * The rules modal clearly explains how to correctly take part in the quiz.

* be able to select a difficulty before starting the quiz.
    * When the user clicks the button to take the quiz, a prompt first appears telling the user to select a difficulty option to start the quiz.

* know my current score.
    * At the bottom of the quiz area is a score display that increments with each correct answer and displays the current score.

* know how far along with the quiz I am.
    * At the top of the quiz area is a question number indicator which displays the number of the question the user is currently on out of 10.

* know whether my answer is correct or wrong.
    * If the user selects the incorrect answer, the selected answer will be highlighted in red and the correct answer will be highlighted in green.
    * If the user selects the correct answer, the selected answer will be highlighted in green.
    * If the timer runs out, the correct answer will be highlighted in green and all the incorrect answers will be highlighted in red.

* know my final score.
    * At the end of a quiz, a message is displayed to inform the user that the quiz is complete and the final score out of 10 is displayed.

* be able to take the quiz again after completion.
    * At the end of a quiz, underneath the message containing the final score, there are two buttons with options to retry a quiz or return to the main menu.

## Known Bugs

### Resolved

During code validation the following warnings were presented:

* #### In the HTML:

    ![Screenshot of HTML warnings](assets/readme-images/html-warning-screenshot.png)
    * This was due to an accidental placement of a forward slash after the href attribute in the link for the favicon.
    * This was resolved by simply removing the forward slash.

* #### In both JavaScript files:

    ![Screenshot of javascript semicolon warning](assets/readme-images/js-semicolon-warning-screenshot.png)

    * This warning was shown for multiple lines of code where there was a missing semicolon.
    * The warning was cleared once the semicolons were added in the required places.

* #### In the main JavaScript file:

    ![Screenshot of javascript warnings](assets/readme-images/jshint-warnings-screenshot.png)
    * These warnings were a result of functions being declared inside loops referencing an outer scoped variable.
    * Although the code worked as intended, the warning indicated it may lead to confusing semantics.
    * This was resolved by replacing the for loops that were used to iterate through buttons with the "forEach" method. Once this was done, the warning was cleared.

#### Other significant amendments are listed below

* Once the user completed a quiz or part of a quiz and their score had been incremented, the score would stay the same when another quiz was initiated and would not reset to 0.
    * This was fixed by creating a JavaScript function that resets the score to 0 whenever the quit button or end of quiz buttons are clicked.

* The timer would not stop when the user answered a question or when the time was less than 0.
    * This was resolved by using clearInterval() to clear the interval for the timer when necessary and then resetting the interval when the timer needed to start again.

* The user was able to click on answers repeatedly on the same question.
    * This was resolved through the following steps:
        1. Adding an event listener to the answer buttons to listen for a click.
        2. Once clicked, add a class of "no-pointer" to the answer area class list.
        3. Style the class of "no-pointer" to not allow clicks.
        4. Remove the "no-pointer" class again when a new question is initiated.

## Additional Testing