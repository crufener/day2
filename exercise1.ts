//use filter to return the names at even indexes
let jedi = ['Luke Skywalker', 'Darth Vader', 'Yoda', 'Darth Maul', 'Mace Wendu', 'Emperor Palpatine'];
function even(a,b){
    if(b%2 ===0 || b === 0){
        return a;
    }
}
var goodGuys = [];
goodGuys.push(jedi.filter(even,[]));
console.log(goodGuys);
//fat arrow and much more compact
let goodGuys1 = jedi.filter((item, idx, arr) => idx%2 === 0);
///******************************************************
//Create a product object named bread that includes a name field with the value "bread" and
//a price field with the value $2.33.
//******************************************************

let bread ={
	name: 'bread',
	price: '$2.33'
}

let product1 = {
	price: 3.25,
	calculateTax() {
		return this.price * .08;
	}
}
console.log("product1.calculateTax()\n" + product1.calculateTax());
