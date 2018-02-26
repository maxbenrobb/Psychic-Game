var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , 
"j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , 
"w" , "x" , "y" , "z"];

var wins = 0;

var losses = 0;

var guessLeft = 9;


//how do I make the guess toLowerCase()
document.onkeyup = function(event) {
    var guess = event.key;
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   if (guess === "a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , 
    "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , 
    "w" , "x" , "y" , "z") {
        if (guess === computerGuess) {
            wins++;
        } else if (guess === )

    }

}




var html =
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>Guesses left: " + guessLeft + "</p>" + 
    "<p>Your guess so far: " + "</p>";