// Оголошення класу

// Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// class Car {
//   // Тіло класу
// }

// console.log(new Car()); // {}

/////////////////////////////

// Конструктор класу

// Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля
// model - модель автомобіля
// price - ціна автомобіля
// Клас Car повинен створювати об'єкт з одноіменними властивостями brand, model і price, які отримують свої значення з аргументів, переданих при створенні нового екземпляра за допомогою оператора new.

// class Car {
//     constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//     }
// }

// console.log(new Car("Audi", "Q3", 36000)); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car("BMW", "X5", 58900)); // {brand: "BMW", model: "X5", price: 58900}
// console.log(new Car("Nissan","Murano", 31700)); // {brand: "Nissan", model: "Murano", price: 31700}

///////////////////////////////////

// Об'єкт параметрів

// Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand, model і price. Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // {brand: "Audi", model: "Q3", price: 36000}
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 })); // {brand: "BMW", model: "X5", price: 58900}
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // {brand: "Nissan", model: "Murano", price: 31700}

/////////////////////////

// Методи класу

// Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на значення параметра newPrice.

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//     }
    
//     getPrice() {
//         return this.price;
//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }
// }

///////////////////////////

// Прототип екземпляру

// Розглянемо для прикладу код класу User, який наразі має такий вигляд:

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// const mango = new User({
// 	name: "Mango",
// 	email: "mango@mail.com"
// });

// console.log(mango.getEmail());  // mango@mail.com

// Методи класу додаються до спеціального об'єкта, який зберігається у властивості prototype самого класу.

// class User {
//   constructor({ name, email }) {
//     this.name = name;
//     this.email = email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   changeEmail(newEmail) {
//     this.email = newEmail;
//   }
// }

// console.log(User.prototype); // {constructor: ƒ, getEmail: ƒ, changeEmail: ƒ}

//////////////////////////////

// Приватні властивості

// Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.

// class Car {
//     #brand;
//     model;
//     price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//     }
    
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // { model: "Q3", price: 36000 }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 })); // { model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // { model: "Murano", price: 31700 }

////////////////////////////////////

// Приватні методи

// Ти вже знаєш, як працюють публічні методи. Подивимось на це на прикладі класу User з приватною властивістю #email та публічною властивістю name.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

// // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

// // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Mango",
//   email: "mango@mail.com",
// });

// console.log(mango.getEmail()); // "mango@mail.com"
// mango.changeEmail("mango@supermail.com");
// console.log(mango.getEmail()); // "mango@supermail.com"

// Додаючи до назви методу на початку символ #, ми робимо його приватним.

// class User {
//   name;
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   // Публічний метод для отримання електронної пошти
//   getEmail() {
//     return this.#email;
//   }

//   // Публічний метод для зміни електронної пошти
//   changeEmail(newEmail) {
//     if (this.#validateEmail(newEmail)) {
//       this.#email = newEmail;
//     } else {
//       console.log('Invalid email format');
//     }
//   }

//   // Приватний метод для валідації електронної пошти
//   #validateEmail(email) {
//     return email.includes('@');
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // Спробуємо змінити електронну пошту
// mango.changeEmail('newmail.com'); // "Invalid email format"
// mango.changeEmail('new@mail.com');
// console.log(mango.getEmail()); // "new@mail.com"

// // Прямий виклик приватного методу ззовні призведе до помилки
// mango.#validateEmail('test'); // Помилка

// У цьому прикладі приватний метод #validateEmail забезпечує додаткову логіку для валідації електронної пошти.

// Цей метод не доступний ззовні класу, тому користувачі (або інші розробники) не можуть його викликати напряму. Вони можуть лише використовувати публічний метод changeEmail, який у свою чергу використовує приватний метод для валідації.

// Таким чином, ми інкапсулюємо внутрішню логіку й забезпечуємо безпеку та стабільність роботи класу.

///////////////////////////////////////

// Геттери і сеттери

// Виконай рефакторинг класу Car. Додатково до приватної властивості #brand зроби приватними властивості model і price. Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на геттери та сеттери brand, model і price, для взаємодії з приватними властивостями.

// class Car {
//     #brand;
//     #model;
//     #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

////////////////////////////////////////////

// Статичні властивості

// Виконай рефакторинг класу Car. Додай публічну статичну властивість maxPrice зі значенням число 50000 - максимально допустима ціна автомобіля.

// Додай сеттеру price перевірку значення параметра newPrice, що передається. Якщо воно більше за maxPrice, сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Під оголошенням класу ми додали ініціалізації екземплярів і виклики методів, щоб показати, як будуть використовуватися геттери і сеттери price.

// class Car {
//     #price;
//     static maxPrice = 50000;

//     constructor({ price, }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//     set price(newPrice) {
//         if (newPrice <= Car.maxPrice) {
//         this.#price = newPrice;
//     }
//   }
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

/////////////////////////////

// Статичні методи

// Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля. Метод повинен порівняти значення параметра price і приватної статичної властивості maxPrice.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде використовуватися метод checkPrice(price).

// class Car {
//     static #maxPrice = 50000;
//     static checkPrice(price) {
//         if (price > Car.#maxPrice) {
//             return "Error! Price exceeds the maximum";
//         } else {
//             return "Success! Price is within acceptable limits";
//         }
//     }

//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"

///////////////////////////////

// Наслідування класів

// У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість role (рівень доступу), значення якої — це об'єкт {BASIC: "basic", SUPERUSER: "superuser"}

// class User {
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
//     static role = { BASIC: "basic", SUPERUSER: "superuser" };
// }

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"

////////////////////////////////

// Конструктор дочірнього класу

// Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома властивостями email і access. Додай класу Admin публічну властивість access, значення якої буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

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
    
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
//     access;
    
//     constructor({ email, access }) {
//         super(email);
//         this.access = access;
//     }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// console.log(Admin.role.BASIC); // "basic"
// console.log(Admin.role.SUPERUSER); // "superuser"

////////////////////////////

// Методи дочірнього класу

// Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів. Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список. Метод повинен додавати значення параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку. Метод повинен перевіряти наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код перевірятимуть тести. Будь ласка, нічого там не змінюй.

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
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//     };
    

//   constructor({ email, access }) {
//     super(email);
//       this.access = access;
//       this.blacklistedEmails = [];
//     }

//     blacklist(email) {
//         this.blacklistedEmails.push(email);
//     }

//     isBlacklisted(email) {
//         return this.blacklistedEmails.includes(email);
//     }

// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true