// datatypes
let primitives = [
  "Hello World",
  6,
  BigInt(Number.MAX_SAFE_INTEGER),
  true,
  undefined,
  Symbol("sym"),
  null,
];

const logTypeOf = (array) => {
  array.forEach((element) => {
    console.log(typeof element);
  });
};

// variables
// don't declare global variables
// w = "Hi";
// don't use var to declare variables
// var x = "Hello World";
// we can redeclare let
let y = "Hola Mundo";
// const cannot be redeclared
const z = { greeting: "Hi World" };
const array = [1, 2, 3, 4];

// if statements
// we use if statements when we want to do something conditonally
// if (array.length === 3) {
//   console.log("the array's length is 3");
// } else if (array.length === 4) {
//   console.log("the array's length is 4");
// } else {
//   console.log("the length is not 3 or 4");
// }

// ternary expressions
// array.length >= 3
//   ? console.log("the length is greater than or equal to 3")
//   : console.log("the length is less than 3");

// comparison operators
let num = 25;
// console.log(num > 20);
// console.log(num < 20);
// console.log(num >= 25);
// console.log(num <= 25);
// console.log(num === 2);
// console.log(num !== 25);

// logical operators

// and operator both conditions must be true or truthy to return true
// if one condition is false it will return false
// console.log(num > 20 && num > 25);
// console.log(num > 20 && num >= 25);
// or operator only one condition must be true to return true
// both conditions false and it will return false
// console.log(num > 20 || num > 25);
// console.log(num < 20 || num < 25);

// functions

// declaring or defining a function
function greeting() {
  console.log("hello world");
}
// greeting();
// invoking, calling, executing

// declaring an arrow function
const arrowGreeting = () => {
  console.log("Arrow Greeting");
};
// arrowGreeting();

const implicitReturn = () => "I return implicitly";

function explicitReturn() {
  return "I need a return keyword";
}

// accepting parameters
function iLogParameters(param) {
  console.log(param);
}

function greetingWithName(greeting, name = "Human") {
  return `${greeting} ${name}!`;
}

// scope
// rule of scope

const numbers = [1, 2, 3, 4, 5];
let x = 7;
function nestedScope(array) {
  let x = 6;
  console.log(x);
  array.forEach((item) => {
    // let x = 5;
    console.log(x);
    if (true) {
      let x = 4;
      console.log(x);
      console.log("wow");
    }
  });
}

// arrays
const names = ["Kristina", "Marcus", "Braylan"];
// const nums = Array();
// accessing elements in an array
// using index
// console.log(names[0]);
// console.log(names[1]);
// assigning array elements
names[3] = "Steven";
// console.log(names[0]);

// objects
// const cohort = { startDate: "060622", studentCount: 19 };
// console.log(cohort.startDate);
// let key = "startDate";
// console.log(cohort.key);
// console.log(cohort[key]);
// console.log(cohort["studentCount"]);

// the DOM

// DOM events

// fetch
// getting data
let cohort = [];
fetch("http://localhost:3000/students")
  .then((res) => res.json())
  .then((students) => {
    cohort = students;
  });

// setTimeout(function () {
//   console.log(cohort);
// }, 100);

let config = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Accepts: "application/json",
  },
  body: JSON.stringify({
    name: "Kristina",
  }),
};

// fetch("http://localhost:3000/students", config)
//   .then((res) => res.json())
//   .then((student) => console.log(student));
