let humanScore = 0;
let computerScore = 0;
let round = 0;
const NUM_ROUNDS = 5;


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
    let target = event.target;
    let humanSelection = null;
    let computerSelection = null;
    humanSelection = target.id;
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}


function initGame() {
    let btns = document.querySelector('.rps-btns');
    btns.addEventListener('click', playGame);
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
    
    // Update round and points
    round += 1;
    roundLabels.forEach((label) => {
        label.textContent = round;
    });
}


// Start the game
initGame();