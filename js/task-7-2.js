// Доступ до властивостей

// Під час побудови DOM-дерева деякі стандартні HTML-атрибути стають властивостями елементів, тобто властивостями DOM-об’єктів.

// Розберемо приклад:

// Якщо в HTML є тег посилання,

// <a class="link" href="<https://goit.global>">GoIT</a>;

// то у JavaScript коді можна прочитати значення його атрибута href, отримавши посилання на елемент, тобто об'єкт, використовуючи querySelector, і звернутися до його властивості href

// const link = document.querySelector(".link");
// console.log(link.href); // "<https://goit.global>"

// Значення атрибутів можна змінювати, перевизначивши їм нове значення прямо з JavaScript коду, і під час виконання скрипта значення в HTML, тобто в DOM-дереві, зміниться.

// const link = document.querySelector(".link");
// console.log(link.href); // "<https://goit.global>"
// link.href = "[<https://neo.goit.global>](<https://neo.goit.global/>)";
// console.log(link.href); // "[<https://neo.goit.global>](<https://neo.goit.global/>)"

////////////////////////////

// Властивість textContent

// Властивість textContent повертає весь текстовий контент усередині елементів (власних і вкладених елементів).

/* <p class="text">Username: <span class=”sub-text”>Mango</span></p> */

// Для отримання текстового контенту елемента, як завжди, отримуємо посилання на елемент і звертаємося до властивості через крапку.

// const el = document.querySelector('.text');
// const nested = document.querySelector('.sub-text');

// console.log(el.textContent); // "Username: Mango"
// console.log(nested.textContent); // "Mango"

// Властивість textContent можна як читати, так і змінювати. Неважливо, що буде передано в textContent, дані завжди будуть записані як текст.

// const el = document.querySelector('.text');
// console.log(el.textContent); // "Username: Mango"
// el.textContent = 'Username: Poly';
// console.log(el.textContent); // "Username: Poly"

///////////////////////////////

// Властивість classList

// Для того щоб із JavaScript коду прочитати, додати, видалити або перевірити наявність CSS-класу в елемента, у властивості classList зберігається об'єкт із методами для роботи з CSS-класами елемента.

/* <a class="link is-active" href="<https://goit.global>">GoIT</a> */

// Властивість classList — це спеціальний тип об’єкта, який подібний до масиву. Зверни увагу, що він схожий, але не є нативним JavaScript-масивом, який ми вивчали раніше. Він зберігає в собі весь перелік класів DOM-елемента, властивість length і властивість value.

// властивість value містить точне значення атрибута class
// властивість length — кількість класів в елемента

// Але самі по собі value та length майже не використовуються, тому що для операцій з класами (додавання, видалення тощо) є спеціальні методи.

// const link = document.querySelector('.link');
// console.log(link.classList);
// ["link", "is-active", length: 2, value: "link is-active"]

// Метод classList.contains(className)

// Метод classList.contains(className) очікує аргументом рядок з іменем класу та повертає true або false, залежно від наявності класу className в елемента.

// Зверни увагу, що className передаємо як рядок без крапки (без селектора класу).

// const hasActiveClass = link.classList.contains('is-active');
// console.log(`hasActiveClass - ${hasActiveClass}`); // true
// const hasActiveClass = link.classList.contains('title');
// console.log(`hasActiveClass - ${hasActiveClass}`); // false

// Метод classList.add(className)

// Метод classList.add(className) очікує аргументом рядок з іменем класу та додає клас className до списку класів елемента.

// link.classList.add('special');
// console.log(link.classList);
// ["link", "is-active", "special", length: 3, value: "link is-active special"]

// Можна додавати більше одного класу, вказавши кілька аргументів через кому.

// Метод classList.remove(className)

// Метод classList.remove(className) очікує аргументом рядок з іменем класу та видаляє клас className зі списку класів елемента.

// link.classList.remove('is-active');
// console.log(link.classList);
// ["link", "special", length: 2, value: "link special"]

// Якщо спробувати видалити клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не видалиться.

// Метод classList.toggle(className)

// Метод classList.toggle(className) працює як перемикач:

// якщо клас className відсутній, то додає його в кінець списку класів
// і навпаки, якщо клас className присутній — видаляє його

// link.classList.toggle('is-active');
// console.log(link.classList);
// ["link", "special", "is-active", length: 3, value: "link special is-active"]

// Метод classList.replace(oldClassName, newClassName)

// Метод classList.replace(oldClassName, newClassName) очікує 2 аргументи рядка (перший — стара назва класу, другий — нова назва класу) та замінює існуючий клас oldClassName на вказаний newClassName.

// link.classList.replace('special', 'regular');
// console.log(link.classList);
// ["link", "regular", "is-active", length: 3, value: "link regular is-active"]

// Якщо спробувати поміняти клас, якого не існує на елементі, то це не викличе помилку. Просто нічого не поміняється.

////////////////////////////

// Властивість style

// Властивість style використовується для читання та зміни інлайнових стилів з DOM-елементів.

// Вона повертає об'єкт, який є екземпляром інтерфейсу CSSStyleDeclaration, і містить список лише всіх інлайнових властивостей елемента, а не увесь CSS.

// Під час запису властивості вони записуються в camelCase нотації, замість дефісів, які зазвичай використовуються в CSS, тобто background-color перетворюється на backgroundColor.

// const button = document.querySelector('.btn');

// button.style.backgroundColor = 'teal';
// button.style.fontSize = '24px';
// button.style.textAlign = 'center';

// console.log(button.style); // inline styles object

// На практиці стилізація елементів зазвичай виконується шляхом додавання CSS-класів.

// Властивість style використовується для додавання будь-яких динамічних стилів, наприклад, якщо посилання на фонове зображення невідомо заздалегідь і приходить з бекенда.

/////////////////////////////////

// Доступ до атрибутів

// DOM-елементам відповідають HTML-теги, які містять текстові атрибути.

// Доступ до атрибутів здійснюється за допомогою стандартних методів. Ці методи працюють зі значенням, яке знаходиться в HTML.

/* <img class="image" src="<https://picsum.photos/id/15/320/240>" alt="Rocks and waterfall" width="300" /> */

// Метод element.hasAttribute(nameAttribute)

// Метод element.hasAttribute(nameAttribute) приймає один аргумент — рядок nameAttribute, який містить ім’я атрибута для перевірки та повертає результат перевірки його наявності на елементі element — true чи false.

// const image = document.querySelector('.image');
// console.log(image.hasAttribute('src')); // true
// console.log(image.hasAttribute('href')); // false

// Метод element.getAttribute(nameAttribute)

// Метод element.getAttribute(nameAttribute) отримує один аргумент — рядок nameAttribute з іменем атрибута, і повертає значення цього атрибута для вказаного HTML-елемента element. Якщо атрибут не знайдено, метод повертає null.

// console.log(image.getAttribute('alt')); // "Rocks and waterfall"

// Метод element.setAttribute(nameAttribute, value)

// Метод element.setAttribute(nameAttribute, value) приймає два аргументи: рядок nameAttribute з іменем атрибута, який потрібно встановити або змінити, та value зі значенням, яке цьому атрибуту треба присвоїти. Метод встановлює або змінює значення зазначеного атрибута для вказаного HTML-елемента element.

// image.setAttribute('alt', 'Amazing nature');
// console.log(image.getAttribute('alt')); // Amazing nature

// Метод element.removeAttribute(nameAttribute)

// Метод element.removeAttribute(nameAttribute) приймає один аргумент — рядок nameAttribute з іменем атрибута, який потрібно видалити зі вказаного HTML-елемента element — та видаляє його. Якщо зазначеного атрибута немає на елементі, метод не викликає жодних помилок та не робить нічого.

// image.removeAttribute('alt');
// console.log(image.hasAttribute('alt')); // false

// Отримати доступ або змінити значення деяких атрибутів елемента можна безпосередньо, звернувшись до них як до властивостей DOM-об'єкта. Це буде менш затратно за кількістю коду.

// А ось видалити або перевірити наявність буде зручніше, використовуючи відповідний метод.

////////////////////////

// Власні атрибути

// Специфікацією HTML визначено вичерпний перелік атрибутів, які ми можемо додавати на ті чи інші теги (DOM-елементи) для того, щоб розмітка лишалась валідною, але інколи цього переліку недостатньо. Бувають випадки, коли нам потрібно зберегти певну інформацію на тезі, наприклад, вказати тип дії кнопки, щоб потім у певний момент часу мати можливість отримати до неї доступ. І тут на допомогу приходять власні data-атрибути.

// Власні атрибути дозволяють додати до тегу довільний атрибут і отримати його значення в JavaScript.

/* <button type="button" data-action="save">Save text</button>
<button type="button" data-action="close">Close editor</button> */

// Отримання значень

// Для отримання значення data-атрибута використовується властивість dataset, після якої через крапку пишеться ім'я атрибута без data-. Тобто data- відкидається, а інша частина імені записується як ім'я властивості об'єкта.

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action); // "save"

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action); // "close"

// Зміна значень

// Змінити значення існуючого data-атрибута або додати новий можна так само, як і будь-якої іншої властивості об'єкта в JavaScript. Щоб це зробити, треба отримати доступ до DOM-елемента, а потім змінити/задати значення властивості в об'єкті dataset.

// Змінюємо значення data-action для кнопки saveBtn
// saveBtn.dataset.action = 'update';

// // Додаємо новий data-атрибут data-role
// saveBtn.dataset.role = 'admin';

// // Перевіримо нові значення
// console.log(saveBtn.dataset.action); // "update"
// console.log(saveBtn.dataset.role); // "admin"

// Тепер data-action атрибут для saveBtn має значення "update" замість "save".

// Видалення атрибута

// Для видалення data-атрибута використовується оператор delete:

// Видаляємо data-атрибут data-action
// delete saveBtn.dataset.action;

// // Перевіримо видалення
// console.log(saveBtn.dataset.action); // undefined

// data-атрибути часто використовуються з кебаб-кейсом (kebab-case), де слова розділяються дефісами.

// Коли потрібно отримати доступ до цих data-атрибутів через властивість dataset, атрибути в кебаб-кейсі перетворюються в кемел-кейс (camelCase). Тобто дефіси видаляються, і наступна літера після кожного дефіса стає великою. Наприклад, data-user-role стає userRole у JavaScript:

// const userBlock = document.querySelector('div[data-user-role="admin"]');

// // // Додаємо новий data-атрибут data-user-status
// element.dataset.userStatus = 'online';

// console.log(element.dataset.userRole); // "admin"
// // console.log(element.dataset.userStatus); // "online"
