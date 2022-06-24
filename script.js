// A simple game of rock, paper, scissors

const options = ['Rock', 'Paper', 'Scissors']

let gameOver = false;

const selections = document.querySelectorAll('.selection');
selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        if (!gameOver) {
            playRound(selection.dataset.choice, computerPlay());
        };
    });
});

function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    return options[choice];
};

function updateScore(winner) {
    const playerScore = document.querySelector('#playerScore');
    const computerScore = document.querySelector('#computerScore');

    let playerValue = playerScore.textContent.split(": ");
    let computerValue = computerScore.textContent.split(": ");

    if (winner === true) {
        playerValue[1]++;
    }
    else {
        computerValue[1]++;
    }

    playerScore.textContent = playerValue.join(": ");
    computerScore.textContent = computerValue.join(": ");

    if (playerValue[1] >= 5 || computerValue[1] >= 5) {
        gameOver = true;
        const gameOverLabel = document.createElement('h3');
        gameOverLabel.innerText = "Game Over";
        
        const scores = document.querySelector('.scores');
        scores.appendChild(gameOverLabel);
    };

    return {
        player: playerValue[1],
        computer: computerValue[1]
    };
};

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
        updateScore(winner);
    }
    else {
        result = `It's a tie! You both chose ${playerSelection}.`;
    }

    const results = document.querySelector(".results");
    const display = document.createElement('p');
    display.textContent = result;
    results.appendChild(display);

    return result;
}

// function game() {
//     let playerCounter = 0;
//     let computerCounter = 0;

//     for (let i=0; i < 5; i++) {
//         // console.log(`Player: ${playerCounter}\nComputer: ${computerCounter}`)

//         let playerSelection = prompt("Enter you selection of Rock, Paper, or Scissors:");
//         let computerSelection = computerPlay();
        
//         roundResult = playRound(playerSelection, computerSelection);
//         console.log(roundResult);

//         if (roundResult.includes("win")) {
//             playerCounter++;
//         }
//         else if (roundResult.includes("lose")) {
//             computerCounter++;
//         }
//     }

//     console.log("Final results!");
//     console.log(`Player: ${playerCounter}\nComputer: ${computerCounter}`);

//     if (playerCounter > computerCounter) {
//         console.log("You win!");
//     }
//     else if (playerCounter < computerCounter) {
//         console.log("You lose!");
//     }
//     else {
//         console.log("It's a tie!");
//     }
// }