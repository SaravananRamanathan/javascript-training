'use strict';

// function calcAge(birthYear) { //defined in a global scope
//     const age = 2023 - birthYear;

//     function printAge() {
//         const firstName = "testing name"
//         let output = `${firstName} you are ${age}, born in ${birthYear}`
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1986) {
//             // block scope
//             var millenial = true;
//             const str = `Oh, and you're a millenial, ${firstName}`
//             console.log(str)
//             function add(a, b){
//                 return a + b;
//             }

//             const output = 'NEW OUTPUT'
//         }
//         // console.log(str)
//         console.log(millenial)
//         // console.log(add(2,3));
//         console.log(output)
//     }
//     printAge();

//     return age;
// }

// const firstName = "srvnn"; //global variable
// calcAge(1981);

//hosting with varibales
// console.log(me)
// console.log(job)
// console.log(year)

// var me = 'srvnn'
// let job = 'dev'
// const year = 1996;

// //hosting with functions
// console.log(addDecl(2,3))
// console.log(addExpr(2,3))
// console.log(addArrow)
// console.log(addArrow(2,3))


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//     return a + b;
// }

// var addArrow = (a, b) => a + b;


// example

// console.log(numProducts)
// if (!numProducts) deleteShoopingCart();

// var numProducts = 10;

// function deleteShoopingCart() {
//     console.log('all products deleted!')
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`this is: `, this)

// const calcAge = function(birthYear) {
//     console.log(2023 - birthYear);
//     console.log(this);
// }
// calcAge(1996)

// const calcAgeArrow = birthYear => {
//     console.log(2023 - birthYear);
//     console.log(this);
// }
// calcAgeArrow(1996)

// const srvnn = {
//     year: 1996,
//     calcAge: function() {
//         console.log(this);
//     },
// };
// srvnn.calcAge();

// const matilda = {
//     year: 2000,
// }

// matilda.calcAge = srvnn.calcAge;

// matilda.calcAge()

// const f = srvnn.calcAge;
// f();

//arguments keyword
// const addExpr = function(a, b) {
//     console.log(arguments);
//     return a + b;
// };

// addExpr(2,5);
// addExpr(2,5,8,12);
// var addArrow = (a, b) => {
//     // console.log(arguments);
//     return a + b;
// }
// addArrow();


// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'srvnn',
//     age: 30,
// }
// const friend = me;
// friend.age = 27;

// console.log('friend', friend)
// console.log('me', me)

// premitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// const jessica = {
//     firstName: 'jessica',
//     lastName: 'Williams',
//     age: 27,
// }

// reference types
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('before marriage', jessica);
// console.log('after marriage', marriedJessica);

const jessica2 = {
    firstName: 'jessica',
    lastName: 'Williams',
    age: 27,
    family: ['alice', 'bob']
}
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('after marriage', jessicaCopy)