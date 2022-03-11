const express = require("express");
const app = express();
const fs=require('fs');
const PORT = 7000;

app.listen(PORT, function() { 
     console.log(`Listening on port ${PORT}`);
   
});

app.get("/startGame", (req,res) =>{ 
    
    res.send({"Hangman":"Game"})
});
app.get("/startGame", (req,res) =>{ 
    
    res.send({"Hangman":"Game"})
});

