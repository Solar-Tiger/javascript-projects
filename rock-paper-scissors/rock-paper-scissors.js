/* eslint-disable no-undef */
/* eslint-disable prefer-const */

// select each button and asign them all to the variable "rpsButtons"
const playerChoices = document.querySelector('.player-choices');

// asign both player and computer a score of 0
let playerScore = 0;
let computerScore = 0;

playerChoices.addEventListener('click', gameTime);

function gameTime(e) {
  let rpsButton = e.target.classList[0];

  if (rpsButton !== 'rps-btn') {
    return;
  }

  let playersChoice = e.target.classList[1];

  let roundVictor = decideRoundVictor(playersChoice, computersChoice());

  updateRPSScore(roundVictor);

  rpsChampion();
}

// get computers choice randomly between rock, paper and scissors and return that value
function computersChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  let computerChoice = Math.floor(Math.random() * computerChoices.length);

  return computerChoices[computerChoice];
}

// decide what value to return based on the outcome of what the player and computer picked
function decideRoundVictor(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie";
  }

  if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'Player wins!';
  }

  return 'Computer wins!';
}

// keep track of the score based on who won each round
function updateRPSScore(roundVictor) {
  if (roundVictor === 'Player wins!') {
    playerScore += 1;
  }

  // code
  else if (roundVictor === 'Computer wins!') {
    computerScore += 1;
  }
}

// once a score reaches 5, remove the event listener and end the game
function rpsChampion() {
  if (playerScore === 5) {
    console.log('Player is the champion!');

    playerChoices.removeEventListener('click', gameTime);

    return 'Player is the champion!';
  }

  // code
  if (computerScore === 5) {
    console.log('Computer is the champion!');

    playerChoices.removeEventListener('click', gameTime);

    return 'Computer is the champion!';
  }
}
