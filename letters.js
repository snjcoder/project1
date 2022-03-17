
//How to display each letter
function getChar() {
  if (guessed === false) {
    return '_';
  } else {
    return letter;
  }
}

function checkGuess(guess) {
  if (guess === letter) {
    guessed = true;
    return true;
  } else {
    return false;
  }
}

module.exports = { getChar, checkGuess };
