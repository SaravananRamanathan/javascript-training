'use strict';
// console.log(document.querySelector('.message').textContent);

// //DOM == Docuemnt Object Model

// // WEB APIs(DOM, timers, fetch and so on) intreact with JS

// document.querySelector('.message').textContent = ' 🎉 Correct Numner';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//listining to event button click

//secret num:
const secretNumber = Math.trunc(Math.random() * 20);
document.querySelector('.number').textContent = secretNumber;

//score:
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ No Number.';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
        score -= 1;
        document.querySelector('.message').textContent = '📈 Too High!'
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game!'
        document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
        score -= 1;
        document.querySelector('.message').textContent = '📉 Too Low!'
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game!'
        document.querySelector('.score').textContent = 0;
    }
  }
});
