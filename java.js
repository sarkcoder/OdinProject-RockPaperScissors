// Choices
const array = ["rock", "paper", "scissors"];

// Randomly generate Computer choice

function getComputerChoice(){
    const computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice
}

// Player choice

function getPlayerChoice(){
    let playerChoice = prompt("Please enter Rock, Paper or Scissors")
    return playerChoice
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection)
console.log(computerSelection)

// Check who won

function checkWinner(playerSelection, computerSelection){

if(playerSelection == computerSelection){
    return "Tie";
}
else if(playerSelection == "rock" && computerSelection == "scissors"){
    return "Player Wins";
}
else if(playerSelection == "paper" && computerSelection == "rock"){
    return "Player Wins";
}
else if(playerSelection == "scissors" && computerSelection == "paper"){
    return "Player Wins";
}
else {return "Computer Wins";
}

}

// Play a round

function playRound(playerSelection, computerSelection){
const result = checkWinner(playerSelection, computerSelection);
if(result == "Tie"){
    return "It's a Tie!"
}
else if(result == "Player Wins"){
    return `You win! ${playerSelection} beats ${computerSelection}`
}
else{
    return `You lose! ${computerSelection} beats ${playerSelection}`
}

}

function game(){
    console.log("Game Start")
    for (let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
// Debugging


game()
