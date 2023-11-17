'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // when no input
    displayMessage('⛔️ No Number.')
  } else if (guess === secretNumber) {
    // when players wins
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess != secretNumber) {
        if (score > 1) {
            score -= 1;
            document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' :  '📉 Too Low!';
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lost the game!')
            document.querySelector('.score').textContent = 0;
        }
  }
});

//reset the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  displayMessage('Start guessing...')
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = undefined;
  document.querySelector('body').style.removeProperty('background-color');
  document.querySelector('.number').style.removeProperty('width');
});
