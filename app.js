

// const rockButton = document.getElementById("rock");
// const paperButton = document.querySelector("#paper");
// const scissorsButton = document.querySelector("#scissors");
const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

//function that will return player choice

function game(event) {
    // Exit, if not a button was clicked
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    playGame(playerSelection,computerSelection);
    alert(playGame(playerSelection, getComputerChoice()));
}

document.getElementById('button-container').addEventListener("click", game);

// rockButton.addEventListener("click", game);
// paperButton.addEventListener("click", game);
// scissorsButton.addEventListener("click", game);



function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// console.log(getComputerChoice()); test output in console

function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `it's a tie, both players picked ${playerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `you lost, other player picked ${computerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `you lost, other player picked ${computerSelection} and you picked ${playerSelection}`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `you lost, other player picked ${computerSelection} and you picked ${playerSelection}`
    } else {
        return `you win, you picked ${playerSelection} and opponent picked ${computerSelection}`
    }

}

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
