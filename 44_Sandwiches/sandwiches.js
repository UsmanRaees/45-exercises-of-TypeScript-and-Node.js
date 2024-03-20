"use strict";
function makeSandwich(item) {
    console.log('Making your sandwich with:');
    item.forEach(element => console.log(" " + element));
    console.log('Enjoy your sandwich !');
}
makeSandwich(['Ham', 'Cheese', 'luttuce']);
makeSandwich(['America', 'California']);
makeSandwich(['Peanut butter', 'Jelly']);
