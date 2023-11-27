// ! Primitive Datatype
// ? 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


// ! 

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 123456789123456789n

// ! Non-Primitive Datatype/Reference Type

// ? Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name:'Akshay',
    age: 26,
}

const myFunction = function(){
    console.log('Hello world');
}

console.log(typeof heros);

// ! Memory - Stack(Primitive) and Heap(Non-Primitive)

let myName = "AkshayMinde";

let anotherName = myName;
anotherName = "JS learning"

console.log(myName);
console.log(anotherName);

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1;
user2.email = "akshay@user.com"

console.log(user1.email);
console.log(user2.email);

