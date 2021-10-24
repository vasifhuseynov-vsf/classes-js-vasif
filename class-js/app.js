// *** CALCULATE THE TOTAL PROFIT ***


// class Product {

//     _costPrice;
//     _sellPrice;
//     _inventory;

//     constructor(costPrice, sellPrice, inventory) {
//         this._costPrice = costPrice;
//         this._sellPrice = sellPrice;
//         this._inventory = inventory;
//     }


//     calcProfit() {
//         console.log(Math.round((this._sellPrice - this._costPrice) * this._inventory));
//     }
// }

// let product = new Product(15.2, 17.1, 11);

// product.calcProfit();


// ******************************************************************************************



// *** IsInRange ***


// class Range {

//     _min = 0;
//     _max = 10;

//     constructor(num) {
//         this.num = num;
//     }

//     isInRange() {
//         if (this.num >= this._min && this.num <= this._max) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }

// let range = new Range(15);

// console.log(range.isInRange());


// ******************************************************************************************



// *** C I T Y    F A C T S ***


// class City {

//     _name;
//     _population;
//     _continent;

//     constructor(name, population, continent) {
//         this._name = name;
//         this._population = population;
//         this._continent = continent;
//     }

//     showCityFacts() {
//         console.log(`${this._name} has a population of ${this._population} and is situated in ${this._continent}`);
//     }
// }

// const city1 = new City('London', 9.5e6, 'Europe');

// city1.showCityFacts();


// ******************************************************************************************



// *** C I R C L E ***


// class Circle {

//     _name;
//     _pi = Math.PI;

//     constructor(name) {
//         this._name = name;
//     }

//     calcArea = radius => console.log(this._pi * Math.pow(radius, 2));

//     calcLength = radius => console.log(2 * this._pi * radius);
// }


// let circle = new Circle('my-circle');

// circle.calcArea(3);

// circle.calcLength(2);