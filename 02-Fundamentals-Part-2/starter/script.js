'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) {
//     hasDriversLicense = true;
// }

// if (hasDriversLicense) {
//     console.log('I can drive :D')
// }

// const interface = 'Audio';
// const private = 534;

// console.log(private)
 
// function logger() {
//     console.log('My name is srvnn')
// }

// // calling / running / incvoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice)

// const num = Number('23');

//function invoked before declaration.
// const age1 = calcAge1(1996);

// //Function Declaration
// function calcAge1(birthYear) {
//     return 2037 - birthYear;
// }

// console.log(age1)

// //Function Expression
// const calcAge2 = function (birthYear) {
//     return 2037 - birthYear;
// }
// const age2 = calcAge2(1996)
// console.log(age2)

// //Arrow Function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3  = calcAge3(1996)
// console.log(age3)

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement}`
// }

// console.log(yearUntilRetirement(1996, 'srvnn'));
// console.log(yearUntilRetirement(1980, 'bob'));


// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);

//     const juice = `Juice with ${applePieces} piece of apples and ${orangePieces}  piece of orange.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3))

// const calcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = (birthyear, firstName) => {
//     const age = calcAge(birthyear);
//     const retirement = 65 - age;
//     return retirement > 0 ? retirement :  NaN;
// }

// console.log(yearUntilRetirement(1950, 'bob'));
// console.log(yearUntilRetirement(1991, 'srvnn'));

// const friends = ['Michael', 'Steven', 'Peter']
// console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[1]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends)

// Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length-1]);

// console.log(age1, age2, age3)

// const ages = [
//     calcAge(years[0]),
//     calcAge(years[1]),
//     calcAge(years[years.length-1]),
// ]

// console.log(ages)


// const friends = ['one', 'two', 'three']
// const newLength = friends.push('four');
// console.log(friends)

// friends.unshift('zero')
// console.log(friends)

// friends[friends.length] = 'five'
// console.log(friends)

// //Remove elements
// const popped1 = friends.pop();
// console.log(popped1)
// const popped2 = friends.pop();
// console.log(popped2)
// console.log(friends)

// friends.shift() //remove first
// console.log(friends)

// console.log(friends.indexOf('two'))
// console.log(friends.indexOf('four'))

// friends.push(23);
// console.log(friends.includes('two'))
// console.log(friends.includes('four'))
// console.log(friends.includes(23))

// const searchFriend = 'two'
// if (friends.includes(searchFriend)) {
//     console.log(`you can a friend called ${searchFriend}.`)
// }

// const srvnnArray = [
//     'Srvnn',
//     'R',
//     2037 - 1991,
//     'dev',
//     ['one', 'two', 'three'],
// ];
// console.log(srvnnArray)

// const srvnn = {
//     firstName: 'Srvnn',
//     lastName: 'R',
//     age: 2037 - 1996,
//     job: 'dev',
//     friends: ['one', 'two', 'three']
// }
// console.log(srvnn)

// console.log(srvnn.firstName)
// console.log(srvnn['firstName'])

// const nameKey = 'Name'

// console.log(srvnn[`last${nameKey}`])
// console.log(srvnn[`first${nameKey}`])

// const intrestedIn = prompt('What do you want to know about srvnn? choose between firstName, lastName, age, job or friends')
// console.log(intrestedIn)

// srvnn[intrestedIn]? console.log(`srvnn ${intrestedIn} is ${srvnn[intrestedIn]}`) : console.log("wrong..")

// srvnn.location = 'India'
// srvnn['org'] = 'tivix'

// console.log(`${srvnn.firstName} has ${srvnn.friends.length} friends, and his best friend is called ${srvnn.friends[0]}`)

// const srvnn = {
//     firstName: 'Srvnn',
//     lastName: 'R',
//     birthYear: 1996,
//     job: 'dev',
//     friends: ['one', 'two', 'three'],
//     hasDriversLicense: true,
//     // calcAge: function(birthYear) {
//     //     return 2037 - birthYear;
//     // }
//     // calcAge: function() {
//     //     console.log(this)
//     //     return 2037 - this.birthYear;
//     // }
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age
//     },
//     getSummary: function() {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense?'a':'no'} driver's license`
//     },
// }

// console.log(srvnn.calcAge())

// console.log(srvnn.age)
// console.log(srvnn.age)
// console.log(srvnn.age)

// console.log(srvnn.getSummary())

for (let rep=1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`)
}
