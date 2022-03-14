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
let myArray = [
    "otter",
    "hippo",
    "whale",
    "dolphin",
    "shark",
    "polar bear",
    "platypus",
    "walrus",
    "killer whale",
    "seal",
    "sea mink",
  ];
  let generateUnderscore = () => {
    for (let i = 0; i < myArray.length; i++) {
      underScore.push("_");
      console.log("generateUnderscore is", generateUnderscore);
      return underScore;
    }
  };
  function randomSelect() {
    var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
    console.log("randomItem is", randomItem);
    return randomItem;
  }
  randomSelect();
  
  
