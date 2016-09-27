var jedi = ['Luke Skywalker', 'Darth Vader', 'Yoda', 'Darth Maul', 'Mace Wendu', 'Emperor Palpatine'];
function even(a, b) {
    if (b % 2 === 0 || b === 0) {
        return a;
    }
}
var goodGuys = [];
goodGuys.push(jedi.filter(even, []));
console.log(goodGuys);
var goodGuys1 = jedi.filter(function (item, idx, arr) { return idx % 2 === 0; });
var bread = {
    name: 'bread',
    price: '$2.33'
};
var product1 = {
    price: 3.25,
    calculateTax: function () {
        return this.price * .08;
    }
};
console.log("product1.calculateTax()\n" + product1.calculateTax());
var animals = ["lion", "tiger", "bear"];
var animals2 = {
    tiger: "tiger",
    bear: "big bear",
    puppy: "Very cute"
};
for (var key in animals) {
    console.log("(for..in loop with array) index: " + key + " value: " + animals[key]);
}
for (var key in animals2) {
    console.log("(for in loop with object)   index: " + key + " value: " + animals2[key]);
}
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var value = animals_1[_i];
    console.log("for..of loop with array:   " + value);
}
