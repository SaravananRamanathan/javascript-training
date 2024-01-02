'use strict';

// console.log("this is a test test");

// const high5 = function() {
//     console.log("👋")
// }

// document.body.addEventListener('click', high5);

// const greet = function(greeting) {
//     return function(name) {
//         console.log(`${greeting}, ${name}`);
//     }
// }

// const greetingHey = greet('Hey')
// greetingHey('srvnn')
// greetingHey('tada')

// greet('Hello')('testing')

// const greet2 = greeting => name => console.log(`${greeting}, ${name}`);

// greet2("bla")('lala land')

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     book(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.bookings.push({
//             flight: `${this.iataCode}${flightNum}`,
//             name,
//         })
//     },
// }

// lufthansa.book(239, 'srvnn');
// lufthansa.book(635, 'tada');
// console.log(lufthansa);

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book;

// // Does not work:
// // book(23, 'asdf')

// //call method:
// book.call(eurowings, 23, 'srvnn test')
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper')
// console.log(lufthansa);

// //apply method:
// const flightData = [583, 'Sheldon Cooper']
// book.apply(eurowings, flightData)
// console.log(eurowings);

// book.call(eurowings, ...flightData)

// //the bind methods:
// const bookEW = book.bind(eurowings);
// bookEW(23, 'bruh williams')
// console.log(eurowings);

// const bookEW23 = book.bind(eurowings, 12345);
// bookEW23('saravanan ramanathan')
// bookEW23('bla bla bla bla ')

// // With Event Listeners
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);
//     this.planes++;
//     console.log(this.planes);
// }
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1,200));

// const addVAT = addTax.bind(null, 0.23);
// // const addVAT = value => value + value * 0.23;
// console.log(addVAT(200));

// const vatTax = value => addTax(0.23, value)

// console.log("testing vat tax via function: ", vatTax(200));

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const DISPLAY_TYPE_STRING = 'string';
// const DISPLAY_TYPE_ARRAY = 'array';

// const isValidPollChoice = function (choice) {
//   if (choice != NaN) {
//     const startRange = parseInt(this.options[0][0]);
//     const maxRange = this.options.length + startRange;
//     return choice >= startRange && choice < maxRange;
//   }
//   return false;
// };

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let promtMessage = `${this.question}\n`;
//     promtMessage += this.options.join('\n');
//     promtMessage += '\n(Write option number)';
//     const choice = parseInt(prompt(promtMessage));

//     if (isValidPollChoice.call(poll, choice)) {
//       this.answers[choice]++;
//     } else {
//       alert(`Invalid choice, please try again...`);
//     }
//     this.displayResults(DISPLAY_TYPE_STRING);
//   },
//   displayResults(type = DISPLAY_TYPE_ARRAY) {
//     if (type === DISPLAY_TYPE_STRING) {
//       console.log(`Poll results are ${this.answers}`);
//       return;
//     }
//     console.log(this.answers);
//   },
// };

// document
//   .getElementsByClassName('poll')[0]
//   ?.addEventListener('click', poll.registerNewAnswer.bind(poll));

// const testData = {
//   answers: [],
//   setAnswers(data) {
//     this.answers = data;
//   },
// };

// testData.setAnswers([5, 2, 3]);
// poll.displayResults.call(testData, DISPLAY_TYPE_ARRAY);
// poll.displayResults.call(testData, DISPLAY_TYPE_STRING);

// testData.setAnswers([1, 5, 3, 9, 6, 1]);
// poll.displayResults.call(testData);
// poll.displayResults.call(testData);

// poll.displayResults.call({ answers: [5, 2, 3] }, DISPLAY_TYPE_STRING);

// const runOnce = function() {
//   console.log('This will never run again.');
// }

// runOnce();
// runOnce();

// (function() {
//   console.log('This will never run again.');
// })();

// (() => console.log('This will never run again.'))();

// Closure stuff

// const secureBooking = function() {
//   let passengerCount = 0;

//   return function() {
//     passengerCount++;
//     console.log(`New count: ${passengerCount} passengers`);
//   }
// }

// const booker = secureBooking();
// booker()
// booker()
// booker()
// console.dir(booker)

// let f;

// const g = function() {
//   const a = 23;
//   f = function () {
//     console.log(a*2);
//   }
// }
// console.log("testing closure.");
// g();
// f();

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  console.log('testing');
  document.querySelector('body').addEventListener('click',function(){
    header.style.color = header.style.color === 'blue' ? 'red' : 'blue';
  });
})();
