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