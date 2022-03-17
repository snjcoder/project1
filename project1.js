let prjRandomItem;
let prjUnderScore = [];
let prjGuessesLeft = 6;
let prjLettersGuessed = new Set();

let prjMyWords = [
  'otter',
  'hippo',
  'whale',
  'dolphin',
  'shark',
  'polar bear',
  'platypus',
  'walrus',
  'killer whale',
  'seal',
  'sea mink',
];

function randomSelect() {
  let randomIndex = Math.floor(Math.random() * prjMyWords.length);
  prjRandomItem = prjMyWords[randomIndex];
  console.log('prjRandomItem is', prjRandomItem);
  let underScore = generateUnderscore();

  return underScore;
}

let generateUnderscore = () => {
  prjUnderScore = [];
  for (let i = 0; i < prjRandomItem.length; i++) {
    let u = '_';
    prjUnderScore.push(u);
  }
  console.log('prjUnderScore is', prjUnderScore);
  return prjUnderScore;
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
    if (!prjLettersGuessed.has(letter)) {
      prjLettersGuessed.add(letter);
      return null;
    } else {
      return 'Letter has already been guessed!';
    }
  } else {
    return 'You can only guess one letter at a time!';
  }
}

function guess(userGuess) {
  let validResponse = validateGuess(userGuess);
  if (validResponse !== null) {
    return validResponse;
  }
  let matches = prjRandomItem.matchAll(userGuess);
  let found = false;
  for (let match of matches) {
    prjUnderScore[match.index] = userGuess;
    found = true;
  }
  if (found) {
    if (prjUnderScore.includes('_')) {
      return `You Guessed the correct letter ${prjUnderScore}.  You have ${prjGuessesLeft} strikes left.`;
    } else {
      return `You guessed it!!! ${prjUnderScore}. YOU WIN!!!`;
    }
  } else {
    prjGuessesLeft = prjGuessesLeft - 1;
    if (prjGuessesLeft <= 0) {
      return `You lose!  ${prjUnderScore}.  The word was ${prjRandomItem}.`;
    } else {
      return `You guessed the incorrect letter. You have ${prjGuessesLeft} strikes left.  ${prjUnderScore}`;
    }
  }
}

module.exports = { guess, randomSelect };
