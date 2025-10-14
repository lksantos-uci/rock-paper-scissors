let humanScore = 0;
let computerScore = 0;
let round = 1;
let gameOver = false;


function getComputerChoice() {
    // Get the choice by using the Math.random
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}


function playGame(event) {
    if (!gameOver) {
        let target = event.target;
        let humanSelection = null;
        let computerSelection = null;
        humanSelection = target.id;
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


function reset(event) {
    const msg = document.querySelector("#message-box p");
    const roundLabels = document.querySelectorAll(".round-num");
    const humanLabel = document.querySelector("#player-score .score");
    const computerLabel = document.querySelector("#cpu-score .score");

    humanScore = computerScore = 0;
    round = 1;
    gameOver = false;
    humanLabel.textContent = computerLabel.textContent = 0;
    roundLabels.forEach((label) => label.textContent = 1);
    msg.textContent = "Pick your move.";
}


function initGame() {
    let options = document.querySelector('.rps-btns');
    let resetBtn = document.querySelector('#reset-btn p')
    options.addEventListener('click', playGame);
    resetBtn.addEventListener('click', reset);
}


function playRound(humanChoice, computerChoice) {
    const msg = document.querySelector("#message-box p");
    const roundLabels = document.querySelectorAll(".round-num");
    const humanLabel = document.querySelector("#player-score .score");
    const computerLabel = document.querySelector("#cpu-score .score");

    // Case 1: Tie breaker
    if (humanChoice === computerChoice) {
        msg.textContent = `It is a tie between ${humanChoice} and ${computerChoice}!`
    }
    
    // Case 2: Player wins
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")) {
        msg.textContent = `Player wins! The player's ${humanChoice} has defeated the computer's ${computerChoice}.`;
        humanScore += 1;
        humanLabel.textContent = humanScore;
    }
    
    // Case 3: The computer wins
    else {
        msg.textContent = `Player loses...The player's ${humanChoice} was no match for the computer's ${computerChoice}.`;
        computerScore += 1;
        computerLabel.textContent = computerScore;
    }
    
    // Declare winner.
    if ((humanScore === 5) ||
        (computerScore === 5)) {
        const winner = (humanScore === 5) ? "player" : "computer";
        msg.textContent = `The winner is the ${winner}!`;
        gameOver = true;
    }

    // Update round and points
    else {
        round += 1;
        roundLabels.forEach((label) => {
            label.textContent = round;
        });
    }
}


// Start the game
initGame();