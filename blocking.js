//link to filesystem module
var fs = require ('fs');

// print food
console.log('Food:');

var food = fs.readFileSync('food.txt', 'utf8');


console.log(food);

// drinks
console.log('\nDrinks:');

var drinks = fs.readFileSnyc('drinks.txt', 'utf8');
console.log(drinks);
