

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';





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

/* testing function
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playGame(playerSelection, computerSelection));*/


rock.addEventListener('click', () => {
    return 'rock';
}





function game() {
        alert("Welcome!");
        alert("Let's play rock paper scissor!");
        let computerChoice = getComputerChoice();
        let choice =
        playGame(choice);
        alert(playGame(choice, getComputerChoice()));
}

game();
