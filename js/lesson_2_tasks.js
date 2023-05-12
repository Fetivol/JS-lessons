// function checkAge(age) {
//   if (age >= 18) {
//     return 'You are an adult';
//   }
//   return 'You are a minor';
// }

// checkAge(20);
// checkAge(8);
// checkAge(14);
// checkAge(38);

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }
//   return 'Access denied, wrong password!';
// }

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length - 1];

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// let array = [1, 2, 3, 4, 5];
// function getExtremeElements(array) {
//   array.splice(1, array.length - 2);
//   return array;
// }
// console.log(getExtremeElements(array));

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);
//   return words;
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   let price = message.split(' ').length * pricePerWord;
//   return price;
// }

// function makeStringFromArray(array, delimiter) {
//   let string = array.join(delimiter);
//   return string;
// }

// function slugify(title) {
//   title = title.split(' ').join('-').toLowerCase();
//   return title;
// }
// console.log(slugify('Arrays for begginers'));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// function makeArray(firstArray, secondArray, maxLength) {
//   let array = firstArray.concat(secondArray);
//   array =
//     firstArray.concat(secondArray).length > maxLength
//       ? firstArray.concat(secondArray).splice(0, maxLength)
//       : firstArray.concat(secondArray);

//   return array;
// }

// function makeArray(firstArray, secondArray, maxLength) {
//   let array = firstArray.concat(secondArray);
//   array =
//     firstArray.concat(secondArray).length > maxLength
//       ? firstArray.concat(secondArray).slice(0, maxLength)
//       : firstArray.concat(secondArray);

//   return array;
// }

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// function calculateTotal(number) {
//   let a = 0;
//   for (let i = 0; i <= number; i += 1) {
//     a = a + i;
//   }
//   return a;
// }
// function calculateTotal(number) {
//   if (number == 1) return 1;
//   return number + calculateTotal(number - 1);
// }
// console.log(calculateTotal(3));

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }
// for (let fruit of fruits) {
//   console.log(fruit);
// }

// function calculateTotalPrice(order) {
//   let total = 0;
//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }
//   return total;
// }

// function findLongestWord(string) {
//   let array = string.split(' ');
//   let maxLength = array[0].length;
//   let longestWord = array[0];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     if (array[i].length > maxLength) {
//       longestWord = array[i];
//       maxLength = array[i].length;
//     }
//   }
//   return longestWord;
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));

// function findLongestWord(string) {
//   let array = string.split(' ');
//   maxLength = array[0].length;
//   let longestWord = array[0];
//   for (let i = 0; i < array.length - 1; i += 1) {
//     if (array[i].length > maxLength) {
//       longestWord = array[i];
//       maxLength = array[i].length;
//     }
//   }
//   return longestWord;
// }

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) {
//     numbers.push(i);
//   }
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 5));

// function filterArray(numbers, value) {
//   let array = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (value < numbers[i]) {
//       array.push(numbers[i]);
//     }
//   }
//   return array;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit);
// }

// function getCommonElements(array1, array2) {
//   let a = [];
//   if (array1.length >= array2.length) {
//     for (let i = 0; i < array1.length; i++) {
//       let b = array1[i];
//       if (array2.includes(b)) {
//         a.push(b);
//       }
//     }
//   } else {
//     for (let i = 0; i < array2.length; i++) {
//       let b = array1[i];
//       if (array2.includes(b)) {
//         a.push(b);
//       }
//     }
//   }

//   return a;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (let item of order) {
//     total += item;
//   }
//   // for (let i = 0; i < order.length; i += 1) {
//   //   total += order[i];
//   // }
//   return total;
// }

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   const number = numbers[i];}
//   for (let number of numbers) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// function getEvenNumbers(start, end) {
//   arr = [];
//   for (let i = start; i <= end; i++) {
//     if (!(i % 2)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return number;
//     }
//   }
// }

function includes(array, value) {
  let a = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    } else continue;
  }
  return a;
}
console.log(
  includes(['Earth', 'Mars', 'Venus', 'Jupiter', 'Saturn'], 'Jupiter')
);
console.log(includes([1, 2, 3, 4, 5], 3));
