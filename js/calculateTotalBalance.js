// console.log(isEveryUserActive(users)); // false
///////////////////////////////////
// Метод some()
// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність хоча б одного активного користувача (властивість isActive) і повертала true або false.
// const isAnyUserActive = users => {
//   return users.some(user => user.isActive);
// };
// console.log(isAnyUserActive(users)); // true
////////////////////////////////////
// Метод reduce()
// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх, одним гравцем. У змінній players зберігається об'єкт, де ключ це ім'я гравця, а значення - його ігровий час. У змінній playtimes зберігається масив значень об'єкта players, тобто масив ігрового часу усіх гравців. Значенням змінної averagePlayTime буде середній час, проведений одним гравцем в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшов загальний ігровий час з масиву playtimes. Використовуй метод reduce().
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);
// const averagePlayTime = totalPlayTime / playtimes.length;
// console.log(totalPlayTime); // 2692
// console.log(averagePlayTime); // 673
/////////////////////////////////////
// Метод reduce() і масив об'єктів
// У змінній players зберігається масив об'єктів, кожен з яких має властивості name, playtime та gamesPlayed.
// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця, і отримати загальну суму цих значень часу у змінній totalAveragePlaytimePerGame. Розрахувати час для кожного з гравців можна, розділивши його час (властивість playtime) на кількість ігор (властивість gamesPlayed).
// Поради:
// Використовуй метод reduce() для ітерації по масиву players та обчислення загальної суми середнього часу на одну гру.
// Усередині колбек функції reduce(), поділи playtime гравця на gamesPlayed, щоб отримати середній час, витрачений на одну гру кожним гравцем.
// Накопичуй результат у змінній acc і повертай його в кінці кожної ітерації.
// Ініціалізуй параметр acc методу reduce() початковим значенням 0, щоб уникнути отримання NaN при виконанні обчислень.
// В результаті змінна totalAveragePlaytimePerGame міститиме загальну суму середнього часу на одну гру для всіх гравців.
// const players = [
//   { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//   { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//   { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Використовуємо reduce() для розрахунку загальної суми середнього часу на одну гру
// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   // Розрахунок середнього часу на одну гру для поточного гравця
//   const averagePlaytimePerGame = player.playtime / player.gamesPlayed;
//   // Додаємо середній час на одну гру до загальної суми
//   acc += averagePlaytimePerGame;
//   // Повертаємо актуальну суму для наступної ітерації
//   return acc;
// }, 0);
// console.log(totalAveragePlaytimePerGame); // Виведе загальну суму середнього часу на одну гру для всіх гравців 1023
//////////////////////////////
// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх коштів (властивість balance), які зберігають користувачі з масиву users.
const calculateTotalBalance = users.reduce((total, user) => {
  return total + user.balance;
}, 0);
