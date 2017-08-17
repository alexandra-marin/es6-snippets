const R = require("rambda");

const coffees = ["latte", "cappuccino", "black", "chocolate"];
const orders = [
	{ name: "latte", price: 2, addIce: true },
	{ name: "cappuccino", price: 3, addIce: false }
];

var answer = R.drop(2, coffees);
console.log(answer); // [ 'black', 'chocolate' ]

var answer = R.dropLast(2, coffees);
console.log(answer); // [ 'latte', 'cappuccino' ]

var answer = coffees.some(x => x === "latte");
console.log(answer); // true

// var answer = R.none((x) => {x === 'chai'}, coffees)
// console.log(answer); //

var answer = R.pluck("price", orders);
console.log(answer); // [ 2, 3 ]

//var answer = R.reject((x) => {return x === 'latte'}, coffees);
//console.log(answer); //

var answer = R.omit(["price"], orders);
console.log(answer); // { '0': { name: 'latte', price: 2, addIce: true }, '1': { name: 'cappuccino', price: 3, addIce: false } }

var answer = R.pick(["price"], orders);
console.log(answer); // {}

/**********************************************************/

const withIce = drink => drink.addIce;
const byPrice = price => {
	return drink => drink.price === price;
};
const byPrice2 = R.curry((price, drink) => {
	return price === drink.price;
});

var answer = orders.filter(withIce);
console.log(answer); // [ { name: 'latte', price: 2, addIce: true } ]

var answer = orders.filter(byPrice(3));
console.log(answer); // [ { name: 'cappuccino', price: 3, addIce: false } ]

var answer = byPrice(3)(orders[1]);
console.log(answer); // true

var answer = orders.filter(byPrice2(3));
console.log(answer); //[ { name: 'cappuccino', price: 3, addIce: false } ]

// var pickIndexes = R.compose(R.values, R.pickAll);
// pickIndexes([0, 2], ['a', 'b', 'c']); // => ['a', 'c']

