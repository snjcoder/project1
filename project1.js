const readLineSync = require("readline-sync")
const express = require("express");
const wins = 0;
const losses = 0;
const GuessesLeft = 12;
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
let randomItem;
let funReturn = "";
function randomSelect() {
  randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  console.log("randomItem is", randomItem);
  return randomItem;
}
console.log("funReturn is", funReturn);
const arrayOfString = new String(randomItem);
funReturn = randomSelect();

for (let i = 0; i < funReturn.length; i++) {
  console.log(funReturn[i]);
}

let generateUnderscore = () => {
  let underScore = [];
  for (let i = 0; i < randomItem.length; i++) {
    let u = "_";
    underScore.push(u);
  }
  console.log("generateUnderscore is", underScore);
  return underScore;
};

generateUnderscore(randomItem);

function guess() {
  userGuess = readLineSync.question("Enter your guessing letter ");
  console.log(` ${userGuess} is your guess`);
}
guess();

if (userGuess === funReturn) {
  wins++;
  console.log("your guess is true", "try agian");
} else if (GuessesLeft == 0) {
  losses++;
  console.log("your guess is false", "try again");
  GuessesLeft = 12;
} else if (GuessesLeft.length < 0) {
} else {
  GuessesLeft - 1;
}
