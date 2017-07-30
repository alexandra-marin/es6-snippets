/***************** Creation *****************/

var coffees = Array.of(100);
console.log(coffees.length); // 1
console.log(coffees); // [ 100 ]

var coffees = [1, 2, 3];
var order = Array.from(coffees, x => x * 5);
console.log(order); // [ 5, 10, 15 ]



/***************** This scope *****************/

var coffees = [1, 2, 3];
var order = Array.from(coffees, x => x * this.tax, {tax:2});
console.log(order); // [ NaN, NaN, NaN ]

var coffees = [1, 2, 3];
var order = Array.from(coffees, function(x) {
    return x * this.tax
}, { tax: 2 });
console.log(order); // [ 2, 4, 6 ]



/***************** Linq-ish *****************/

var coffees = ['latte', 'cappuccino'];
coffees.fill("black");
console.log(coffees); // [ 'black', 'black' ]

var coffees = ['latte', 'cappuccino', 'latte', 'cappuccino'];
coffees.fill("black", 1); // at index
console.log(coffees); // [ 'latte', 'black', 'black', 'black' ]

var coffees = ['latte', 'cappuccino', 'latte', 'cappuccino'];
coffees.fill("black", 1, 2); // start at index, stop at
console.log(coffees); // [ 'latte', 'black', 'latte', 'cappuccino' ]

var coffees = ['latte', 'cappuccino', 'latte', 'cappuccino'];
coffees.fill("black", -1); // woot, start at end
console.log(coffees); // [ 'latte', 'cappuccino', 'latte', 'black' ]

var coffees = [1, 2, 3, 4, 5];
console.log(coffees.find(x => x > 2)); //  3 

var coffees = [1, 2, 3 , 4, 5];
var index = coffees.findIndex(function(value) { return value == this }, 5);
console.log(index); // 4

var coffees = [1, 2, 3 , 4, 5];
coffees.copyWithin(0, 1); // replace elements starting from index 0 with elements starting at 1
console.log(coffees); //[ 2, 3, 4, 5, 5 ]

var coffees = [1, 2, 3 , 4, 5];
coffees.copyWithin(3, 0, 1); // stop after 1 element
console.log(coffees); //[ 1, 2, 3, 1, 5 ]


var coffees = ['latte', 'cappuccino'];
console.log(...coffees.entries()); // [ 0, 'latte' ] [ 1, 'cappuccino' ]
console.log(...coffees.keys()); // 0 1



/***************** Map / Weak map + Set / weak set *****************/

var latte = {name: 'latte'};
var cappuccino = {name: 'cappuccino'};

var coffees = new Map();
coffees.set(latte, '$3');
coffees.set(cappuccino, '$4');

console.log(...coffees.entries()); // [ { name: 'latte' }, '$3' ] [ { name: 'cappuccino' }, '$4' ]
console.log(coffees.get(latte)); // $3

var menu = new Map(coffees);
var menu = new Map([[latte, '$3'],[cappuccino, '$4']]);
menu.has(cappuccino); // true
menu.delete(cappuccino);
menu.clear();

var menu = new Set(['latte', 'cappuccino']);
menu.add('latte');
console.log(menu); // Set { { name: 'latte' }, { name: 'cappuccino' } }
console.log(...menu.entries()); // [ 'latte', 'latte' ] [ 'cappuccino', 'cappuccino' ]
                                //     ^key     ^val
console.log(...menu.keys()); // latte cappuccino
console.log(...menu.values()); // latte cappuccino



