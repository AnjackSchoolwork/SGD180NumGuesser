
// Initialize
function setup() {

    // Change these numbers to change the game parameters.
    lowNum = 0
    highNum = 100
    numTries = 10
    
    secretNumber = getRandomNumber(lowNum, highNum)

    resetForm()
}

// Set all text to defaults and set button action
function resetForm() {

    var instructionString = "Try to guess my secret number. It is between " + lowNum + " and " + highNum
    document.getElementById("instructionLabel").innerHTML = instructionString
    
    outputLabel = document.getElementById("outputLabel")
    outputLabel.innerHTML = ""

    triesLabel = document.getElementById("attemptRemainLabel")
    triesLabel.innerHTML = numTries

    // Change the button back to defaults.
    checkButton = document.getElementById("checkButton")
    checkButton.innerHTML = "Check Guess"
    checkButton.setAttribute("onclick", "validateGuess(document.getElementById('inputField').value)")

    document.getElementById("inputField").value = ""
}

function validateGuess(guessToCheck) {
    // Do we have any tries left?
    if (numTries > 0) {
        // Is this a valid guess?
        if (guessToCheck >= lowNum && guessToCheck <= highNum && guessToCheck != "") {
            checkGuess(guessToCheck)
        }
        else {
            outputLabel.innerHTML = "Plese enter a number between " + lowNum + " and " + highNum + "."
        }
    }
    else {
        outputLabel.innerHTML = "I'm sorry, you've used up all of your attempts. The secret number was " + secretNumber + "."
        enableGameReset()
    }
}

// Compare the user's guess to our secret number.
function checkGuess(guessToCheck) {
    triesLabel.innerHTML = --numTries
    if (guessToCheck == secretNumber) {
        outputLabel.innerHTML = "You guessed correctly!"
        enableGameReset()
    }
    else {
        outputLabel.innerHTML = "That is not the secret number."
    }
}

function getRandomNumber(lowEnd, highEnd) {
    return Math.floor(Math.random() * highEnd) + lowEnd
}

// Change the check button to a reset button.
function enableGameReset() {
    checkButton.innerHTML = "Restart Game"
    checkButton.setAttribute("onclick", "setup()")
}