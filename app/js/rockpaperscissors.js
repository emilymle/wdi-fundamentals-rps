////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.

    // player plays rock
    if (playerMove === "rock") {
      if (computerMove === "rock") {
        winner = 'tie';
      }
      if (computerMove === "paper") {
        winner = 'computer';
      }
      if (computerMove === "scissors") {
        winner = 'player';
      }
    }

    // player plays paper
    if (playerMove === "paper") {
      if (computerMove === "rock") {
        winner = 'player';
      }
      if (computerMove === "paper") {
        winner = 'tie';
      }
      if (computerMove === "scissors") {
        winner = 'computer';
      }
    }

    // player plays scissors
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        winner = 'computer';
      }
      if (computerMove === "paper") {
        winner = 'player';
      }
      if (computerMove === "scissors") {
        winner = 'tie';
      }
    }

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.

    while (playerWins + computerWins < 5) {
      if (winner === "player") {
        playerWins += 1;
      else if (winner == "computer") {
        computerWins += 1;
      }
    }

    return [playerWins, computerWins];
}
