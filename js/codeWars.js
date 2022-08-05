/* Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). 
Strings passed in will consist of only letters and spaces. Spaces will be included only when 
more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test" */
// function spinWords(string) {
//   const newArray = [];
//   const stringToArray = string.split(' ');
//   stringToArray.forEach(string =>
//     string.length >= 5
//       ? newArray.push(string.split('').reverse().join(''))
//       : newArray.push(string)
//   );
//   return newArray.join(' ');
// }

// console.log(spinningWords('Welcome'));

/* Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing 
in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
16  -->  1 + 6 = 7
942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2 */
// function digital_root(n) {
//   let sumDigital = ('' + n)
//     .split('')
//     .map(Number)
//     .reduce((acc, element) => acc + element, 0);
//   if (sumDigital < 10) {
//     return sumDigital;
//   } else {
//     return digital_root(sumDigital);
//   }
// }
// console.log(digital_root(493193));

/* Приклад іншої людини */
// function digital_root(n) {
//   return ((n - 1) % 9) + 1;
// }
// console.log(digital_root(493193));

/* An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.
Example: (Input --> Output)
"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case) */
// function isIsogram(str) {
//   let arrayFromString = str.toLowerCase().split('');
//   return arrayFromString.every(
//     (char, index, array) => array.indexOf(char) === index
//   );
// }

// console.log(isIsogram('aba'));

/* 
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative 
persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number) */
function persistence(num) {
  let mulDigital = ('' + num)
    .split('')
    .map(Number);
  for (let i = 0; i < mulDigital.length; i += 1) {
    
  }
  if (mulDigital > 9) {
    return persistence(mulDigital);
  } else if (mulDigital < 9) {
    return 0;
  }
    
  }
}

console.log(persistence(39));
