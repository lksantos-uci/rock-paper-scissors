let humanScore = 0;
let computerScore = 0;
const NUM_ROUNDS = 5;

// This function decides between rock, paper, or scissors randomly.
function getComputerChoice() {
    // Get the choice by using the Math.random
    let choice = Math.floor(Math.random() * 3);
    // Return choice as a string
    switch (choice) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}


// This function checks if the player entered a valid choice.
function isValid(choice) {
    return choice === "rock" || choice === "paper" || choice === "scissors";
}


// This function allows the player to decide their move.
function getHumanChoice() {
    // Prompt user for their answer until a valid choice is entered.
    let choice = prompt("Enter your move: ").toLowerCase();
    while (!isValid(choice)) {
        choice = prompt("Try again. Only \"rock\", \"paper\" or \"scissors\" is accepted: ").toLowerCase();
    }
    // Return their choice
    return choice;
}


// This function plays a single round of the game through.
function playRound(humanChoice, computerChoice) {
    // Case 1: Tie breaker
    if (humanChoice === computerChoice) {
        console.log(`It is a tie between ${humanChoice} and ${computerChoice}!`);
    }

    // Case 2: Player wins
    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
             (humanChoice === "paper" && computerChoice === "rock") ||
             (humanChoice === "scissors" && computerChoice === "paper")) {
        console.log(`Player wins! The player's ${humanChoice} has defeated the computer's ${computerChoice}.`);
        humanScore += 1;
    }

    // Case 3: The computer wins
    else {
        console.log(`Player loses...The player's ${humanChoice} was no match for the computer's ${computerChoice}.`);
        computerScore += 1;
    }
}


// This function plays through all rounds of the game.
function playGame() {
    // Play for however many rounds defined.
    for (let index = 0; index < NUM_ROUNDS; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}

// Start the game
playGame();