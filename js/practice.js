// let a = prompt('Давай число');
// a = Number(a);
// console.log(a);

// let b = prompt('Давай степінь');
// b = Number(b);
// console.log(b);

// const sum = a ** b;
// console.log(sum);

// const max = 50;
// const min = 40;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// let number = Number.parseInt('25.6px');
// console.log(number);

// let counter = 0;
// while (counter < 10) {
//   console.log('counter: ', counter);
//   counter += 1;
// }

// let clientCounter = 18;
// const maxClients = 25;
// while (clientCounter < maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }

// let password = '';
// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);
// console.log('Ввели пароль: ', password);

/* Вспомним про операцию a % b и выведем остаток от деления используя цикл. */
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

/* Используем цикл для вывода только нечетных чисел.
Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию. */
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }

/* Напиши скрипт, который подсчитывает сумму всех четных чисел,
которые входят в диапазон чисел в переменных от min до max. */
// const min = 0;
// const max = 10;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log('Четное число: ', i);
//   total += i;
// }

// console.log('Total: ', total);

/* Выводит самое длинное слово в строке */
// const string = 'Msdsdsdsdsasdy besty codefgrfr is not here';
// const newString = string.split(' ');
// let longWord = newString[newString.length - 1];

// for (let i = 0; i < newString.length; i += 1) {
//   if (newString[i].length > longWord.length) {
//     longWord = newString[i];
//   }
// }

// console.log(longWord);

/* Напиши функцию filterArray(numbers, value), 
которая принимает массив чисел (параметр numbers) и возвращает новый массив, 
в котором будут только те элементы массива numbers, 
которые больше чем значение параметра value (число). */

// Создать пустой новый массив
// Перебрать массив Numbers
// Сравнить елементы массива с параметром value
// Вернуть новый массив с елементами больше value

// const numbers = [45, 54, 1, 90, 98];
// const value = 38;
// const numbersNew = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > value) {
//     numbersNew.push(numbers[i]);
//   }
// }

// console.log(numbersNew);

/* Напиши функцию getCommonElements(array1, array2) которая получает 
два массива произвольной длины в параметры array1 и array2, 
и возвращает новый массив, состоящий из тех элементов, которые 
присутствуют в обоих исходных массивах. 

// 1. Перевірити чи має перший масив спільні елементи з другим масивом.
// 2. Запушити спільні елементи в новий масив
// 3. Створити новий масив

// function getCommonElements(array1, array2) {
// Моє рішення
//   const arrayNew = [];
//   if (array1.length > array2.length) {
//     for (let i = 0; i < array1.length; i += 1) {
//       if (array1.includes(array2[i])) {
//         arrayNew.push(array2[i]);
//       }
//     }
//   } else {
//     for (let i = 0; i < array2.length; i += 1) {
//       if (array2.includes(array1[i])) {
//         arrayNew.push(array1[i]);
//       }
//     }
//   }
//   return arrayNew;
// Рішення, яке підказали
//   const normArr = [];
//   for (number of array1) {
//     if (array2.includes(number)) {
//       normArr.push(number);
//     }
//   }
//   return normArr;
// }

// console.log(
//   getCommonElements([1, 2, 5, 6, 8, 9, 12, 19], [9, 5, 2, 19, 8, 1, 12])
// );
*/

/* Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end. 
Чётным считается число которое делится на 2 без остатка (10 % 2 === 0). */

// 1. Создать новый пустой масив
// 2. Перебрать значения от min до мах
// 3. Проверить условие деления без остатка
// 4. Залить значения без остатка в пустой масив

// function getEvenNumbers(start, end) {
//   // Change code below this line
//   const sumArray = [];

//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       sumArray.push(i);
//     }
//   }
//   return sumArray;
//   // Change code above this line
// }

// console.log(getEvenNumbers(0, 10));
