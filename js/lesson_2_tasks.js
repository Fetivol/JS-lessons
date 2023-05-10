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
