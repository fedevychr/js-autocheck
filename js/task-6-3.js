// У чому різниця між хорошим і поганим кодом?

// Важливі також такі критерії:

// Надійність — навіть дуже об'ємне і складне ПЗ має працювати стабільно.
// Масштабованість — можливість легко адаптувати ПЗ до зростаючого навантаження.
// Адаптивність — продукт має бути гнучким, щоб швидко міняти функціонал/інтерфейс.
// Вартість — зниження витрат на розробку і збільшення ефективності важливі для успішної конкуренції на ринку.

////////////////////////////////

// Процедурне програмування

// Процедурне програмування — це парадигма програмування, у якій програми структуровані у вигляді набору функцій, які виконують певні дії над даними.

// Розгляньмо приклад процедурного коду, в якому є глобальні змінні і функція для підрахунку результату.

// const baseSalary = 30000;
// const overtime = 10;
// const rate = 20;

// const getWage = (baseSalary, overtime, rate) => {
//   return baseSalary + overtime * rate;
// };

// console.log(getWage(baseSalary, overtime, rate)); // 30200

//////////////////////////////////

// Об'єктно-орієнтоване програмування

// Об'єктно-орієнтоване програмування (ООП) — це парадигма програмування, в якій програми структуровані як сукупність об'єктів. Ці об’єкти представляють реальні або абстрактні сутності: користувач, магазин, автомобіль тощо. Кожен з об’єктів містить дані (властивості) і методи для взаємодії з ними.

// const employee = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 20,
//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   },
// };

// console.log(employee.getWage()); // 30200

////////////////////////////////

// Клас

// Клас — це спосіб опису сутності, що визначає структуру та поведінку об'єктів, а також правила для взаємодії з цією сутністю (контракт). Вони виступають в якості шаблонів для створення нових об'єктів.

// У нашому прикладі клас визначає сутність: автомобіль.

// Властивостями класу будуть запчастини: двигун, колеса, фари тощо.

// Методами класу будуть дії: відчинити двері, завести двигун, збільшити швидкість тощо.

///////////////////////////////

// Екземпляр класу

// - Клас — це якийсь абстрактний автомобіль на кресленні
// - Екземпляр (об'єкт) — це конкретний автомобіль, що стоїть у нас під вікнами

///////////////////////////////

// Інтерфейс класу

// Інтерфейс — це набір властивостей і методів класу, доступних для використання у роботі з екземпляром.

// По суті, інтерфейс описує клас, чітко визначаючи всі можливі дії над ним.

// Описуючи інтерфейс класу, дуже важливо витримати баланс між гнучкістю й простотою.

// Клас із простим інтерфейсом легко використовувати, але будуть існувати завдання, які за допомогою нього буде складно вирішити.

// Якщо інтерфейс буде гнучким, то, найімовірніше, він буде містити досить складні методи з великою кількістю параметрів. Такий інтерфейс дозволить виконувати дуже багато дій, але його використання буде пов'язане з труднощами й ризиком помилитися, переплутавши щось.