/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
let currentCount = document.querySelector('.counter');
const counterButton = document.querySelector('.counter-button');
const timestamp = document.querySelector('.timestamp');
const timestampContainer = document.querySelector('.timestamp-container');
const reset = document.querySelector('.reset');
const log = document.querySelector('.log-of-people');
const resetLog = document.querySelector('.reset-log');

let newCount = 0;

counterButton.addEventListener('click', () => {
  newCount += 1;
  currentCount.textContent = newCount;
});

timestamp.addEventListener('click', () => {
  const newP = document.createElement('p');

  modifyTimestamp(newP);

  if (timestampContainer.childNodes.length === 3) {
    timestampContainer.lastChild.textContent =
      timestampContainer.lastChild.textContent.concat(` -\xA0`);
  }

  timestampContainer.appendChild(newP);

  if (timestampContainer.childNodes.length === 4) {
    timestampContainer.removeChild(timestampContainer.firstChild);
  }

  addToDetailedLog();

  currentCount.textContent = 0;
  newCount = 0;
});

function addToDetailedLog() {
  const todaysDate = new Date();
  const logP = document.createElement('p');

  logP.textContent = `${newCount} people entered the subway at ${todaysDate.toLocaleTimeString()} on ${todaysDate.toDateString()}`;

  log.appendChild(logP);
}

function modifyTimestamp(styleTimestamp) {
  if (timestampContainer.childNodes.length < 2) {
    styleTimestamp.textContent = `${newCount} -\xA0`;
    styleTimestamp.style.margin = '10px 0';
  }
  // code
  else {
    styleTimestamp.textContent = `${newCount}`;
    styleTimestamp.style.margin = '10px 0';
  }
}

reset.addEventListener('click', () => {
  timestampContainer.textContent = '';
});

resetLog.addEventListener('click', () => {
  log.textContent = '';
});

log.addEventListener('mouseover', () => {
  log.style.overflowY = 'scroll';
});

log.addEventListener('mouseout', () => {
  log.style.overflowY = 'hidden';
});
