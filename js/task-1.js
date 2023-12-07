// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }

// // const result = makePizza();
// // const pointer = makePizza;

// console.log(makePizza());
// console.log(makePizza);

////////////////////////////////////////

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callbak) {
//   return callbak(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza));
// console.log(makeMessage("Ultracheese", deliverPizza));

////////////////////////////////////////////////////////

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}`);
// });

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}`);
// });

//////////////////////////////////////////////

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
    
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

/////////////////////////////////////////////////////

// function filterArray(numbers, value) {
//     const array = [];
//     numbers.forEach(function (number) {
//         if (number > value) {
//             array.push(number);
//         }
//     });
//     return array;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
