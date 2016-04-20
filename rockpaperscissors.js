////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return (move === 'scissors' || move === 'paper' || move === 'rock') ? move : getInput();
}

function getComputerMove(move) {
     return (move === 'scissors' || move === 'paper' || move === 'rock') ? move : randomPlay();
}


function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove){
        winner = "tie";
    }else if (computerMove === "rock"){
        if (playerMove === "scissors"){
            winner = "computer wins";
        }else{
            winner = "player wins";
        }
    }else if (computerMove === "paper"){
        if (playerMove === "rock"){
            winner = "computer wins";
        }else{
            winner = "player wins";
        }
    }else if (computerMove === "scissors"){
        if (playerMove === "paper"){
            winner = "computer wins";
        }else{
            winner = "player wins";
        }
    }
    return winner;
}

function rockPaperScissors(){
    console.log("Let's play Rock, Paper, Scissors");
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
    console.log("the player chose " + playerMove + "." + " the computer chose " + computerMove + ". " + winner +".")
    return winner;
}

function playToFive(){
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins !== 5 && computerWins !== 5){
        var winner = rockPaperScissors();
        if (winner === "computer wins"){
            computerWins++;
        }else if (winner === "player wins"){
            playerWins++;
        }
        console.log("the score is currently " + playerWins + " to " + computerWins);
    }
    
    if (playerWins > computerWins){
        console.log("congration u done it")
    }else{
        console.log("lol sucks")
    }
    
    return [playerWins, computerWins];
}
playToFive();
