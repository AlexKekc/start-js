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
