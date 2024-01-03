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


// Check who won

function checkWinner(playerSelection,computerSelection){

playerSelection = getPlayerChoice()
computerSelection = getComputerChoice()

console.log(playerSelection)
console.log(computerSelection)

if(playerSelection===computerSelection){
    return "It's a tie! You both picked the same choice";
}
else if(playerSelection==="rock"&&computerSelection==="scissors"){
    return "You win, Rock beats Scissors";
}
else if(playerSelection==="paper"&&computerSelection==="rock"){
    return "You win, Paper beats Rock";
}
else if(playerSelection==="scissors"&&computerSelection==="paper"){
    return "You win, Scissors beat Paper";
}
else {return "You lose - ";
}

}



// Debugging


console.log(checkWinner())
