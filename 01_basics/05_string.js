const name = "akshay"
const repoCount = 35

console.log(name + repoCount + " Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Akki-Minde')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));

const subName = gameName.substring(0,4); //can't give minus values it will not react
console.log(subName);
const anotherString = gameName.slice(-8,4) //can give minus values and then it will start splicing from backwards
console.log(anotherString);

const newStringOne = "       akshay       "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akshay.com/akshay%20minde"
console.log(url.replace('%20', '-'));

console.log(url.includes('akshay'));

console.log(gameName.split('-'));
