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
