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
// The end

/* Вспомним про операцию a % b и выведем остаток от деления используя цикл. */
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
// The end

/* Используем цикл для вывода только нечетных чисел.
Для чётных i срабатывает continue, выполнение тела прекращается и управление передаётся на следующую итерацию. */
// const number = 10;
// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
// }
// The end

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
// The end

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
// The end

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
// The end

/* Напиши функцию getCommonElements(array1, array2) которая получает 
два массива произвольной длины в параметры array1 и array2, 
и возвращает новый массив, состоящий из тех элементов, которые 
присутствуют в обоих исходных массивах. */

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
// The end

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
// The end

/* Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
It should look like this:
Sam Harris => S.H
patrick feeney => P.F */

// Розбити стрінг на масив букв.
// Привести всі букви до великих
// Знайти індекс пробілу
// Додати в пустий новий масив перший елемент та елемент, який йде після пробілу
// Повернути цей масив, застосувавши джоін через крапку

// function abbrevName(name) {
//   const initialsArr = [];
//   const nameArr = name.toUpperCase().split('');
//   const gapIndex = nameArr.indexOf(' ');
//   initialsArr.unshift(nameArr[0], nameArr[gapIndex + 1]);
//   return initialsArr.join('.');
// }
// console.log(abbrevName('patrick feeney'));
// The end

/* Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, 
где имя свойства это имя сотрудника, а значение свойства это зарплата.
 Функция должна рассчитать общую сумму зарплат сотрудников и вернуть её.
  Используй переменную totalSalary для хранения общей суммы зарплаты.
 */

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   const salaryArray = Object.values(salaries);

//   for (const key of salaryArray) {
//     totalSalary += key;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ name: 5, age: 5, go: 5, op: 5 }));

/* Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название продукта. 
Функция ищет объект продукта с таким именем (свойство name) в массиве products и возвращает его цену (свойство price). 
Если продукт с таким названием не найден, функция должна возвращать null. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }

// console.log(getProductPrice('Fpfr'));

/* Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя (ключ) свойства.
Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products. 
Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив. */

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const resultArray = [];

//   for (const product of products) {
//     if (Object.keys(product).includes(propName)) {
//       resultArray.push(product[propName]);
//     }
//   }
//   return resultArray;
// }
// console.log(getAllPropValues('name'));

// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this lin
//     this.books.splice(this.books.indexOf(oldName), 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook('Haze', 'Sea'));

// БУЛО
/* const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName);

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Potion ${oldName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Change code above this line
}; */

// СТАЛО
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { potions } = this;
//     for (const potion of potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       const { name } = potions[i];
//       if (potionName === name) {
//         potions.splice(i, 1);
//         return potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     const { potions } = this;
//     for (let i = 0; i < potions.length; i += 1) {
//       if (oldName === potions[i].name) {
//         potions[i].name = newName;
//         return potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// function points(games) {
//   // your code here
//   let gamesScores = 0;
//   let total = 0;

//   for (let game of games) {
//     const clearScoresArray = [...game.replace(':', ' ')];
//     clearScoresArray.splice(1, 1);
//     if (clearScoresArray[0] > clearScoresArray[1]) {
//       total += 3;
//     } else if (clearScoresArray[0] < clearScoresArray[1]) {
//       total += 0;
//     } else if (clearScoresArray[0] === clearScoresArray[1]) {
//       total += 1;
//     }
//   }
//   return total;
// }

// points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']);
