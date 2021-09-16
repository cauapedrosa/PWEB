const playerScore = document.getElementsByClassName("playerScore");
const computerScore = document.getElementsByClassName("computerScore");
const pcount = document.getElementById("p-count");
const ccount = document.getElementById("c-count");
let pScore=0;
let cScore=0;

function game(myMove, aiMove) {

    console.log(`pScore: ${pScore} | cScore: ${cScore}`);

    let res = playRound(myMove, aiMove);
    let out = "";
    if (res == 1) {
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
    out += `\nYou chose ${myMove} and the AI chose ${aiMove}`;
    alert(out);
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
    //paper Choice
    else if (userChoice == "paper" && compChoice == "rock") {
        return 1;
    } else if (userChoice == "paper" && compChoice == "scissors") {
        return 2;
    } else if (userChoice == "paper" && compChoice == "paper") {
        return 3;
    }
    //scissors Choice
    else if (userChoice == "scissors" && compChoice == "paper") {
        return 1;
    } else if (userChoice == "scissors" && compChoice == "rock") {
        return 2;
    } else if (userChoice == "scissors" && compChoice == "scissors") {
        return 3;
    } else {
        return "Something Went Wrong";
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