const string = 'whoever';
const arr = ['x', 'x', 'x', 'x', 'x', 'x', 'x'];
const newArr = string.split('');
const usedArr = [];
let hang = 0;

function compareLetter() {
  if (hang !== 8) {
    const letter = prompt('Enter letter');
    let miss = 0;

    for (let i = 0; i < usedArr.length; i++) {
      if (usedArr[i] === letter) {
        console.log('Already used, try again');
        return;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (newArr[i] === letter) {
        arr.splice(i, 1, letter);
      } else {
        miss++;
      }
    }

    if (miss === newArr.length) {
      hang++;
    }

    usedArr.push(letter);

    console.log(usedArr);
    console.log(arr);
    console.log(hang);
  } else {
    console.log('Game over');
    return 'Game over';
  }
}
