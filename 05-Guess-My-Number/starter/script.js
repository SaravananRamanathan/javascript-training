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
let secretNumber = Math.trunc(Math.random() * 20);
// document.querySelector('.number').textContent = secretNumber;

//score:
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // when no input
    document.querySelector('.message').textContent = '⛔️ No Number.';
  } else if (guess === secretNumber) {
    // when players wins
    document.querySelector('.message').textContent = '🎉 Correct number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess > secretNumber) {
    // when guess is too high
    if (score > 1) {
      score -= 1;
      document.querySelector('.message').textContent = '📈 Too High!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // when guess is too low
    if (score > 1) {
      score -= 1;
      document.querySelector('.message').textContent = '📉 Too Low!';
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

//reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = undefined;
  document.querySelector('body').style.removeProperty('background-color');
  document.querySelector('.number').style.removeProperty('width');
});
