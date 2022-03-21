const express = require('express');
const { randomSelect, guess } = require('./project1');
const app = express();

const PORT = 7000;

let theScore;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// CODE FOR STARTING THE GAME

app.get('/startGame', (req, res) => {
  theScore = 0;
  let randomWord = randomSelect();
  res.send(
    `Welcome to the Hangman Game: Here is your First Word ${randomWord}: "curl http://localhost:7000/startGame"`
  );
});

app.get('/score', (req, res) => {
  res.send(`the score is: ${theScore}`);
});

// CODE FOR HANDLING A GUESS

app.get('/enterGuess', (req, res) => {
  let userGuess = req.query.guess;
  let response = guess(userGuess);
  res.send(response);
});

