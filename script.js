let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random()*3)];
    return computerSelection;
}

const getPlayerChoice = () =>{
    const playerInput = prompt("Choose your draw: rock, paper, or scissors:");
    const playerSelection = playerInput.slice(0,1).toUpperCase()+playerInput.slice(1, playerInput.length).toLowerCase();
    return playerSelection;
}

const playRound = (playerSelection, computerSelection) => {
    if (computerSelection === 'Rock' && playerSelection === 'Rock'){
        console.log('Draw.')
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper'){
        playerScore++;
        console.log('You win! Paper beats rock.')
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'){
        computerScore++;
        console.log('You lose. Rock beats scissors.')
    } 
    
    else if (computerSelection === 'Scissors' && playerSelection === 'Scissors'){
        console.log('Draw.')
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
        computerScore++;
        console.log('You lose. Scissors beats paper.')
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock'){
        playerScore++;
        console.log('You win! Rock beats scissors.')
    } 
    
    else if (computerSelection === 'Paper' && playerSelection === 'Paper'){
        console.log('Draw.')
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock'){
        computerScore++;
        console.log('You lose. Paper beats rock.')
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors'){
        playerScore++;
        console.log('You win! Scissors beats paper.')
    }
}

const game = () => {
let result = '';
for (i=0; i<5; i++){
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();    
playRound(playerSelection, computerSelection);
}
if (playerScore===computerScore){
let playerSelection = getPlayerChoice();
let computerSelection = getComputerChoice();    
playRound(playerSelection, computerSelection);
} else if (playerScore>computerScore){
    result = `You win! Player: ${playerScore} / Computer: ${computerScore};`
} else { 
    result = `You lose. Player: ${playerScore} / Computer: ${computerScore};`
}
console.log(result);
return result;
}

game();