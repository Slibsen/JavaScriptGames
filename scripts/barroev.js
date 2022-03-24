var activeDice = document.getElementsByClassName("activeDice");
var inactiveDice = document.getElementsByClassName("inactiveDice");
var totalScore = 0;
var player1Name = window.prompt("indtast navn til spiller 1: ");
var player2Name = window.prompt("indtast navn til spiller 2: ");
var player1Score = 0;
var player2Score = 0;
let player = 'p1';
const scoreLimit = 50;
window.onload = (event) => {
    getVariables();
    nextBtn.disabled=true;
    rollBtn.disabled=false;
    activeTurnMsg.innerHTML="Current players turn: " + activePlayerName(player);
    roundScoreMsg.innerHTML="Current players score this round - " +0;
    p1ScoreMsg.innerHTML=player1Name + " - Score - " + player1Score;
    p2ScoreMsg.innerHTML=player2Name + " - Score - " + player2Score;
};
function getVariables (){
    const rollBtn = document.getElementById("rollBtn");
    const nextBtn = document.getElementById("nextBtn");
    const clearBtn = document.getElementById("clearBtn");
    var activeTurnMsg = document.getElementById("activeTurnMsg");
    var roundScoreMsg = document.getElementById("roundScoreMsg");
    var p1ScoreMsg = document.getElementById("p1ScoreMsg");
    var p2ScoreMsg = document.getElementById("p2ScoreMsg");
    var status = document.getElementById("status");
}

function activePlayerName (currentPlayer){
    if (currentPlayer === 'p1') {
        return player1Name;
    } 
    else if (currentPlayer === 'p2') {
        return player2Name;
    }
}

function activePlayerScore (currentPlayer, score){
    getVariables();
    if (currentPlayer === 'p1') {
        player1Score += score;
        p1ScoreMsg.innerHTML=player1Name + " - Score - " + player1Score;
    } 
    else if (currentPlayer === 'p2') {
        player2Score += score;
        p2ScoreMsg.innerHTML=player2Name + " - Score - " + player2Score;
    }
}

function winner(currentPlayer){
    getVariables();
    var winner;
    if (currentPlayer === 'p1') {
        if (player1Score >= scoreLimit){
            if (player1Score > player2Score){
                rollBtn.disabled=true;
                nextBtn.disabled=true;
                window.alert(player1Name + " Vandt med " + player1Score);
            }
            else if (player1Score = player2Score){
                rollBtn.disabled=true;
                nextBtn.disabled=true;
                window.alert("Spillet er uafgjort ");
            }
        }
    }   
    else if (currentPlayer === 'p2') {
        if (player2Score >= scoreLimit){
            if (player2Score > player1Score){
                rollBtn.disabled=true;
                nextBtn.disabled=true;
                window.alert(player2Name + " Vandt med " + player2Score);
            }
            else if (player2Score = player1Score){
                rollBtn.disabled=true;
                nextBtn.disabled=true;
                window.alert("Spillet er uafgjort ");
            }
        }
    }
}

function switchPlayer(currentPlayer) {
    if (currentPlayer === 'p1') {
      player = 'p2';
    } 
    else {
      player = 'p1';
    }
  }

function nextTurn() {
    if (totalScore < scoreLimit){
        switchPlayer(player);
        clearDice();
    }    
}
function newGame(){
    player1Name = window.prompt("indtast navn til spiller 1: ");
    player2Name = window.prompt("indtast navn til spiller 2: ");
    clearDice();
    player1Score = 0;
    player2Score = 0;
    p1ScoreMsg.innerHTML=player1Name + " - Score - " + player1Score;
    p2ScoreMsg.innerHTML=player2Name + " - Score - " + player2Score;
}

function clearDice() {
    getVariables();
    var tempd1 = document.getElementById("die1");
    var tempd2 = document.getElementById("die2");
    var tempd3 = document.getElementById("die3");
    var tempd4 = document.getElementById("die4");
    var tempd5 = document.getElementById("die5");
    var tempd6 = document.getElementById("die6");
    tempd1.className="activeDice";
    tempd1.innerHTML="0";
    tempd2.className="activeDice";
    tempd2.innerHTML="0";
    tempd3.className="activeDice";
    tempd3.innerHTML="0";
    tempd4.className="activeDice";
    tempd4.innerHTML="0";
    tempd5.className="activeDice";
    tempd5.innerHTML="0";
    tempd6.className="activeDice";
    tempd6.innerHTML="0";
    totalScore = 0;
    nextBtn.disabled=true;
    rollBtn.disabled=false;
    activeTurnMsg.innerHTML="Current players turn: " + activePlayerName(player);
    roundScoreMsg.innerHTML="Current players score this round - " +0;


    ;
}

function rollDice() { 
    getVariables();
    var turnRolls = [];
    var turnScore = 0;
    for (let i = activeDice.length-1; i >= 0; i--) {
        d = Math.floor(Math.random() * 6) + 1;
        activeDice[i].innerHTML=d;
        if (d == 2 || d == 5){
            activeDice[i].className="inactiveDice";
        }
        turnRolls.push(d); 
    }
    if (turnRolls.includes(2)) {
        turnScore = 0;
    }
    else if (turnRolls.includes(5)){
        turnScore = 0;
    }
    else {
        for (let i = 0; i < turnRolls.length; i++) {
            turnScore += turnRolls[i];
        }
        totalScore += turnScore;
        turnScore = 0;
        roundScoreMsg.innerHTML="Current players score this round - " + totalScore;
    }
    if (activeDice.length == 0) {
        roundScoreMsg.innerHTML="Current players score this round - " + totalScore;
        activePlayerScore(player, totalScore);
        rollBtn.disabled=true;
        nextBtn.disabled=false;
        winner(player);
    }
    
}