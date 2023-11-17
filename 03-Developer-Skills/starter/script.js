// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// console.table(temperatures);

// function findMinAndMax(array) {
//   let min = array[0]
//   let max = min;
//   for (let i = 0; i < array.length; i++) {
//     const curItem = array[i]
//     if ( typeof curItem !== 'number' ) continue
//     if (curItem < min) {
//       min = array[i];
//     }
//     if (curItem > max) {
//       max = array[i];
//     }
//   }
//   return [min, max];
// }

// function calculateAmplitude(array) {
//   const [min, max] = findMinAndMax(array);
//   console.log(min, max);
//   return max - min;
// }

// console.log(calculateAmplitude(temperatures));

function printForecast(arr) {
  let message = ""
  for (let i = 0; i < arr.length; i++) {
    message += `... ${arr[i]}°C in ${i+1} days `
  }
  console.log(message);
}
const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4]
printForecast(testData1);
printForecast(testData2);
