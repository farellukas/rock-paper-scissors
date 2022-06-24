// A simple game of rock, paper, scissors

const options = ['Rock', 'Paper', 'Scissors']

function computerPlay() {
    let choice = Math.floor(Math.random() * 4);
    return options[choice];
}