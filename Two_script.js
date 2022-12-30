let arr = hello();

function hello() {
  return "Hello";
}

console.log(arr, "arr");

// Operators

//1) Arthimetic Operators

let x = 10;
x += 5;
console.log(x);

x -= 1;

console.log(x);

x *= 6;

console.log(x);
x /= 4;

console.log(x);
x %= 8;

console.log(x);

x **= 3; //5 power of 3

console.log(x);

//Difference B/w == and ===

const a = 10;

const b = "10";
console.log(a == b);

console.log(a === b);

console.log(typeof a, typeof b);
const c = 0;

const d = false;

console.log(c == d);
console.log(typeof c, typeof d);
console.log(c === d);

//Increment Postfix and prefix

let postfix = 10;
let yff = postfix++;
//he increment operator increments and returns the value before incrementing.
let prefix = 20;
const dggg = ++prefix;
// the increment operator increments and returns the value after incrementing.

console.log(yff, dggg, "PO");
let i;

for (i = 0; i <= 10; i++) {
  ++i;

  console.log(i);
}

//Operator Precendence

const operator = 24 + 3 > 9 + 9;

console.log(operator);

// https://www.dummies.com/article/technology/programming-web-design/general-programming-web-design/javascript-operator-precedence-254119/

//Type Conversion

// https://www.w3schools.com/js/js_type_conversion.asp
let Numbertostring = 45;

let StringToNumber = "80";
let StringToNumber_01 = "Balaji";

let BooleansToNumber = true;
let NumberToBoolean = 0;

console.log(String(Numbertostring), "Numbertostring");

console.log(Number(StringToNumber), "StringToNumber");

console.log(Number(StringToNumber_01), "StringToNumber_01");

console.log(Number(BooleansToNumber), "BooleansToNumber");

console.log(Boolean(NumberToBoolean), "NumberToBoolean");

//Type Coercion

let Typecoercion = "5" + 23; //It arthemetic operator  as Concatenate

let TypecoercionstringToNumber = "5" * 3;

console.log(Typecoercion, "Typecoercion");

console.log(TypecoercionstringToNumber, "TypecoercionstringToNumber");

//Truthy & Falsy Values

//List of falsy values 0,empty strings,undefined,null,NaN

// truthy. That includes:

// '0' (a string containing a single zero)
// 'false' (a string containing the text “false”)
// [] (an empty array)
// {} (an empty object)
// function(){} (an “empty” function)

// // let checkTruthyFalsyvalue = 0;
let checkTruthyFalsyvalue = "10";
// let checkTruthyFalsyvalue;
// console.log(typeof checkTruthyFalsyvalue);
if (checkTruthyFalsyvalue) {
  console.log("This True Value");
} else {
  console.log("This False Value");
}

//Logical Operator

// let CheckLogicalOperator = true; //Not
let CheckLogicalOperator = false;

console.log(!CheckLogicalOperator, "CheckLogicalOperator");

//Forward,Backward Loop

for (let i = 0; i <= 10; i++) {
  console.log(i, "ForwardLoop");
}

for (let y = 10; y >= 0; y--) {
  console.log(y, "Backwardloop");
}

// Object Destructing

const user1 = {
  firstName: "Balaji",
  lastName: "M",
  role: "Front End Devloper",
  experience: "2.5+",
};

const { firstName, lastName, role, experience } = user1;

console.log(
  "Myself " +
    firstName +
    " " +
    lastName +
    ", I have" +
    experience +
    "Years of " +
    role
);

// ++ and -- operator as prefix and postfix
// If you use the ++ operator as a prefix like: ++var, the value of var is incremented by 1; then it returns the value.
// If you use the ++ operator as a postfix like: var++, the original value of var is returned first; then var is incremented by 1.

for (let i = 0; i <= 10; i++) {
  console.log(i++, "Postfix");
}

for (let y = 0; y <= 10; y++) {
  console.log(++y, "Prefix");
}

//Multitple Conditions
let xvalue = 20;
if (xvalue == 5 || xvalue == 10) {
  // console.log(true);
} else {
  // console.log(false);
}

//Short Multiple Conditions

if ([5, 10, 15, 20].includes(xvalue)) {
  console.log(true, "Short True");
} else {
  console.log(false, "Short False");
}

//Destructing Objects

const object = {
  Name: "Balaji",
  Age: "25",
  Role: "Front-End-Developer",
  Email: "Bc@gmail.com",
};

const { Name, Age, Role, Email } = object;

console.log(Name, Role, "DestructionObjects");

//Object

const Details = ["personalDetails", "CommunicationDetails"];
const objectdd = [
  {
    [Details[0]]: {
      Namedd: "Balaji",
      DOB: "8/10/2000",
    },

    [Details[1]]: {
      Email: "Ba1610@gmail.com",
      Mobile: "1234567890",
    },
  },
];

const [
  {
    personalDetails: { Namedd, DOB },
  },
] = objectdd;

console.log(Namedd, DOB);
//Destructure array
const arrayList = ["One", "Two", "Three", "Four", "Five"];

const [a1, , a2, a3, a4] = arrayList;
const [b1, b2, b3, ...others] = arrayList;
console.log(a1, a2, a3, a4);
console.log(b1, b2, b3, others);
const [b4, b5] = others;
console.log(b4, b5, "kk");

//nested array

const fruitList = ["Apple", "Orange", ["Lion", "Cat", "Tiger"]];

const [n1, n2, n3] = fruitList;

console.log(n1, n2, n3);

const [n1a, n2a, [no1, no2, no3]] = fruitList;

console.log(n1a, n2a, no1, no2, no3);

//default values
let c1d = "C is waiting";
let b1d = "b1 is waiting";
// const [ad, bd = b1d, cd = c1d] = [1, 2, 3];
const [ad, bd = b1d, cd = c1d] = [1, 2];
console.log(ad, bd, cd);
