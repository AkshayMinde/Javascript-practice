const score = 400
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 123.589
// console.log(otherNum.toPrecision(3));

const num = 1000000
// console.log(num.toLocaleString());

// ! Maths

// console.log(Math);
// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6)); //? round figure
// console.log(Math.ceil(4.2)); //? gives top round off value
// console.log(Math.floor(4.7)); //? gives bottom round off value

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10;
const max = 20;
// ! Important below (formula for random num in min and max range) 
console.log(Math.floor((Math.random()*(max-min + 1)) + min));
// ! Important above