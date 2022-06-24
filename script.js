// A simple game of rock, paper, scissors

const options = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let choice = Math.floor(Math.random() * 4);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    // Initialize selections
    playerSelection = playerSelection[0].toUpperCase().concat("", playerSelection.slice(1).toLowerCase())
    computerSelection = computerSelection[0].toUpperCase().concat("", computerSelection.slice(1).toLowerCase())

    // Process
    let result;
    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                result = "It's a tie! You both chose Rock.";
            }
            else if (computerSelection === "Paper") {
                result = "You lose! Paper beats Rock.";
            }
            else {
                result = "You win! Rock beats Scissors";
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                result = "It's a tie! You both chose Paper.";
            }
            else if (computerSelection === "Rock") {
                result = "You win! Paper beats Rock.";
            }
            else {
                result = "You lose! Scissors beats Paper";
            }
            break;
        case "Scissors":
            if (computerSelection === "Scissors") {
                result = "It's a tie! You both chose Scissors.";
            }
            else if (computerSelection === "Paper") {
                result = "You win! Scissors beats Paper.";
            }
            else {
                result = "You lose! Rock beats Scissors";
            }
    }

    return result;
}