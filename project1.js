const readlinesync = require("readline-sync")
let gameName = readlinesync.question("Please enter game? ");
console.log("Hangman",gameName);


var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(computerChoice)
   // When the user presses a key, it will run the following function...
document.keypress = function(event) {
let userGuess = event.key;
if(userGuess === randomItem){
    wins++;
}else{
    guesses--;
}

if(guesses = 0){
    losses++
}
}
