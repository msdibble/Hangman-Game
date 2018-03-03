// Global variables
$(document).ready(function() {

var words = ["dragon", "direwolf", "targaryen", "stark", "westeros", "wildfire", "wildlings", "greyscale", "dothraki"];
var winMessage = "Congratulations! You are now King/Queen of the Andals and the First Men, protector of the seven kingdoms! Long may you reign!";
var loseMessage = "Game over. And now your watch has ended.";
var maxLives = 10;
    
    
// Random word selected for the game 
var selectedWord = words[Math.floor(Math.random() * words.length)];
    console.log(selectedWord);

var guessedLetters = [];
for (var i = 0; i < selectedWord.length; i++) {
    guessedLetters.push("_");
}
for (var i=0; i < guessedLetters.length; i++) {
    document.getElementById("correctLetters").innerHTML += guessedLetters[i];
}
    
// Selected word for the game is split
var wordSplit;
    wordSplit = selectedWord.split("");
    
var letters = [];

var wordLength = selectedWord.length;

    
    
//Playing the Game:
    
// Number of lives starts at 10 by pressing any key. Only letters can be pressed.
    
    document.onkeypress = function (event) {
        var inp = String.fromCharCode(event.keyCode);
        var playerGuess = event.key;
        var letterIndex = wordSplit.indexOf(playerGuess);
        console.log(letterIndex);
        if (/[0-9-_]/.test(inp)) {
            alert("Please enter in a letter only");
        }
    
        else {
                var userLetters = document.getElementById("incorrectLetters").innerHTML;
                if (!letters.includes(playerGuess)) {
                    
                    if (selectedWord.includes(playerGuess)) {

                        var guessIndex = selectedWord.indexOf(playerGuess);
                        while (guessedLetters[guessIndex] == playerGuess) {
                            var restOfTheWord = selectedWord.substring(guessIndex + 1, selectedWord.length);
                            guessIndex += restOfTheWord.indexOf(playerGuess) + 1;
                        }
                        guessedLetters[guessIndex] = playerGuess;

                        document.getElementById("correctLetters").innerHTML = "";
                        for (var i=0; i < guessedLetters.length; i++) {
                            document.getElementById("correctLetters").innerHTML += guessedLetters[i];
                        }

                        if (!guessedLetters.includes("_")) {
                            alert(winMessage);
                        }

                    } else {

                        letters.push(playerGuess);
                        document.getElementById("incorrectLetters").innerHTML = letters;
    
                        for (var i=0; i < 1; i++) {
                            maxLives = document.getElementById("livesLeft").innerHTML = maxLives - 1;
        
                        }
        
                        if (maxLives < 0) {
                            document.getElementById("livesLeft").innerHTML = 0;
                            alert(loseMessage);
                        }

                    }

                }     
            
        }
    }



}
    
)







