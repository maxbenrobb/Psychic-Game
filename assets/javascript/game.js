var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , 
"j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , 
"w" , "x" , "y" , "z"];

var guessesSoFar = [];

var wins = 0;

var losses = 0;

var guessLeft = 9;

var computerGuess = getNewComputerGuess();

document.onkeyup = function(event) {

    var guess = event.key;
console.log(event.keyCode);
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("use a lower case letter");
        return;
    }

    if (guessesSoFar.indexOf(guess) > -1) {
        return;
    }

    guessesSoFar.push(guess);

    console.log(computerGuess);

    guessLeft--;
    document.getElementById("guess-left").innerHTML = guessLeft;

    var guessText = "";
    var guessCounter = document.getElementById("guess-counter").innerHTML;
    
    if(guessCounter){
        guessText = guessCounter + ", " + guess;
    } else {
        guessText = guess;
    }

    document.getElementById("guess-counter").innerHTML = guessText;

    if(guessLeft === 0) {
        alert("You lost. Game is reset. Try again!!!");
        losses++;
        document.getElementById("loss-counter").innerHTML = losses;
        gameReset();

    } 
    else if(guess === computerGuess){
        document.getElementById("win-counter").innerHTML = ++wins;
        gameReset();
    }

}

function gameReset() {
    guessLeft = 9;
    guessesSoFar = [];
    computerGuess = getNewComputerGuess();
    document.getElementById("guess-counter").innerHTML = "";
    document.getElementById("guess-left").innerHTML = guessLeft;
}

function getNewComputerGuess() {
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
}
