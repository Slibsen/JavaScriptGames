var activeDice = document.getElementsByClassName("activeDice");
var inactiveDice = document.getElementsByClassName("inactiveDice");
var status = document.getElementById("status");
var totalScore = 0

function clearDice() {
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
    status3.innerHTML=""
    status2.innerHTML="nyt spil startet";
}

function rollDice() { 
    var turnRolls = [];
    var turnScore = 0;
    var activeDice = document.getElementsByClassName("activeDice");
    var inactiveDice = document.getElementsByClassName("inactiveDice");
    var status = document.getElementById("status");
    var status2 = document.getElementById("status2");
    var status3 = document.getElementById("status3");
    status2.innerHTML=""
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
        status3.innerHTML=totalScore;
    }
    if (activeDice.length == 0) {
        status3.innerHTML='The turn has ended you got a total of' + ' ' + totalScore + ' ' + 'points';
        return totalScore;
    }
}

/*
        d1.rollDie();
        if (d1.value == 2 || d1.value == 5){
            d1.locked = true;
            die1.style.backgroundColor="red";
            
        }  
        else{die1.style.backgroundColor="lightgray"}
        turnRolls.push(d1.value);

        d2.rollDie();
        if (d2.value == 2 || d2.value == 5){
            d2.locked = true;
            die2.style.backgroundColor="red"
        }
        else{die2.style.backgroundColor="lightgray"}
        turnRolls.push(d2.value);

        d3.rollDie();
        if (d3.value == 2 || d3.value == 5){
            d3.locked = true;
            die3.style.backgroundColor="red"
        }
        else{die3.style.backgroundColor="lightgray"}
        turnRolls.push(d3.value);

        d4.rollDie();
        if (d4.value == 2 || d4.value == 5){
            d4.locked = true;
            die4.style.backgroundColor="red"
        }
        else{die4.style.backgroundColor="lightgray"}
        turnRolls.push(d4.value);

        d5.rollDie();
        if (d5.value == 2 || d5.value == 5){
            d5.locked = true;
            die5.style.backgroundColor="red"
        }
        else{die5.style.backgroundColor="lightgray"}
        turnRolls.push(d5.value);

        d6.rollDie();
        if (d6.value == 2 || d6.value == 5){
            d6.locked = true;
            die6.style.backgroundColor="red"
        }
        else{die6.style.backgroundColor="lightgray"}
        turnRolls.push(d6.value);

        if(turnRolls.includes(2)){
            turnRolls=[]
            turnSum = 0
            status3.innerHTML=turnSum;
        }
        else if (turnRolls.includes(5)){
            turnRolls=[]
            turnSum = 0
            status3.innerHTML=turnSum;
        }
        else {
            let turnSum = 0;

            for (let i = 0; i < turnRolls.length; i++) {
                turnSum += turnRolls[i];
            }
            totalSum += turnSum;
            turnSum = 0;
            status3.innerHTML=totalSum;
        }

        if (d1.locked==true && d2.locked==true && d3.locked==true && d4.locked==true && d5.locked==true && d6.locked==true){
            status.innerHTML = "slut"
        }
        else {
            status.innerHTML = "You rolled "+diceTotal+".";
            document.cookie
    }


  

    var diceTotal = d1.value + d2.value + d3.value + d4.value + d5.value + d6.value;

    die1.innerHTML = d1.value;
    die2.innerHTML = d2.value;
    die3.innerHTML = d3.value;
    die4.innerHTML = d4.value;
    die5.innerHTML = d5.value;
    die6.innerHTML = d6.value;
}



/*
    const diceList = [d1, d2, d3, d4, d5, d6];
    activeDice = [];
    prefix = "die";


    for (let i = 0; i < diceList.lenght+1; i++) {
        if (diceList[i].locked == false) {
            activeDice.push(diceList[i]);
            diceList[i].rollDie;
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;
        }
        else {
            diceList[i].rollDie();
            this["die"+i] = document.getElementById("die"+i);
            this["die"+i].innerHTML = diceList[i].value;}


    }
*/