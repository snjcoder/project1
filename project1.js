let RandomItem;
let UnderScore = [];
let GuessesLeft = 10;
let LettersGuessed = new Set();

const gameState = {
  theScore: 0,
  name: "",
};
let MyWords = [
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

let levels = [
  ` --------\n   
    |      |\n
           |\n
           |\n
           |\n
           |\n`,

  ` --------\n   
    |      |\n
    0      |\n
           |\n
           |\n
           |\n`,

  ` --------\n   
    |      |\n
    0      |\n
    |      |\n
           |\n
           |\n`,

  ` --------\n   
    |      |\n
    0      |\n
    |      |\n
    |      |\n
           |\n`,

  ` --------\n   
    |      |\n
    0      |\n
    |      |\n
    |      |\n
    |      |\n`,

  ` --------\n   
    |      |\n
    0      |\n
   /|      |\n
    |      |\n
    |      |\n`,

  ` --------\n   
    |      |\n
    0      |\n
   /|\\     |\n
    |      |\n
    |      |\n`,

  ` --------\n   
    |      |\n
    0      |\n
   /|\\     |\n
    |      |\n
   \\|      |\n`,

  ` --------\n   
    |      |\n
    0      |\n
   /|\\     |\n
    |      |\n
   \\|/     |\n`,
];

console.log(levels);

function randomSelect() {
  let randomIndex = Math.floor(Math.random() * MyWords.length);
  RandomItem = MyWords[randomIndex];
  console.log("RandomItem is", RandomItem);
  let underScore = generateUnderscore();

  return underScore;
}

let generateUnderscore = () => {
  UnderScore = [];
  for (let i = 0; i < RandomItem.length; i++) {
    let u = "_";
    UnderScore.push(u);
  }
  console.log("UnderScore is", UnderScore);
  return UnderScore;
};

/**
 * Check if the given guess:
 *  - has not been used before
 *  - is a single letter
 *
 * @param {*} letter
 * @returns NULL if not used & is single letter, otherwise return message string
 */

function validateGuess(letter) {
  if (letter.length === 1) {
    if (!LettersGuessed.has(letter)) {
      LettersGuessed.add(letter);
      return null;
    } else {
      return "Letter has already been guessed!";
    }
  } else {
    return "You can only guess one letter at a time!";
  }
}

function guess(userGuess) {
  let validResponse = validateGuess(userGuess);
  if (validResponse !== null) {
    return validResponse;
  }
  let matches = RandomItem.matchAll(userGuess);
  let found = false;
  for (let match of matches) {
    UnderScore[match.index] = userGuess;
    found = true;
  }
  if (found) {
    if (UnderScore.includes("_")) {
      return `You Guessed the correct letter ${UnderScore}.  You have ${GuessesLeft} strikes left.\n${
        levels[GuessesLeft - 1]
      }`;
    } else {
      gameState.theScore = gameState.theScore + 1; 
      return `You guessed it!!! ${UnderScore}. YOU WIN!!!,${theScore} This is score`;
      
    }
  } else {
    GuessesLeft = GuessesLeft - 1;
    if (GuessesLeft <= 0) {
      gameState.theScore = gameState.theScore - 1;
      return `You lose!  ${UnderScore}.  The word was ${RandomItem}.`;
    } else {
      console.log(GuessesLeft, levels[GuessesLeft - 1]);
      return `You guessed the incorrect letter. You have ${GuessesLeft} strikes left.  ${UnderScore}.\n${
        levels[GuessesLeft - 1]
      }`;
    }
  }
}

module.exports = { guess, randomSelect,gameState };
