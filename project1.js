let randomItem;
let underScore = [];
let wordclass = require("./word.js");
let inquirer = require("inquirer");
let guesses_left = 10;
let game_over = false;
let letters_guessed = new Set();
let word = new wordclass();

let letters_left = word.letters.length;
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

function randomSelect() {
  randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  console.log("randomItem is", randomItem);
  let underScore = generateUnderscore();

  return underScore;
}

let generateUnderscore = () => {
  for (let i = 0; i < randomItem.length; i++) {
    let u = "_";
    underScore.push(u);
  }
  console.log("generateUnderscore is", underScore);
  return underScore;
};

function guess(userGuess) {
  let matches = randomItem.matchAll(userGuess);
  let found = false;
  for (let match of matches) {
    underScore[match.index] = userGuess;
    found = true;
  }
  if (found) {
    return `You Guessed the correct letter ${underScore}`;
  } else {
    return `You Guessed the incorrect letter ${underScore}`;
  }
  function compare(letter) {
    if (letter.length === 1) {
      if (!letters_guessed.has(letter)) {
        letters_guessed.add(letter);
      } else {
        console.log("Letter has already been guessed!\n");
        return;
      }
      let num_correct = word.checkGuess(letter);
      console.log(num_correct);
      if (num_correct > 0) {
        console.log("Correct!\n");
        letters_left -= num_correct;
      } else {
        guesses_left--;
        console.log("Incorrect!  " + guesses_left + " guesses remaining\n");
      }

      if (letters_left === 0) {
        console.log("You win!");
        word.showLetters();
        game_over = true;
      }

      if (guesses_left === 0) {
        console.log("You lose!");
        console.log("Word was " + word.word);
        game_over = true;
      }
    } else {
      console.log("You can only guess one letter at a time!\n");
    }
  }
}

module.exports = { guess, randomSelect };
