

// const rockButton = document.getElementById("rock");
// const paperButton = document.querySelector("#paper");
// const scissorsButton = document.querySelector("#scissors");
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

//function that will return player choice
let p1 = document.createElement('p');
let p2 = document.createElement('p');
let result = '';
let playerScore = 0;
let computerScore = 0;
console.log( 'starting score:  ' + playerScore  + ' ' + computerScore);



function game(event) {
    // Exit, if not a button was clicked
    if (event.target.tagName !== "BUTTON" && event.target.tagName !== "INPUT") {
        return;
    }
    const playerSelection = event.target.id;
    p2.style.color = 'red';
    p2.textContent = `${result}`;
    document.querySelector('#results').appendChild(p2);
    playGame(playerSelection, getComputerChoice());
    //debug
    console.log(playerScore  + ' ' + computerScore);
    p1.textContent = `you: ${playerScore}   computer: ${computerScore}`;
    p1.style.cssText = "color: lightBlue";
    document.querySelector('#results').appendChild(p1);
    if (playerScore === 5) {
        computerScore = 0;
        playerScore = 0;
         alert('You win!');
    }
    if (computerScore === 5) {
        computerScore = 0;
        playerScore = 0;
        alert('You lose');
    disableButtons();
    }
}
document.getElementById('button-container').addEventListener("click", game);


function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}





// console.log(getComputerChoice()); test output in console

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        result = `it's a tie, both players picked ${playerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        result = `you lost, other player picked ${computerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        result = `you lost, other player picked ${computerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        result = `you lost, other player picked ${computerSelection} and you picked ${playerSelection}${playerSelection}`
    } else {
        playerScore++;
        return `you win, you picked ${playerSelection} and opponent picked ${computerSelection}`
    }
}






const buttons = document.querySelectorAll('input');






function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
//buttons
const btn2 = document.getElementById('paper');
btn2.innerText = 'Paper';


btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = 'lightPink';
});


const btn = document.getElementById('rock');
btn.innerText = 'Rock';


btn.addEventListener('click', () => {
    btn.style.backgroundColor = 'lightBlue';
});

const btn3 = document.getElementById('scissors');
btn3.innerText = 'Scissors';

btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'lightGreen';
})




/* testing function
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));*/








// function game() {
//         alert("Welcome!");
//         alert("Let's play rock paper scissor!");
//         let computerChoice = getComputerChoice();
//         let playerChoice = playerChoice();
//         playGame(playerChoice);
//         alert(playGame(playerChoice, getComputerChoice()));
// }






// game();
