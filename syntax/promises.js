/***************** ITERATORS *****************/
var coffees = ["latte", "cappuccino"];
var iterator = coffees[Symbol.iterator]();
console.log(iterator.next()); //{ value: 'latte', done: false }

let customIterator = {
	[Symbol.iterator]() {
		let idx = 0;
		return {
			next() {
				return {
					value: idx++,
					done: false
				};
			}
		};
	}
};
customIterator[Symbol.iterator]().next(); // 0

/***************** GENERATORS *****************/
function* generator1() {
	let idx = 0;
	while (idx < coffees.length) {
		yield coffees[idx++];
	}
}

var iterator = generator1();
console.log(iterator.next()); // { value: 'latte', done: false }
console.log(iterator.next()); // { value: 'cappuccino', done: false }
console.log(iterator.next()); // { value: undefined, done: true }

function* generator2() {
	let result = yield;
	console.log("result is " + result);
}

var iterator = generator2();
iterator.next(); // nada
iterator.next(1); // result is 1
console.log(iterator.next(1)); // { value: undefined, done: true }

function* generator3() {
	let result = [yield, yield, yield];
	console.log("result is " + result[0] + result[1] + result[2]);
}

var iterator = generator3();
iterator.next(); // nada
iterator.next(1); // nada
iterator.next(2); // nada
iterator.next(3); // result is 123

function* generator4() {
	let result = 42 * (yield);
	console.log("result is " + result);
}

var iterator = generator4();
iterator.next(); // nada
iterator.next(1); // result is 42 * 1 = 42

function* generator5() {
	yield* [1, 2, 3];
}

var iterator = generator5();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // undefined

//Terminates an iterator
console.log(iterator.return("foo")); // { value: 'foo', done: true }

/***************** PROMISES *****************/

function asyncFunc() {
	var p = new Promise((resolve, reject) => {});
	return p;
	//return p.resolve();
	//return p.reject();
}

asyncFunc().then(() => {}, () => {}).then(() => {}).catch(() => {});

//Promise.all([p1, p2]);
//Promise.race([p1, p2]);

/***************** PROMISES + ESNext *****************/

// function asyncMessage(mess, num) {
// 	return new Promise(function(succ, fail) {
// 		setTimeout(function() {
// 			console.log(mess + num);
// 			succ(num + 1);
// 		}, 500);
// 	});
// }

// async function main() {
//     var one = await asyncMessage("Task ", 0);
//     var two = await asyncMessage("Task ", one);
//     var three = await asyncMessage("Task ", two);
// }
