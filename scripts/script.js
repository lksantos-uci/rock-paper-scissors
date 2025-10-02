let humanScore = 0;
let computerScore = 0;


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
    let choice = prompt("Enter your move: ");
    while (!isValid(choice)) {
        choice = prompt("Try again. Only \"rock\", \"paper\" or \"scissors\" is accepted: ");
    }
    // Return their choice
    return choice;
}



