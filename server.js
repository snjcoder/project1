
const express = require('express');
const { randomSelect, guess, gameState} = require('./project1');
const app = express();

const PORT = 7000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// PLAYER NAME curl link curl http://localhost:7000/playerName?name="

app.get("/playerName", (req, res) => {
  let name = req.query.name;
  gameState.name = name;
  res.send(
    `Hello ${name}, Welcome to the Hangman Game : "curl http://localhost:7000/startGame"`
  );
});


// CODE FOR STARTING THE GAME

app.get('/startGame', (req, res) => {
  theScore = 0;
  let randomWord = randomSelect();
  res.send(
    `Welcome to the Hangman Game: Here is your First Word ${randomWord}: "curl http://localhost:7000/enterGuess?guess= "`
  );
});

// CODE FOR HANDLING A GUESS

app.get('/enterGuess', (req, res) => {
  let userGuess = req.query.guess;
  let response = guess(userGuess);
  res.send(response);
});



