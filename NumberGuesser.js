
// Choose our secret number.
function setup() {

    outputLabel = document.getElementById("outputLabel")
    triesLabel = document.getElementById("attemptRemainLabel")

    lowNum = 0
    highNum = 100
    numTries = 10

    secretNumber = getRandomNumber(lowNum, highNum)

    var instructionString = "Try to guess my secret number. It is between " + lowNum + " and " + highNum

    document.getElementById("instructionLabel").innerHTML = instructionString
    
    triesLabel.innerHTML = numTries

}

function validateGuess(guessToCheck) {
    if (numTries > 0) {
        if (guessToCheck >= lowNum && guessToCheck <= highNum) {
            checkGuess(guessToCheck)
        }
        else {
            outputLabel.innerHTML = "Plese enter a number between " + lowNum + " and " + highNum + "."
        }
    }
    else {
        outputLabel.innerHTML = "I'm sorry, you've used up all of your attempts. The secret number was " + secretNumber + "."
    }
}

// Compare the user's guess to our secret number.
function checkGuess(guessToCheck) {
    triesLabel.innerHTML = --numTries
    if (guessToCheck == secretNumber) {
        outputLabel.innerHTML = "You guessed correctly!"
    }
    else {
        outputLabel.innerHTML = "That is not the secret number."
    }
}

function getRandomNumber(lowEnd, highEnd) {
    return Math.floor(Math.random() * highEnd) + lowEnd
}