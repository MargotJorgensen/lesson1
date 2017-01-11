var fs = require('fs');

console.log('Food:');
fs.readFile('food.txt', 'utf8', function(err, food) {

    if (err) {
        console.log('Error: ' + err);
        return;
    }
console.log (food);
});


fs.readFile('drinks.txt', 'utf8', function(err, drinks){
    console.log('\nDRINKS:');
    console.log(drinks);

})