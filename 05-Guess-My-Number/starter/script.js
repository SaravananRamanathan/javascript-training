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
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = "⛔️ No Number.";
    }
})