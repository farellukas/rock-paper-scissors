// A simple game of rock, paper, scissors

const options = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
}

function playRound(playerSelection, computerSelection) {
    // Initialize selections
    playerSelection = playerSelection[0].toUpperCase().concat("", playerSelection.slice(1).toLowerCase())
    computerSelection = computerSelection[0].toUpperCase().concat("", computerSelection.slice(1).toLowerCase())

    // Process
    let winner = false;
    let tie = false;
    switch(playerSelection) {
        case "Rock":
            if (computerSelection === "Rock") {
                tie = true;
            }
            else if (computerSelection === "Scissors") {
                winner = true;
            }
            break;
        case "Paper":
            if (computerSelection === "Paper") {
                tie = true;
            }
            else if (computerSelection === "Rock") {
                winner = true;
            }
            break;
        case "Scissors":
            if (computerSelection === "Scissors") {
                tie = true;
            }
            else if (computerSelection === "Paper") {
                winner = true;
            }
    }

    let result;
    if (!tie) {
        if (winner) {
            result = `You win! ${playerSelection} beats ${computerSelection}.`;
        }
        else {
            result = `You lose! ${playerSelection} loses to ${computerSelection}.`;
        }
    }
    else {
        result = `It's a tie! You both chose ${playerSelection}.`;
    }

    return result;
}

function game() {
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i=0; i < 5; i++) {
        // console.log(`Player: ${playerCounter}\nComputer: ${computerCounter}`)

        let playerSelection = prompt("Enter you selection of Rock, Paper, or Scissors:");
        let computerSelection = computerPlay();
        
        roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);

        if (roundResult.includes("win")) {
            playerCounter++;
        }
        else if (roundResult.includes("lose")) {
            computerCounter++;
        }
    }

    console.log("Final results!");
    console.log(`Player: ${playerCounter}\nComputer: ${computerCounter}`);

    if (playerCounter > computerCounter) {
        console.log("You win!");
    }
    else if (playerCounter < computerCounter) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}