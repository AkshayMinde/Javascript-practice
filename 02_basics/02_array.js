const marvelHeros = ["thor", "Ironman", "spiderman" ]
const dc = ["superman", "flash", "batman"]

// marvelHeros.push(dc)

console.log(marvelHeros);

// ! concat add both arrays and form new array
// const allHeros = marvelHeros.concat(dc);
// console.log(allHeros);

// ! spread operator
const allHeros = [...marvelHeros, ...dc]
console.log(allHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array= another_array.flat(Infinity)

console.log(real_another_array);

console.log(Array.isArray('akshay'));
console.log(Array.from('akshay'));
console.log(Array.from({name:'Akshay'})); //? interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,  score2, score3)); //? makes an array of variables defined