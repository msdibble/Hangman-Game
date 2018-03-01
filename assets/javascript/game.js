// Global variables
$(document).ready(function() {
var availableLetters = 'abcdefghijklmnopqrstuvwxyz';
var words = ["dragon", "direwolf", "targaryen", "stark", "westeros", "wildfire", "wildlings", "greyscale", "dothraki"];
var winMessage = "Congratulations! You are now King/Queen of the Andals and the First Men, protector of the seven kingdoms! Long may you reign!";
var loseMessage = "Game over. And now your watch has ended.";
var maxLives = 10;


// Random word selected for the game
var selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);

// Selected word for the game is split
var wordSplit;
    wordSplit = selectedWord.split("");

var letters = "";
var usedLetters = [];
var selectedWord = "";
var wordLength = selectedWord.length;
var underscores = [];

//Playing the Game:

// Number of lives starts at 10 by pressing any key

    document.onkeypress = function (event) {
        var playerGuess = event.key;
        var letterIndex = wordSplit.indexOf(playerGuess)
        console.log(wordSplit);
        console.log(playerGuess);
        console.log(wordSplit.indexOf(playerGuess))
    
    // Incorrect letters that have already been used appear next to "USED LETTERS:"
        
    if (letterIndex < 0) {
        console.log("incorrectLetter");
        usedLetters.push(playerGuess);
        console.log(usedLetters);
        document.getElementById("lettersUsed").innerHTML = usedLetters;
            console.log(maxLives);

    // Every time an incorrect letter is selected, the number of lives decreases by 1.

        for (var i=0; i < maxLives; i++) {
            maxLives = document.getElementById("livesLeft").innerHTML = maxLives - 1;
            }
        }

        else {

        }
    }

    function newGame () {
        document.getElementById("livesLeft") = maxLives;
    }
    
// Player guesses which letters are in the selected word

// If letter is in word, number of lives stays the same ("if" statement)

// If letter is not in word, number of lives decreases by 1 ("else" statement)

// If user guesses all letters in the word before lives reaches 0, user wins and the game is over ("if" statement)


// If user not guess all letters in word before lives reaches 0, user loses and the game is over ("else" statement)


}

)








