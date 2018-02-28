// Global variables

var words = ["dragon", "direwolf", "targaryen", "stark", "westeros", "wildfire", "wildlings", "greyscale", "dothraki"];
var maxLives = 10;

// Random word selected for the game
var selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);


var maxLives = 10;
var livesLeft = "";
var letters = "";
var usedLetters = "";
var winMessage = "Congratulations! You are now King/Queen of the Andals and the First Men, protector of the seven kingdoms! Long may you reign!"
var loseMessage = "Game over. And now your watch has ended."
var wins = 0;
var losses = 0;
var selectedWord = "";
var wordLength = selectedWord.length;
var underscores = "";

//Playing the Game:

// Number of lives starts at 10 by pressing any key

    document.onkeypress = function (event) {
        var playerGuess = event.key;
        console.log(playerGuess);
    }
// Player guesses which letters are in the selected word

// If letter is in word, number of lives stays the same ("if" statement)

// If letter is not in word, number of lives decreases by 1 ("else" statement)

// If user guesses all letters in the word before lives reaches 0, user wins and the game is over ("if" statement)


// If user not guess all letters in word before lives reaches 0, user loses and the game is over ("else" statement)










