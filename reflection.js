/***************** Reflect *****************/

class Coffee {}
// var coffee = Reflect.construct(Coffee);

class Coffee2 {
	constructor(price) {
		//console.log(new.target);
		this.price = 1;
	}
	buy() {
		console.log(this.price);
	}
}
//var coffee = Reflect.construct(Coffee2, {}, []);

//Reflect.apply(Coffee.prototype.buy, { price: 2 });



/***************** Proxy *****************/

var coffee = new Coffee2();
var proxy = new Proxy(coffee, () => {
	get: (target, prop, receiver) => {
		return "prop is:" + prop;
	};
});
console.log(proxy.price);
