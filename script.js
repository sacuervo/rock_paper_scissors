// let playerScore = 0;
// let computerScore = 0;

// const getComputerChoice = () => {
//     const computerOptions = ['Rock', 'Paper', 'Scissors'];
//     const computerSelection = computerOptions[Math.floor(Math.random()*3)];
//     return computerSelection;
// }

// const getPlayerChoice = () =>{
//     const playerInput = prompt("Choose your draw: rock, paper, or scissors:");
//     const playerSelection = playerInput.slice(0,1).toUpperCase()+playerInput.slice(1, playerInput.length).toLowerCase();
//     return playerSelection;
// }

// const playRound = (playerSelection, callback) => {
//     let computerSelection = callback;
//     if (computerSelection === 'Rock' && playerSelection === 'Rock'){
//         console.log('Draw.')
//     } else if (computerSelection === 'Rock' && playerSelection === 'Paper'){
//         playerScore++;
//         console.log('You win! Paper beats rock.')
//     } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'){
//         computerScore++;
//         console.log('You lose. Rock beats scissors.')
//     } 
    
//     else if (computerSelection === 'Scissors' && playerSelection === 'Scissors'){
//         console.log('Draw.')
//     } else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
//         computerScore++;
//         console.log('You lose. Scissors beats paper.')
//     } else if (computerSelection === 'Scissors' && playerSelection === 'Rock'){
//         playerScore++;
//         console.log('You win! Rock beats scissors.')
//     } 
    
//     else if (computerSelection === 'Paper' && playerSelection === 'Paper'){
//         console.log('Draw.')
//     } else if (computerSelection === 'Paper' && playerSelection === 'Rock'){
//         computerScore++;
//         console.log('You lose. Paper beats rock.')
//     } else if (computerSelection === 'Paper' && playerSelection === 'Scissors'){
//         playerScore++;
//         console.log('You win! Scissors beats paper.')
//     }
// }

// const game = () => {
// let result = '';
// for (i=0; i<5; i++){
// let playerSelection = getPlayerChoice();
// let computerSelection = getComputerChoice();    
// playRound(playerSelection, computerSelection);
// }
// if (playerScore===computerScore){
// let playerSelection = getPlayerChoice();
// let computerSelection = getComputerChoice();    
// playRound(playerSelection, computerSelection);
// } else if (playerScore>computerScore){
//     result = `You win! Player: ${playerScore} / Computer: ${computerScore};`
// } else { 
//     result = `You lose. Player: ${playerScore} / Computer: ${computerScore};`
// }
// console.log(result);
// return result;
// }

// game();

// ------------------------------------------------------- //

// TOP: Revisiting Rock Paper Scissors

// 1. For now, remove the logic that plays exactly five rounds.

// 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

// 3. Add a div for displaying results and change all of your console.logs into DOM methods.

// 4. Display the running score, and announce a winner of the game once one player reaches 5 points.

// 5. You will likely have to refactor (rework/rewrite) your original code to make it work for this. That’s OK! Reworking old code is an important part of a programmer’s life.

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

// 2. Create three buttons, one for each selection. Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)

//_________________________________________________________//

// ORIGINAL CODE:

let playerScore = 0;
let computerScore = 0;
let gameCounter = 0;

const getComputerChoice = () => {
    const computerOptions = ['Rock', 'Paper', 'Scissors'];
    const computerSelection = computerOptions[Math.floor(Math.random()*3)];
    return computerSelection;
}

const playRound = (playerSelection, callback) => {
    let computerSelection = callback;
    if (computerSelection === 'Rock' && playerSelection === 'Rock'){
        gameCounter++;
        resultP.textContent = 'Draw.'
    } else if (computerSelection === 'Rock' && playerSelection === 'Paper'){
        playerScore++;
        gameCounter++;
        resultP.textContent = 'You win! Paper beats rock.'
    } else if (computerSelection === 'Rock' && playerSelection === 'Scissors'){
        computerScore++;
        gameCounter++;
        resultP.textContent = 'You lose. Rock beats scissors.'
    } 
    
    else if (computerSelection === 'Scissors' && playerSelection === 'Scissors'){
        resultP.textContent = 'Draw.'
        gameCounter++;
    } else if (computerSelection === 'Scissors' && playerSelection === 'Paper'){
        computerScore++;
        gameCounter++;
        resultP.textContent = 'You lose. Scissors beats paper.'
    } else if (computerSelection === 'Scissors' && playerSelection === 'Rock'){
        playerScore++;
        gameCounter++;
        resultP.textContent = 'You win! Rock beats scissors.'
    } 
    
    else if (computerSelection === 'Paper' && playerSelection === 'Paper'){
        gameCounter++;
        resultP.textContent = 'Draw.'
    } else if (computerSelection === 'Paper' && playerSelection === 'Rock'){
        gameCounter++;
        computerScore++;
        resultP.textContent = 'You lose. Paper beats rock.'
    } else if (computerSelection === 'Paper' && playerSelection === 'Scissors'){
        gameCounter++;
        playerScore++;
        resultP.textContent = 'You win! Scissors beats paper.'
    }
}

//_________________________________________________________//

// DOM CODE: 

const body = document.querySelector('body');

let appendElement = (element, target) =>{
    target.appendChild(element);
}

for (i=1; i<=2; i++){
    const div = document.createElement('div');
    div.className = `div-${i}`;
    appendElement(div,body);
}

document.querySelector('.div-1').id = 'btnDiv';
btnDiv = document.getElementById('btnDiv');

document.querySelector('.div-2').id = 'resultDiv';
resultDiv = document.getElementById('resultDiv');

const gameOptions = ['Rock', 'Paper', 'Scissors'];

for (i=0; i<gameOptions.length; i++){
    btn = document.createElement('button');
    btn.id = `btn-${gameOptions[i]}`;
    btn.textContent = `${gameOptions[i]}`;
    btn.style.marginBottom = '16px';
    appendElement(btn,btnDiv);
    br = document.createElement('br');
    appendElement(br,btnDiv);
};

const rock = document.querySelector('#btn-Rock');
const paper = document.querySelector('#btn-Paper');
const scissors = document.querySelector('#btn-Scissors');

rock.addEventListener('click', function (e){
    if(gameCounter === 5){
        return;
    }
    else {
        playRound('Rock', getComputerChoice());
        scoreP.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
        if (gameCounter === 5){
            resultP.style.display = 'none';
            playerScore>computerScore? winnerP.textContent = `Player wins!` : computerScore>playerScore ? winnerP.textContent = `Computer wins!` : winnerP.textContent = `It's a draw`;
        }
    }
})

paper.addEventListener('click', function (e){
    if(gameCounter === 5){
        return;
    }
    else {
    playRound('Paper', getComputerChoice());
    scoreP.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
    if (gameCounter === 5){
        resultP.style.display = 'none';
        playerScore>computerScore? winnerP.textContent = `Player wins!` : computerScore>playerScore ? winnerP.textContent = `Computer wins!` : winnerP.textContent = `It's a draw`;
    }
    }
});

scissors.addEventListener('click', function (e){
    if(gameCounter === 5){
        return;
    }
    else {
    playRound('Scissors', getComputerChoice());
    scoreP.textContent = `Player: ${playerScore} Computer: ${computerScore}`; 
    if (gameCounter === 5){
        resultP.style.display = 'none';
        playerScore>computerScore? winnerP.textContent = `Player wins!` : computerScore>playerScore ? winnerP.textContent = `Computer wins!` : winnerP.textContent = `It's a draw`;
    }
    }
});

// 3. Add a div for displaying results and change all of your console.logs into DOM methods.

let addElements = (n, myName, target) => {
    for (i=1; i<=n; i++){
        const addEl = document.createElement(`${myName}`);
        addEl.className = `${myName}-${i}`;
        appendElement(addEl,target);
    }
}

addElements(3, 'p', resultDiv);

document.querySelector('.p-1').className = 'resultP';
document.querySelector('.p-2').className = 'scoreP';
document.querySelector('.p-3').className = 'winnerP';

resultP = document.querySelector('.resultP');
scoreP = document.querySelector('.scoreP');
winnerP = document.querySelector('.winnerP');

// 4. Display the running score, and announce a winner of the game once one player reaches 5 points.