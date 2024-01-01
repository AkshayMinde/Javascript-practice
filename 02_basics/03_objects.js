// ? singleton
// object.create

// ! object litreals

const mySym = Symbol("key1")

const JsUser = {
    name: "akshay",
    age: 26,
    "full name":"akshay minde",
    location:"Pune",
    [mySym]:"myKey1", // for using symbols [] is used
    email:'akshayminde6825@gmail.com',
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]); // needs to be accessed by providing square brackets

JsUser.email = "akshayminde@gmail.com"
// Object.freeze(JsUser) //? this will freeze all values and won't be able to change the values

JsUser.greeting = () => {
console.log('hello');
}
JsUser.greetingTwo = () => {
console.log(`hello ${JsUser.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

