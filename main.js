// Exercise 44
// use the filter method to show all products except the
// product with id 3.
console.info("%cExercise 44", "color: black; background: pink")

const products = [
    {id: 1, name: 'Gold star', price: 20},
    {id: 2, name: 'Mushroom', price: 40},
    {id: 3, name: 'Green sheels', price: 30},
    {id: 4, name: 'Banana skin', price: 50},
    {id: 5, name: 'Red shells', price: 10},
];

let newProducts = products.filter(product => product.id !== 3);
console.log(newProducts)

// Exercise 45
// use the filter method to show all the products with a price minimum 20
// with a discount minimum 15. Show also the product "joker"
console.info("%cExercise 45", "color: black; background: pink")

const products2 = [
    {id: 1, name: 'Gold star', price: 20, discount: 30},
    {id: 2, name: 'Mushroom', price: 40, discount: 15},
    {id: 3, name: 'Green sheels', price: 30, discount: 0},
    {id: 4, name: 'Banana skin', price: 50, discount: 35},
    {id: 5, name: 'Red shells', price: 10, discount: 50},
    {id: 6, name: 'joker', price: 0, discount: 0},
];

let newProducts2 = products2.filter(product2 => product2.price > 20 && product2.discount < 15);
console.log(newProducts2)

// Exercise 46
// Use the map method to create a new array with index values: [2, 4, 6];
console.info("%cExercise 46", "color: black; background: pink")

const numbers = [1, 2, 3];

let newNumbers = numbers.map(number => number * 2);
console.log(newNumbers)

// Exercise 46.1
// Use the map method to create a new array with index values [10, 200, 3000]
console.info("%cExercise 46.1", "color: black; background: pink")

const numbers2 = [1, 2, 3];
let multiplyBy = [10, 100, 1000];

let newNumbers2 = numbers2.map((number2, x) => number2 * multiplyBy[x]);
console.log(newNumbers2)

// Exercise 47
// use the map method to create a new array with all the existing
// variables and add a new variable that calculates the prices after discount.
// You can name the variable priceAfterDiscount
console.info("%cExercise 47", "color: black; background: pink")

const products3 = [
    {id: 1, name: 'Gold star', price: 20, discount: 30},
    {id: 2, name: 'Mushroom', price: 40, discount: 15},
    {id: 3, name: 'Green sheels', price: 30, discount: 0},
    {id: 4, name: 'Banana skin', price: 50, discount: 35},
    {id: 5, name: 'Red shells', price: 10, discount: 50},
];

const priceAfterDiscount = products3.map(item => item.price - item.discount);
console.log(priceAfterDiscount)

// Exercise 48
// use the same array as in exercise 47.
// Use the reduce method to find the average price for all the products.
console.info("%cExercise 48", "color: black; background: pink")

/* const averagePrice = products3.reduce((item, i) => {
    return (item.price[i] / item.price[i].length) * item.price[i].length;
}) 
console.log(averagePrice) */

// Exercise 49
// const numbers = [11, 12, 223, 22, 1, 5, 100, 210];
// Use the find method and find the number > 220
console.info("%cExercise 49", "color: black; background: pink")

const numbers3 = [11, 12, 223, 22, 1, 5, 100, 210];

const found = numbers3.find(num3 => num3 > 220);
console.log(found)

// Exercise 50
// Use the array from exercise 49 and sort the array from smallest to biggest number.
// use the array from exercise 49 and sort the array from biggest to smallest number.
console.info("%cExercise 50", "color: black; background: pink")

const ascSort = numbers3.sort(function(a, b){return a-b});
console.log(ascSort)
const descSort = numbers3.sort(function(a, b){return b-a});
console.log(descSort)

// Exercise 51
// use chaining to chain the product array with. You need to decide yourself in which way you want to chain your methods.
console.info("%cExercise 51", "color: black; background: pink")

const arrChain = products3.sort(function(a, b){return b-a}).filter(prod3 => prod3.price >= 10).map(prod3 => prod3.name);
console.log(arrChain)