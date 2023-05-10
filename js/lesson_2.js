// let string = ['a', 'b', 'c', 'd', 'e', 'f', 'j'];
// for (character of string) {
//   console.log(character);
//   if ((character = 'b')) {
//     console.log(character);
//     break;
//   }
// }

// console.log('2 task');
// for (character of string) {
//   if (character === 'b') {
//     continue;
//   }
//   console.log(character);
// }

// console.log('3 task');
// console.log(string);
// console.log(string.join(' '));
// let string2 = string.join('-');
// console.log(typeof string2);
// console.log(string2.split('-'));

// console.log('4 task');
// numbers = [];
// for (let i = 0; i <= 5; i++) {
//   numbers.push(i);
// }
// console.log(numbers.slice(1, 4));
// console.log(numbers.slice(-2));
// numbers.splice(6, 0, 6, 7, 8, 9);
// console.log(numbers);
// //delete 2,4,6,8... element of aarray
// for (let i = 0; i <= 5; i++) {
//   numbers.splice(i, 1);
// }
// console.log(numbers);

const a = [1, 2, 3, 4, 5];
for (let i = 0, n = 1; i <= a.length - 1; i++, n += 1) {
  console.log(`${n} ${a[i]} ${a.length}`);
}
