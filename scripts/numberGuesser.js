var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");
var scoreMsg = document.getElementById("scoreMsg");

var answer = Math.floor(Math.random() * 1000) + 1;
var noOfGuesses = 0;
var guessedNumbers = [];
var playerOne = true;
var playerOneScore = 0;
var playerTwoSore = 0;


function guess(){ 
    
    var playerGuess = document.getElementById("guess").value;

    if (playerGuess < 1 || playerGuess > 1000){
        alert("Number must be between 1-1000");
    }
    else{
        guessedNumbers.push(" " + playerGuess);
        noOfGuesses += 1;

        if (playerGuess < answer){
            msg1.textContent = "Your guess is too low";
            msg2.textContent = "Number of guesses: " + noOfGuesses;
            msg3.textContent = "Guessed numbers: " + guessedNumbers;
        }
        else if (playerGuess > answer){
            msg1.textContent = "Your guess is too high";
            msg2.textContent = "Number of guesses: " + noOfGuesses;
            msg3.textContent = "Guessed numbers: " + guessedNumbers;
        }
        else if (playerGuess == answer){
            msg1.textContent = "Yay you guessed correctly!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "It took " + noOfGuesses + " tries";
            document.getElementById("guessBtn").disabled = true;
            if (playerOne === true){
                playerOneScore += 11 - noOfGuesses;
                playerOne = false;
                scoreMsg.textContent = "Player one score: " + playerOneScore;
            }
            else if (playerOne === false){
                playerTwoSore += 11 - noOfGuesses;
                playerOne = true;
                scoreMsg.textContent = "Player two Score: " + playerTwoScore;
            }
        }

    }

    if (noOfGuesses > 9 && playerGuess != answer){
        msg1.textContent = "The computer wins!";
        msg2.textContent = "You've used up all your guesses";
        msg3.textContent = "The correct answer was: " + answer;
        document.getElementById("guessBtn").disabled = true;
    
        
    }
}

function newRound(){

}

function reload(){
    window.location.reload();
    document.getElementById("guess").value = '';
}
