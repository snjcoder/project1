const express = require("express");
const app = express();
// const fs = require("fs");
// const document = require("document");
const PORT = 7000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});

app.get("/startGame", (req, res) => {
  res.send({ Hangman: "Game" });
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
var generateUnderscore = () => {
  for (var i = 0; i < myArray.length; i++) {
    underScore.push("_");
    console.log("generateUnderscore is", generateUnderscore);
    return underScore;
  }
};
function randomSelect() {
  var randomItem = myArray[Math.floor(Math.random() * myArray.length)];
  console.log("randomItem is", randomItem);
  return randomItem;
}
randomSelect();

app.get("/guessing", (req, res) => {
  res.send({ randomItem: "Game" });
});
