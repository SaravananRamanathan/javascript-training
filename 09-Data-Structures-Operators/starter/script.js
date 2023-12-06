'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Enchaned object ilterals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({
    starterIndex = 1,
    mainIndex: j = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[j]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // sets
// const ordersSet = new Set([
//   'pasta',
//   'pizza',
//   'pizza',
//   'Risotto',
//   'pasta',
//   'pizza',
// ]);
// console.log(ordersSet);

// console.log(new Set('srvnn'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('pizza'));
// console.log(ordersSet.has('bread'));
// ordersSet.add('Garlic Bread')
// ordersSet.add('Garlic Bread')
// ordersSet.delete('Risotto')
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// // 1.
// for (const [index, player] of game.scored.entries()) console.log(`Goal ${index+1}: ${player}`);
// // 2.
// let sum=0;
// Object.values(game.odds).forEach((value, index, array) => {sum += value; index==array.length-1 && console.log(sum/array.length)});
// // 3.
// Object.entries(game.odds).forEach(([key, value]) => console.log(`Odds of ${game[key] ? `Victory to ${game[key]}` : 'draw'}: ${value}`));
// // Bonus
// const scorers = {}
// game.scored.forEach((player, index, array) => {scorers[player] ??= 0, scorers[player]++, index==array.length-1 && console.log(scorers)});

// Property NAMES
// const properties = Object.keys(openingHours)
// console.log(properties);
// let openStr = `We are open on ${properties.length} days: `;

// for (const [index, day] of properties.entries()) {
//   openStr += `${day}${index<properties.length-1 ? ',' : ''} `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// console.log(...entries.entries());

// // looping over entires object
// for (const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(`We are open on the following ${Object.keys(openingHours).length} days:`);
// for (const [index, [key, {open, close}]] of Object.entries(openingHours).entries()) {
//   console.log(`${index+1}: On ${key} we open at ${open} and close at ${close}`);
// }

// console.log(restaurant.openingHours?.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
// for (const day of days) {
//   open = restaurant.openingHours[day]?.open ?? 'N/A';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0,1) ?? 'Method does not exists')
// console.log(restaurant.orderRisotto?.(0,1) ?? 'Method does not exists')

// // Arrays
// const users = [
//   {name: 'srvnn', email: 'asdf@example.com'},
//   {name: 'name2', email: 'name2@example.com'},
// ]
// console.log(users[0]?.name ?? `User not found.`);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const [index, item] of menu.entries()) {
//   console.log(`${index+1}: ${item}`);
// }

// console.log([...menu.entries()])

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
//   printGoals: function(...players) {
//     players.forEach(player => {
//       console.log(`${player}: ${players?.length}`)
//     })
//     console.log(`${players?.length} goals were scored`)
//   }
// };
///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

// console.log("Coding Challenge #1")
// //1.
// const [players1, players2] = game.players
// //2.
// const [gk, ...fieldPlayers] = players1
// //3.
// const allPlayers = [...players1, ...players2]
// //4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']
// //5.
// const {odds: {team1, team2, x: draw}} = game
// //6.
// game.printGoals(...game.scored);
// //7.
// team1<team2 && console.log('team1 likely to win');
// team2<team1 && console.log('team2 likely to win');

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazzza',
//   owner: 'Giovanni Rossi',
// };

// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10

// rest1.numGuests ??= 10
// rest2.numGuests ??= 10

// console.log(rest1.numGuests);
// console.log(rest2.numGuests);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// // SPREAD, because on right side of =
// const arr = [1, 2, ...[3,4]];
// console.log(arr);

// // REST, because on left side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5,];
// console.log(a, b, others);

// // Functions with REST
// const add = function(...arr) {
//   let sum = 0;
//   arr.forEach(x => {
//     sum += x
//   })
//   return sum
// }
// console.log(add(1,2,3));
// const nums = [20,30,50];
// console.log(add(...nums))

// restaurant.orderPizza('tomato', 'capcicum', 'sweet corn')

// const arr = [7, 8, 9];
// console.log(arr);

// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...arr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu]; // shallow copy

// // join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const ingredients = [
//   'a',
//   'b',
//   'c',
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients)

// // Objects
// const newRestaurant = {foundedIn: 1998, ...restaurant, founder: `lala land`}
// console.log(newRestaurant);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: `Via del sole, 21`,
//   starterIndex: 1,
// });

// // destructuring objects
// console.log(':testing');
// const { name, openingHours, categories } = restaurant;
// // console.log(categories);
// // console.log(typeof(categories))
// // console.log(restaurant.categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu);
// console.log(starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// destructuring arrays
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr)

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //swapping values using array destructuring
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function:
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, ,j] = nested;
// // console.log(i, j);
// const [i, ,[j, k]] = nested;
// console.log(i, j, k);

// //default values:
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);
