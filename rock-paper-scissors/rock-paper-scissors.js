/* eslint-disable prefer-const */

// select each button and asign them all to the variable "rpsButtons"
const rpsButtons = document.querySelectorAll('.rps-btn');

// asign both player and computer a score of 0
let playerScore = 0;
let computerScore = 0;

rpsButtons.forEach((rpsButton) => {
  rpsButton.addEventListener('click', () => {
    let rpsRoundVictor = decideRoundVictor(
      rpsButton.textContent.toLowerCase(),
      computersChoice()
    );

    updateRPSScore(rpsRoundVictor);

    console.log(playerScore, computerScore);
  });
});

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

// keep track of the score based on who won
function updateRPSScore(roundVictor) {
  if (roundVictor === 'Player wins!') {
    playerScore += 1;
  } else if (roundVictor === 'Computer wins!') {
    computerScore += 1;
  }
}
