const express = require("express");
const app = express();
const userGuess = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

const PORT = 7000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

app.get("/startGame", (req, res) => {
  res.send( "Welcome to the Hangman Game, Please enjoy the Game");

});
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
let randomItem
function randomSelect() {
   randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  console.log("randomItem is", randomItem);
  return randomItem;
}
const string = randomItem;

const usingSplit = string.split(" ");
const usingSpread = [...string];
const usingArrayFrom = myArray.from(string);
const usingObjectAssign = Object.assign([], string);

console.log("usingSplit", usingSplit)
console.log("usingSpread", usingSpread)
console.log("usingArrayFrom", usingArrayFrom)
console.log ("usingObjectAssign", usingObjectAssign);

let generateUnderscore = () => {
  let underScore = []
  for (let i = 0; i < randomItem.length; i++) {
   let u = '_';
    underScore.push(u);
   }
    console.log("generateUnderscore is", underScore);
    return underScore;
  }

randomSelect();
generateUnderscore(randomItem);
// app.get("/guessing", (req, res) => {
  
//   if(userGuess === randomItem){
//     wins++;
// }else{
//     guesses--;
// }

// if(guesses = 0){
//     losses++
// }
// res.send({ randomItem: "Game" });
// });

