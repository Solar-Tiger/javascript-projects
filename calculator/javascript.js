/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable radix */

const buttons = document.querySelectorAll('.calc-button');
const mathButton = document.querySelectorAll('.math-button');
const calcDisplay = document.querySelector('.calc-display');
const buttonEquals = document.querySelector('.equals');
const buttonClear = document.querySelector('.clear');

let symbol;
let displayNumber = [];
let inputOne;
let inputTwo;
let continuedOperations;
let currentNumber;
let total;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (calcDisplay.textContent === 'ERROR') {
      console.log("Can't continue");
    }

    // code
    else if (
      displayNumber.length > 12 - 1 ||
      parseInt(displayNumber.join('')) > 999999999999
    ) {
      calcDisplay.textContent = 'ERROR';
      symbol = null;
    }

    // code
    else {
      currentNumber = parseInt(button.textContent);
      displayNumber.push(currentNumber);
      calcDisplay.textContent = displayNumber.join('');
    }
  });
});

for (let i = 0; i < mathButton.length; i++) {
  mathButton[i].addEventListener('click', () => {
    // code
    if (calcDisplay.textContent === 'ERROR') {
      console.log("Can't continue");
    }

    // code
    else if (
      displayNumber.length > 12 ||
      parseInt(displayNumber.join('')) > 999999999999
    ) {
      calcDisplay.textContent = 'ERROR';
    }

    // code
    else if (displayNumber.length === 0 && inputOne !== parseInt(inputOne)) {
      console.log('Pick a number');
    }

    // code
    else if (displayNumber.length === 0) {
      symbol = mathButton[i].classList[1];
    }

    // code
    else {
      continuedOperations = parseInt(displayNumber.join(''));

      switch (symbol) {
        case 'add':
          inputOne += continuedOperations;
          break;
        case 'subtract':
          inputOne -= continuedOperations;
          break;
        case 'multiply':
          inputOne *= continuedOperations;
          break;
        case 'divide':
          inputOne /= continuedOperations;
          break;
        default:
          inputOne = parseInt(displayNumber.join(''));
      }

      calcDisplay.textContent = inputOne;
      symbol = mathButton[i].classList[1];
      displayNumber = [];
    }
  });
}

buttonEquals.addEventListener('click', () => {
  if (displayNumber.length < 1) {
    console.log('Pick a number');
  }

  // check if displayNumber has an item in it
  // if it has no items, DO NOT push
  // if it HAS items, DO push
  else if (displayNumber.length > 0 && inputOne === parseInt(inputOne)) {
    inputTwo = parseInt(displayNumber.join(''));

    // eslint-disable-next-line no-use-before-define
    equalTotal();

    if (total > 999999999999 || total.toString().length > 12) {
      console.log('ERROR');
      calcDisplay.textContent = 'ERROR';
      symbol = null;
      inputOne = null;
    }

    // code
    else {
      console.log(total);
      calcDisplay.textContent = total;
      displayNumber = [];
      symbol = null;
      inputOne = null;
    }
  }
});

function equalTotal() {
  switch (symbol) {
    case 'add':
      total = inputOne + inputTwo;
      break;
    case 'subtract':
      total = inputOne - inputTwo;
      break;
    case 'multiply':
      total = inputOne * inputTwo;
      break;
    case 'divide':
      total = inputOne / inputTwo;
      break;
    default:
      console.log('Nothing works');
  }
}

buttonClear.addEventListener('click', () => {
  symbol = null;
  displayNumber = [];
  inputOne = null;
  inputTwo = null;
  continuedOperations = null;
  currentNumber = null;
  total = null;
  calcDisplay.textContent = 0;
});

// Kyo
