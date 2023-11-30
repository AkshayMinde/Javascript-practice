// ! Array

const myArr = [0,1,2,3,4,5];
const myHeros = ['akshay','minde']

// console.log(myArr[0]);

// ! Array methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop()
// myArr.unshift(0) // ? inserts at front
// myArr.shift() // ? removes first element 
// console.log(myArr.includes(9)); // ? includes checks for the values in array
// console.log(myArr.indexOf(3)); // ? includes checks for the values in array

// const newArr = myArr.join() //? converts array to string

// console.log(myArr);
// console.log(typeof newArr);

// ! slice, splice

console.log('A', myArr);

const myn1 = myArr.slice(1,3) //? doesn't do any change to original array
console.log(myn1);

const myn2 = myArr.splice(1,3) //? manipulates original array
console.log(myn2);
console.log('B', myArr);
