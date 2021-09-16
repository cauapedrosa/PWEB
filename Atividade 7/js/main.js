const playerScore = document.getElementsByClassName("playerScore");
const computerScore = document.getElementsByClassName("computerScore");
const pcount = document.getElementById("p-count");
const ccount = document.getElementById("c-count");
const rcount = document.getElementById("r-count");
const myLog = document.getElementById("atvLog");
let pScore = 0;
let cScore = 0;
let rCount = 0;

function game(myMove, aiMove) {
    rCount++;
    let res = playRound(myMove, aiMove);
    let out = "";

    if (res < 0) {
        alert("Something went wrong on playRound() function.")
    } else {
    } if (res == 1) {
        out += "You Win!";
        pScore++;
        pcount.innerHTML = pScore;
    } else if (res == 2) {
        out += "You Lose!";
        cScore++;
        ccount.innerHTML = cScore;
    } else {
        out += "It's a Tie!";
    }
    out += `<br>You chose ${myMove} and the AI chose ${aiMove}<br>`;
    rcount.innerHTML = rCount;
    myLog.innerHTML = out;
}


function playRound(userChoice, compChoice) {
    //Rock Choice
    if (userChoice == "rock" && compChoice == "scissors") {
        return 1;
    } else if (userChoice == "rock" && compChoice == "paper") {
        return 2;
    } else if (userChoice == "rock" && compChoice == "rock") {
        return 3;
    }
    //Paper Choice
    else if (userChoice == "paper" && compChoice == "rock") {
        return 1;
    } else if (userChoice == "paper" && compChoice == "scissors") {
        return 2;
    } else if (userChoice == "paper" && compChoice == "paper") {
        return 3;
    }
    //Scissors Choice
    else if (userChoice == "scissors" && compChoice == "paper") {
        return 1;
    } else if (userChoice == "scissors" && compChoice == "rock") {
        return 2;
    } else if (userChoice == "scissors" && compChoice == "scissors") {
        return 3;
    } else {
        return -1;
    }
}


function compChoice() {
    let compChoice = Math.random();
    if (compChoice < 0.34) {
        compChoice = "rock";
    } else if (compChoice <= 0.67) {
        compChoice = "paper";
    } else {
        compChoice = "scissors";
    }
    console.log("in compChoice()\nComputer just chose: " + compChoice);
    // alert(`The Computer chose ${compChoice}.`);
    return compChoice
}


function clickRock() {
    game('rock', compChoice());
}
function clickPaper() {
    game("paper", compChoice());
}
function clickScissors() {
    game("scissors", compChoice());
}
