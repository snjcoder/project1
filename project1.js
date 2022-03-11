const readlinesync = require("readline-sync")
let gameName = readlinesync.question("Please enter game? ");
console.log("Hangman",gameName);

let randomWord = ['otter', 'hippo', 'whale', 'dolphin', 'shark', 'polar bear', 'platypus', 'walrus', 'killer whale', 'seal', 'sea mink'];

function Hangman(randomWord, Guess)