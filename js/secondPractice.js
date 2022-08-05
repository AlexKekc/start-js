/* Замикання функцій */

// let val = 7;
// function createAdder() {
//   function addNumbers(a, b) {
//     let ret = a + b;
//     return ret;
//   }
//   return addNumbers;
// }
// let adder = createAdder();
// let sum = adder(val, 8);

// console.log('example of function returning a function: ', sum);

// function createCounter() {
//   let counter = 0;
//   const myFunction = function () {
//     counter = counter + 1;
//     return counter;
//   };
//   return myFunction;
// }
// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();
// console.log('example increment', c1, c2, c3);

// let c = 4;
// const addX = x => n => n + x;
// const addThree = addX(3);
// let d = addThree(c);
// console.log('example partial application', d);

/* Метод forEach */
// const users = [
//   { name: 'Alex', age: 30, hair: 'black' },
//   { name: 'Michael', age: 40, hair: 'white' },
//   { name: 'Den', age: 35, hair: 'blue' },
// ];

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]);
//   }
//   return array;
// }

// function getName({ name, age, hair }) {
//   console.log('name', name);
//   console.log('age', age);
//   console.log('hair', hair);
// }

// console.log(forEach(users, getName));

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3, 4, 5], [7, 8, 9, 4, 5, 10, 11]));

// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     }
//   });

//   return newArray;
//   // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// filter
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers);
// console.log(oddNumbers);

// flatMap, filter
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     genres: ['adventure', 'history'],
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     genres: ['fiction', 'mysticism'],
//   },
//   {
//     title: 'Redder Than Blood',
//     author: 'Tanith Lee',
//     genres: ['horror', 'mysticism', 'adventure'],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (genres, index, array) => array.indexOf(genres) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);

const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37,
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34,
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24,
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21,
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27,
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38,
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39,
  },
];

/* Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). 
У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений. */
// const getFriends = users =>
//   users
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends(users));

/* Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, 
значение свойства isActive которых true. */
// const getActiveUsers = users =>
//   users.filter(({ isActive }) => (isActive ? isActive : 0));

// console.log(getActiveUsers(users));

/* Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, 
значение свойства isActive которых false. */
// const getInactiveUsers = users =>
//   users.filter(({ isActive }) => (!isActive ? !isActive : 0));

// console.log(getInactiveUsers(users));

/* Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, 
и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив 
его время (свойство playtime) на количество игр (свойство gamesPlayed). */
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line
// const averagePlayTime = players.playtime / players.gamesPlayed;

// const totalAveragePlaytimePerGame = players.reduce((total, { playtime, gamesPlayed }) => {
//   return total + playtime / gamesPlayed;
// }, 0);

/* Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму 
всех средств (свойство balance) которые хранят пользователи из массива users. */
// const calculateTotalBalance = users =>
//   users.reduce((total, { balance }) => total + balance, 0);

// console.log(calculateTotalBalance(users));

/* Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее 
количество друзей (свойство friends) всех пользователей из массива users. */
// const getTotalFriendCount = users =>
//   users.reduce((total, { friends }) => total + friends.length, 0);

// console.log(getTotalFriendCount(users));

/* Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию 
копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors 
отсортированная в по алфавиту. */
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const alphabeticalAuthors = [...authors].sort((a, b) => a.localeCompare(b));

/* Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию.
 Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия 
 массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию. */
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

/* Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном 
алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная 
по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном 
алфавитном порядке. */
// const authors = [
//   'Tanith Lee',
//   'Bernard Cornwell',
//   'Robert Sheckley',
//   'Fyodor Dostoevsky',
//   'Howard Lovecraft',
// ];

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

/* Дополни код так, чтобы:
В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга. */
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   { title: 'Enemy of God', author: 'Bernard Cornwell', rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort(
//   (firstBook, secondBook) => firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort(
//   (firstBook, secondBook) => secondBook.rating - firstBook.rating
// );

/* Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей 
отсортированный по возрастанию их баланса (свойство balance). */
// const sortByAscendingBalance = users =>
//   [...users].sort(
//     (firstUser, secondUser) => firstUser.balance - secondUser.balance
//   );

// console.log(sortByAscendingBalance(users));

/* Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей
 отсортированный по убыванию количества их друзей (свойство friends). */
// const sortByDescendingFriendCount = users =>
//   [...users].sort(
//     (firstUser, secondUser) =>
//       secondUser.friends.length - firstUser.friends.length
//   );

// console.log(sortByDescendingFriendCount(users));

/* Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, 
рейтинг книг которых больше значения переменной MIN_BOOK_RATING. */
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
//   {
//     title: 'The Dreams in the Witch House',
//     author: 'Howard Lovecraft',
//     rating: 8.67,
//   },
// ];

// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//   .filter(book => book.rating > 8)
//   .sort((firstBook, secondBook) =>
//     firstBook.author.localeCompare(secondBook.author)
//   )
//   .map(book => book.author);

// console.log(names);

/* Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён 
пользователей отсортированный по возрастанию количества их друзей (свойство friends). */
// const getNamesSortedByFriendCount = users =>
//   [...users]
//     .sort(
//       (firstUser, secondUser) =>
//         firstUser.friends.length - secondUser.friends.length
//     )
//     .map(user => user.name);

// console.log(getNamesSortedByFriendCount(users));

/* Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей 
(свойство friends) отсортированный по алфавиту. */
// const getSortedFriends = users => {
//   return [...users]
//     .flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((firstFriend, secondFriend) =>
//       firstFriend.localeCompare(secondFriend)
//     );
// };
// console.log(getSortedFriends(users));

/* Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей 
(свойство balance), пол которых (свойство gender) совпадает со значением параметра gender. */
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((total, { balance }) => total + balance, 0);
// };

// console.log(getTotalBalanceByGender(users, 'female'));
// console.log(getTotalBalanceByGender(users, 'male'));

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor);
// console.log(parent.heritage);
// console.log(child.surname);

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   // Change code above this line
// }

// const audi = new Car('Audi', 'Q3', 36000);

// console.log(audi.changePrice(444));

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     const indexOfItemToRemove = this.items.indexOf(itemToRemove);
//     this.items.splice(1, 1);
//   }
// }
// const storage = new Storage(['Nanitoids', 'Prolonger', 'Antigravitator']);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem('Droid');
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem('Prolonger');
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

/* 
Виконай рефакторинг класу Storage, зробивши властивість items приватною.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, 
в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.
*/
// class Storage {
//   // Change code below this line
//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]

/* Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.
Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, 
в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй. 
*/
// class StringBuilder {
//   // Change code below this line
//   #value;

//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

/* 
Додай класу Car публічний статичний метод checkPrice (price), що приймає ціну автомобіля. 
Метод повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.
Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде 
використовуватися метод checkPrice(price). */
// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return price > Car.#MAX_PRICE
//     ? "Error! Price exceeds the maximum"
//     : "Success! Price is within acceptable limits";
//   }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

/* 
Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email 
і accessLevel. Додай класу Admin публічну властивість accessLevel, значення якої буде передаватися під час виклику 
конструктора.
Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу. 
*/
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line
//   constructor ({ email, accessLevel }) {
//     super(email);
//     this.email = email;
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

/* 
Додай класу Admin наступні властивості і методи.

Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
Значення за замовчуванням — це порожній масив.

Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення 
параметра email в масив, що зберігається у властивості blacklistedEmails.

Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти 
наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, 
і повертати true або false.

Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, 
в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй. 
*/
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted('mango@mail.com')); // false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
