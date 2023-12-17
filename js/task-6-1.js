// Контекст виконання функції

// Ключове слово this

// Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до властивостей і методів об'єкта.

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes;
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza;

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Smoked")); // "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // "Sorry, there is no pizza named «Viennese»"

//////////////////////////////////////

// Глобальний контекст

// / function foo() {
//   console.log(this);
// }

// foo(); // window не в суворому режимі

////////////////////////

// "use strict";

// function foo() {
//   console.log(this);
// }

// foo(); // undefined в суворому режимі

/////////////////////////

// Контекст методу об'єкта

// const user = {
//   username: "Poly",
//   showThis() {
//     console.log(this);
//   }
// };

// user.showThis(); // {username: "Poly", showThis: ƒ}

///////////////////////////////

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// // Викликаємо у глобальному контексті
// showThis(); // "this in showThis: undefined"

// Потім присвоюємо цю функцію властивості об'єкта і викликаємо її як метод цього об'єкта.

// "use strict";

// function showThis() {
//   console.log("this in showThis: ", this);
// }

// const user = {
//   username: "Poly",
// };

// user.showContext = showThis;

// // Викликаємо в контексті об'єкта
// user.showContext(); // this in showThis: {username: "Poly", showContext: ƒ}

// // Викликаємо в глобальному контексті
// showThis(); // "this in showThis: undefined"

///////////////////////////////

// Метод call()

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// // За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.

// greet.call(mango, "Welcome"); // "Welcome, Mango, your room is 27!"
// greet.call(poly, "Aloha"); // "Aloha, Poly, your room is 191!"

//////////////////////////////////

// Метод apply()

// function greet(str) {
//   console.log(`${str}, ${this.username}, your room is ${this.room}!`);
// }

// const mango = {
//   username: "Mango",
// 	room: 27
// };

// const poly = {
//   username: "Poly",
// 	room: 191
// };

// greet.apply(mango, ["Welcome"]); // "Welcome, Mango, your room is 27!"
// greet.apply(poly, ["Aloha"]); // "Aloha, Poly, your room is 191!"

/////////////////////////////////

// Метод bind() і втрата контексту

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello;

// greet(); // TypeError: Cannot read properties of undefined (reading 'firstName')

// При спробі звернутися до властивості this.username під час виклику функції greet(), виникає помилка, оскільки undefined — це навіть не об'єкт

// Це можна виправити, прив'язавши контекст за допомогою методу bind.

// "use strict";

// const customer = {
//   username: "Jacob",
// 	sayHello() {
// 		console.log(`Hello, ${this.username}!`);
//   }
// };

// customer.sayHello(); // "Hello, Jacob!"

// const greet = customer.sayHello.bind(customer);

// greet(); // "Hello, Jacob!"

//////////////////////////////////

// Метод bind() і колбеки

// 'use strict';

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() — це виклик методу getFullName в глобальному контексті
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName); // TypeError: Cannot read properties of undefined (reading 'firstName')

// Щоб уникнути цієї втрати контексту, можна використати метод bind(). Замість передачі оригінального методу getFullName, ми передаємо його копію, до якої прив'язаний контекст об'єкта customer.

// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   const username = callback();
//   console.log(`Processing an application from ${username}`);
// }

// makeMessage(customer.getFullName.bind(customer)); // "Processing an application from Jacob Mercer"

////////////////////////////////////

// Стрілочні функції

// const hotel = {
//   username: 'Resort hotel',
//   showThis() {
//     const foo = () => {
//       console.log('this in foo: ', this);
//     };

//     foo();
//     console.log('this in showThis: ', this);
//   },
// };

// hotel.showThis();
// this in foo: {username: 'Resort hotel', showThis: ƒ}
// this in showThis: {username: 'Resort hotel',showThis: ƒ}

// На відміну від звичайних функцій, змінити значення this усередині стрілки після її оголошення неможливо. Це означає, що методи call, apply і bind не впливають на значення this у стрілках.

// const showThis = () => {
//   console.log('this in showThis: ', this);
// };

// showThis.call({ username: 'Mango' }); // this in showThis: window
// showThis.apply({ username: 'Mango' }); // this in showThis: window

// const boundShowThis = showThis.bind({ username: 'Mango' });
// boundShowThis(); // this in showThis: window

/////////////////////////////////////

// Алгоритм визначення this

// Ключове слово this — це одна з найзаплутаніших концепцій для новачка.

// Новачки часто підставляють this методом наукового тику доти, доки скрипт не спрацює.

// Але все стає значно простішим, коли є простий алгоритм визначення значення this.

// Крок 1

// Це стрілочна функція?

// Якщо відповідь Так, значення this те саме, що у this у зовнішній області видимості
// Якщо відповідь Ні, переходь на Крок 2

// Крок 2

// Чи використовуються методи call, apply або bind?

// Якщо відповідь Так, значення this — це той самий об’єкт, що передали при їх виклику
// Якщо відповідь Ні, переходь на Крок 3

// Крок 3

// Функція викликається як метод об’єкта object.method?

// Якщо відповідь Так, значення this — це об’єкт ліворуч від крапки
// Якщо відповідь Ні, переходь на Крок 4

// Крок 4

// Скрипт виконується в суворому режимі?

// Якщо відповідь Так, значення this — undefined
// Якщо відповідь Ні, значення this — window
