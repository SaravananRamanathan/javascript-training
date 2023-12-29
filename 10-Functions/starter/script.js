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

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
};
