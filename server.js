const express = require("express");
const app = express();

const PORT = 7000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

// CODE FOR STARTING THE GAME

app.get("/startGame", (req, res) => {
  let score = 0;
  res.send(`Welcome to the Hangman Game: ${score}`);

}); 

app.get("/score", (req, res) => {
  let score = 0;
  res.send(`the score is: ${score}`)
});

// CODE FOR HANDLING A GUESS

app.get("/enterGuess", (req, res) => {

  
  res.send({ randomItem: "Game" });
 });

 