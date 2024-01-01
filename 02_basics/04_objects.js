// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = '123abc'
tinderUser.name = "Akshay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: 'some@gmail.com',
    fullName: {
        userfullname : {
            firstName: 'Akshay',
            lastNAme: 'Minde'
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstName);

const obj1 = { 1: "a", 2:"b"}
const obj2 = { 3: "a", 4:"b"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    courseName: "javascript",
    price: 999,
    courseInstructor:"akshay"
}

const {courseInstructor} = course
console.log(courseInstructor);
// course.courseInstructor

// {
//     "name":"akshay",
//     "courseName":"Javascript",
//     "price":"free"
// }

