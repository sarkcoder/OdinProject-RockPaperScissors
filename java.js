// Declarations and connect elements to DOM

const array = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll('button');
const resulttext = document.getElementById('results')
const winnertext = document.getElementById('winner')
const scoretext = document.getElementById('scores')

//establish baseline scores

let scorePlayer = 0;
let scoreComputer = 0;


// Randomly generate Computer choice

function getComputerChoice(){
    const computerChoice = array[Math.floor(Math.random() * array.length)];
    return computerChoice
}

function playRound(playerSelection){

    let result = ""
    let computerSelection = getComputerChoice();
    
    if  (playerSelection == computerSelection){
        result = `Tie, you both chose ${playerSelection}`  
    }

    else if 
        ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")) {
        scorePlayer ++
        result = `You win! ${playerSelection} beats ${computerSelection}`
    }
    
    else{
        scoreComputer ++
        result = `You lose! ${computerSelection} beats ${playerSelection}`  
    }    
        // send results to DOM
        resulttext.textContent = result
        scoretext.textContent = `Your score : ${scorePlayer} Computer's score ${scoreComputer}`
        trackwinner()
            
            
}

// tract who is first to 5 points and send results to DOM
function trackwinner(){

    let winner = ""

    if (scorePlayer == 5){
        endGame()
        winner = "Player wins the match!"
    }
    else if (scoreComputer == 5){
        endGame()
        winner = "Computer wins the match!"
    }
    else {winner = "continue"}

    winnertext.textContent = winner
}

// Disable buttons if player or computer reaches 5 points
function endGame(){
        buttons.forEach(elem => {
        elem.disabled = true})
}

buttons.forEach(button =>{
        button.addEventListener('click', function(){
        playRound(button.id)
        //debugging 
        //console.log (`Player Score = ${scorePlayer}`)
        //console.log (`Computer Score = ${scoreComputer}`)
})
})