// Прототип об'єкта

// Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.hasOwnProperty('heritage')); // true
// console.log(child.hasOwnProperty('name')); // true
// console.log(child.name); // "Jason"
// console.log(child.hasOwnProperty('age')); // true
// console.log(child.age); // 27
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"
// console.log(parent.isPrototypeOf(child)); // true

///////////////////////////////////

// Перевірка прототипу

// Якщо в коді потрібно перевірити, чи є об'єкт прототипом іншого об'єкта, використовується метод isPrototypeOf().

// objA.isPrototypeOf(objB)

// Метод перевіряє, чи є об'єкт objA прототипом для об’єкта objB
// Якщо так, повертає true, в іншому разі повертає false

// Розгляньмо приклад використання методу isPrototypeOf() для перевірки належності прототипу.

// const customer = {
//   username: 'Jacob',
// };

// const animal = {
//   legs: 4,
// };

// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // { name: "Mango", [[Prototype]]: animal }

// console.log(animal.isPrototypeOf(dog)); // true
// console.log(dog.isPrototypeOf(animal)); // false
// console.log(customer.isPrototypeOf(dog)); // false

//////////////////////////////////

// Власні і невласні властивості

// Використаємо вже знайомий нам приклад створення об'єкта dog з прототипом animal.

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(dog); // {name: "Mango", [[Prototype]]: animal}
// console.log(dog.name); // "Mango"
// console.log(dog.legs); // 4

// // Властивість name належить об'єкту dog, тому називається власною властивістю об'єкта dog.
// // Властивість legs не належить об'єкту dog. Це властивість його прототипу animal, тому вона називається невласною властивістю об'єкта dog.

// // Для того щоб перевірити, чи є в об'єкті власна властивість, використовується метод obj.hasOwnProperty(key). Цей метод перевіряє наявність власної властивості з ім'ям key і повертає true, якщо є, і false в іншому випадку.

// console.log(dog.hasOwnProperty('name')); // true
// console.log(dog.hasOwnProperty('legs')); // false

///////////////////////////////

// Перебір власних властивостей

// Оператор in, який використовується в циклі for...in, не розрізняє власні властивості об'єкта і його прототипу. Ця особливість заважає, оскільки зазвичай потрібно перебрати тільки власні властивості.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   console.log(key); // "name" "legs"
// }

// Для вибору саме власних властивостей під час перебору циклом for...in необхідно на кожній ітерації додати перевірку на власну властивість методом obj.hasOwnProperty(key).

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key); // "name"
//   }
// }

// Методи Object.keys(obj) і Object.values(obj) повертають масив тільки власних ключів або значень тільки власних властивостей об'єкта obj, без необхідності додаткових перевірок. Через це на практиці використовують саме їх із циклом for...of, замість for...in і hasOwnProperty.

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key); // "name"
// }

////////////////////////////////////////////

// Ланцюжки прототипів

// Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent, а той, своєю чергою, був прототипом для child.

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish',
// };

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(ancestor.isPrototypeOf('parent')); // false
// console.log(parent.isPrototypeOf('child')); // false
// console.log(ancestor.hasOwnProperty('surname')); // true
// console.log(ancestor.surname); // "Dawson"
// console.log(parent.hasOwnProperty('surname')); // true
// console.log(parent.surname); // "Moore"
// console.log(child.hasOwnProperty('surname')); // false
// console.log(child.surname); // "Moore"
// console.log(ancestor.hasOwnProperty('heritage')); // true
// console.log(ancestor.heritage); // "Irish"
// console.log(parent.hasOwnProperty('heritage')); // false
// console.log(parent.heritage); // "Irish"
// console.log(child.hasOwnProperty('heritage')); // false
// console.log(child.heritage); // "Irish"

////////////////////////////////////

// Кінець ланцюжка прототипів

// Давай створимо ланцюжок прототипів із двох об'єктів.

// const objB = {
//   b: 'objB prop',
// };

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA);

// Отже, objB — це прототип для об'єкта objA.

//  У властивості [[Prototype]] об'єкта objA лежить посилання на об'єкт objB. А що знаходиться у властивості [[Prototype]] об'єкта objB?

// Наприкінці ланцюжка прототипів завжди знаходиться посилання на базовий клас, від якого походить тип даних у ланцюжку. У нашому випадку objB — це об'єкт, тому в кінці ланцюжка буде посилання на клас Object.
