/* eslint-disable */

// Destructuring
const car = { wheels: 4, color: 'red' };
let { wheels, color } = car;
// wheels is 4, color is 'red'

// Property Shorthand
let name = 'Cosmo';
let age = 2;
let dog = { name, age };
// dog is { name: 'Cosmo', age: 2 }

// Computed Property Names
let key = 'type';
let vehicle = { [key]: 'SUV' };
// vehicle is { type: 'SUV' }

// Spread Operator
const fruits = ['apple', 'orange', 'grape'];
const moreFruits = [...fruits, 'banana'];
// moreFruits is ['apple', 'orange', 'grape', 'banana']

// Rest Parameters - collects all the arguments into an array
function sumAll(...args) {
  return args.reduce((sum, num) => sum + num);
}
const total = sumAll(1, 2, 3, 4); // total is 10

// Ternary Operator
let score = 85;
let message = (score > 50) ? 'Victory!' : 'Try again.';
console.log(message); // 'Victory!'

// Logical AND (&&) Operator
let customerRegion = 'North America';
let cartContains = 'Special Item';
let isDiscounted = (customerRegion === 'North America' && cartContains === 'Special Item');
console.log(isDiscounted); // true

// Logical OR (||) Operator
let isSettingsClicked = true;
let isLevelUp = false;
let activateSound = (isSettingsClicked || isLevelUp);
console.log(activateSound); // true

// Logical Operators with Non-Primitive Values
let firstObject = {name: 'John'};
let secondObject = {name: 'Jane'};

let resultAnd = firstObject && secondObject;
console.log(resultAnd); // {name: 'Jane'}

let resultOr = firstObject || secondObject;
console.log(resultOr); // {name: 'John'}

// Using Logical AND to Prevent Errors
let text;
let messageLength = text && text.length;
console.log(messageLength); // undefined

// Setting Default Values with Logical OR
let currentUser = null;
let defaultUser = "Guest";
let name = currentUser || defaultUser;
console.log(name); // Guest

// Combining Logical AND and OR
let server;
let local = "Local User";
let user = server || local && local.toUpperCase();
console.log(user); // LOCAL USER

// forEach Loop
let questions = ["What's your name?", "What's your favorite game?", "Who's your favorite character?"];
questions.forEach(function(question) {
  console.log(question);
});
