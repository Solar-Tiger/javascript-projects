/* eslint-disable no-plusplus */
/* eslint-disable no-else-return */
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const computerChoices = ['rock', 'paper', 'scissors'];

  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length * 1)];

  return computerChoice;
}

function getPlayerChoice() {
  let playerChoices;
  let playerChoice;

  do {
    // eslint-disable-next-line no-alert
    playerChoices = prompt('Enter rock, paper or scissors');

    if (playerChoices === null) {
      return 0;
    }

    playerChoice = playerChoices.toLowerCase();
  } while (
    playerChoice !== 'rock' &&
    playerChoice !== 'paper' &&
    playerChoice !== 'scissors'
  );

  return playerChoice;
}

const playerChoices = document.querySelectorAll('.rps-btn');

playerChoices.forEach((playerChoice) => {
  playerChoice.addEventListener('click', () => {
    console.log(playerChoice.textContent);
  });
});

function compareRockPaperScissorsChoices(computerChoice, playerChoice) {
  if (computerChoice === playerChoice) {
    return "It's a tie";
  }

  // If computer beats player with any choice, return computer wins
  else if (
    (computerChoice === 'rock' && playerChoice === 'scissors') ||
    (computerChoice === 'paper' && playerChoice === 'rock') ||
    (computerChoice === 'scissors' && playerChoice === 'paper')
  ) {
    computerScore += 1;
    console.log(
      `Computer chose ${computerChoice} and Player chose ${playerChoice}, Computer wins!`
    );
    console.log(
      `Computer score is now ${computerScore} and Player score is ${playerScore}`
    );
    return 'Computer wins';
  }

  // If the player decides to cancel, abort game
  else if (playerChoice === 0) {
    return 0;
  }

  // If the above are false, return player wins
  else {
    playerScore += 1;
    console.log(
      `Player chose ${playerChoice} and Computer chose ${computerChoice}, Player wins!`
    );
    console.log(
      `Player score is now ${playerScore} and Computer score is ${computerScore}`
    );
    return 'Player wins';
  }
}

function decideVictor() {
  // for (let i = 0; i < 5; i++) {
  //   const victor = compareRockPaperScissorsChoices(
  //     getComputerChoice(),
  //     getPlayerChoice()
  //   );

  const victor = '';

  // If player aborts game, return 0 and exit loop
  if (victor === 0) {
    console.log('Player aborted game');
    return 0;
  }

  // If game is a tie, minus 1 from i to keep game going till someone reaches 3 wins
  else if (victor === "It's a tie") {
    console.log('Tie');
    i--;
  }

  // If it's not a tie, check to see if player score is 3 and make them the victor if it is
  else if (playerScore === 3) {
    console.log('Player wins!');
    return 'Player Wins!';
  }

  // If it's not a tie AND the player score is not at 3, check the computer score and see if that's at 3. If it is, declare the computer as the victor
  else if (computerScore === 3) {
    console.log('Computer Wins!');
    return 'Computer wins!';
  }

  return 'Game Failed';
}

decideVictor();
