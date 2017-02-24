// Variables for tracking our wins, losses and guesses. They begin at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = document.getElementById('yourguesses');
guessesSoFar.innerHTML = "";


// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

  var guessdef = document.getElementById('guesses');
  guessdef.innerHTML = "Guesses So Far: ";

// App picks a letter randomly
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var appRandomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

// User picks a letter to match app's pick
var userGuess = event.key;


// If the user presses a letter, run the game logic.
if (userGuess === appRandomLetter) {
  wins++;
  losses = 0;
  guessesLeft = 9;
  guessesSoFar.innerHTML = "";

}
else if (userGuess !== appRandomLetter) {
   guessesLeft--;
  if(guessesLeft === 8){
    guessesSoFar.innerHTML += userGuess;  
  }
  else{
    guessesSoFar.innerHTML += ", " + userGuess; 
  }


  if(guessesLeft===0){
    losses++;
    guessesLeft = 9;
    guessesSoFar.innerHTML = "";
  }

}
// Here we create the HTML that will be injected into our div and displayed on the page.
var html = "<p>Guess what letter I'm thinking of</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>Guesses Left: " + guessesLeft + "</p>" 
//"<p id="yourguesses">Guesses So Far: " + guessesSoFar + "</p>";
// Injecting the HTML we just created into our div and updating the game information on our page.
document.getElementById("game").innerHTML = html;

};
