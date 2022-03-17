let letter = require("./letters.js");
let rand_word = require("random-words");

//TODO: randomise the word
function Word(){

    //Pick a word and make the letters for it
    let letters = [];

    let possible_words = [];
     // let word = "stowaway";
     let word = rand_word();
     this.word = word;
     let split_word = word.split("");
 
     //Make a Letter instance for each letter
     split_word.forEach( function(l){
         let temp = new letter(l);
         letters.push(temp);
     });
 
     this.letters = letters;
      //Display word with letters shown or hidden
    this.showLetters = function(){
        let display = "";
        this.letters.forEach( function(letter){
            display += letter.getChar() + " ";
        });
        display = display.slice(0, -1);

        console.log(display);
    }

    this.checkGuess = function( guess ){
        let matches_found = 0;
        this.letters.forEach( function(letter){
            if( letter.guessed === false && letter.checkGuess(guess) === true){
                letter.guessed = true;
                matches_found++;
            }
        });
        return matches_found;
        
    }
}
module.exports = {word};