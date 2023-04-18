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
let Numbertosnew_seting = 45;

let StringToNumber = "80";
let StringToNumber_01 = "Balaji";

let BooleansToNumber = true;
let NumberToBoolean = 0;

console.log(String(Numbertosnew_seting), "Numbertosnew_seting");

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

//Short circuiting operators

// https://www.geeksforgeeks.org/javascript-short-circuiting/

//OR operator

// It reads left to right
// In case of OR, the expression is evaluated until we get one true result because the result will always be true

console.log(12 || 0 || "Hello");

console.log(0 || undefined || null || 20 || 24);

//AND(&&) short circuit: In case of AND, the expression is evaluated until we get one false result because the result will always be false,

console.log(12 && 0 && "Hello");
console.log(0 && undefined && null && 20 && 24);

//Nullish operator

// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing#:~:text=The%20nullish%20coalescing%20(%20%3F%3F%20)%20operator,its%20left%2Dhand%20side%20operand.

console.log(1 || true);

console.log(undefined && 23);

console.log(0 ?? "hello");

//Object Methods

const ObjectFn = {
  FirstName: "Balaji",
  LastName: "M",
  MobileNumber: "123456",
};

console.log(Object.keys(ObjectFn), "keys");

console.log(Object.values(ObjectFn), "Values");

for (const [key, value] of Object.entries(ObjectFn)) {
  console.log(`${key} is ${value}`);
}

// Map and set

const MapData = ["Facebook", "Netflix", "Hotstar", "Instagram", "Instagram"];

const DuplicateArray = new Set(MapData);
DuplicateArray.add("Balaji", "Add"); // Add value
console.log(DuplicateArray.has("Facebook"));
console.log(DuplicateArray.size);
console.log(DuplicateArray);

const NewArray = new Map([
  ["FirstName", "Balaji"],
  ["Email", "balaji@email.com"],
]);

NewArray.set("MobileNumber", "123456789");

NewArray.set("Degree", "BE").set("Professioanl", "IT");

console.log(NewArray.get("Degree"));
NewArray.delete("Professioanl");
console.log(NewArray, "ggg");

const NewArrayDD = new Map([
  ["FirstName", "Balaji"],
  ["Email", "balaji@email.com"],
]);

NewArrayDD.set("MobileNumber", "123456789");

NewArrayDD.set("Degree", "BE").set("Professioanl", "IT");

console.log(NewArrayDD.get("Degree"));
NewArrayDD.delete("Professioanl");
console.log(NewArrayDD, "ggg");

//string
function greet(el) {
  const [says, name] = el.split(" ");

  const newName = [says, name.toUpperCase(), "How Are You ?"].join(" ");

  return newName;
}

console.log(greet("Hello balaji"));

//array

//Sorting Numbers
const array = [3, 4, 1, 2];

const ascending = array.sort((a, b) => a - b);

const descending = array.sort((a, b) => b - a);

console.log(descending);
const sortString = ["Balaji", "Alex", "Karthick"];

const sortString2 = ["Balaji", "Alex", "Karthick"];

const ascendingString = sortString2.sort((a, b) => a.localeCompare(b));

const descendingString = sortString.sort((a, b) => b.localeCompare(a));

console.log(ascendingString, descendingString);

const sortNumberString = ["aa", "cc", "dd", "aa", 1, 3, 4, 1];
const sortNumberString2 = ["aa", "cc", "dd", "aa", 1, 3, 4, 1];
//ascebding order
const resultsortNumberString = sortNumberString.sort((a, b) =>
  a > b ? -1 : 1
);
//descendingorder
const resultsortNumberStringDes = sortNumberString2.sort((a, b) =>
  a < b ? -1 : 1
);
console.log(resultsortNumberString, resultsortNumberStringDes);

//fill
// Syntax
// fill(value)
// fill(value, start)
// fill(value, start, end)

const fillArray = ["Balaji", "Alex", "Chitra", "Berlin", "Tokoyo"];

const result01 = fillArray.fill("Karthick");

console.log(result01);

const fillArray2 = ["Balaji", "Alex", "Chitra", "Berlin", "Tokoyo"];

const result02 = fillArray2.fill("Karthick", 2);

console.log(result02);

const fillArray3 = ["Balaji", "Alex", "Chitra", "Berlin", "Tokoyo"];

const result03 = fillArray3.fill("Karthick", 3, 4);

console.log(result03);

function Chose(method, content) {
  return method == "Number"
    ? content
        .split("")
        .filter((x) => Number(x))
        .map((x) => Number(x))
        .reduce((x, y) => x + y)
    : content
        .split("")
        .filter((x) => !Number(x))
        .join("");
}

console.log(
  Chose("Number", "123frrr133334rrrrrr5balajidddddddddddddddddddddddddd")
);

//Array Practice

let string = "013254";

const result2Add = string
  .split("")
  .map((x) => x * 2)
  .reduce((x, y) => x + y);
const result2Greaterthan = string
  .split("")
  .filter((x) => x >= 3)
  .map((x) => Number(x));

const maxNumber = string
  .split("")
  .sort((a, b) => b - a)
  .map((x) => Number(x));

const minNumber = string
  .split("")
  .sort((a, b) => a - b)
  .map((x) => Number(x));

console.log(result2Add, result2Greaterthan, maxNumber, minNumber);

let duplicateArray = [1, 1, 3, 4, 5, 5];

const duplicateRemove = new Set(duplicateArray);

console.log(duplicateRemove);

//Array From

const arrayfrom = "12344";

const arrayfrom2 = "123";

const arrayfrom3 = ["Hello", "Hello", "Alex", "Alex"];
const frommethod = Array.from(arrayfrom, Number);
const frommethod2 = Array.from(arrayfrom2, (x) => x * 2);

const fromethod3 = Array.from(new Set(arrayfrom3));

console.log(frommethod, frommethod2, fromethod3);

//////////////-------------> Number Start

/* isNaN() 
In JavaScript NaN is short for "Not-a-Number".

The isNaN() method returns true if a value is NaN.

The isNaN() method converts the value to a number before testing it.
*/

console.log(isNaN("jell"));
console.log(isNaN("12hl"));
console.log(isNaN(45));
console.log(isNaN("34"));
console.log(isNaN(8.03));

//parseInt && parseFloat
//string to number
/*

Synatax;
parseInt(string)
parseInt(string, radix)
The parseInt() function parses a string argument and returns an integer

The parseFloat() function parses a string argument and returns a floating point number.

parseFloat(string)
*/
const parseint01 = "31edf";

const parseint02 = "edf34";

const parseint03 = "2.44";

const parseinto4 = "geek";

console.log(
  parseInt(parseint01),
  parseInt(parseint02),
  parseInt(parseint03),
  parseInt(parseinto4)
);

const parsefloat = "343gff";
const parsefloat02 = "edf34";

const parsefloat03 = "2.44";

const parsefloato4 = "geek";

const parsefloat05 = "34";

console.log(
  parseFloat(parsefloat),
  parseFloat(parsefloat02),
  parseFloat(parsefloat03),
  parseFloat(parsefloato4),
  parseFloat(parsefloat05)
);

//isFinite()

// The JavaScript isFinite() function is used to check whether a number is a finite, legal number or not. It returns true for all the values except +infinity, -infinity, or NaN.

const inf01 = 10;

const inf02 = "geeks";

const info3 = false;

const info4 = 1000 / 0;

console.log(isFinite(inf01), isFinite(inf02), isFinite(info3), isFinite(info4));

//Number.isInteger()

/* Syntax 
Number.isInteger(value)
*/

// The boolean value true if the given value is an integer. Otherwise false

console.log(Number.isInteger("hello"));

console.log(Number.isInteger(1000 / 0));

console.log(Number.isInteger(34));

console.log(Number.isInteger(34.5));

console.log(Number.isInteger("34"));

/*
toFixed;
The toFixed() method formats a number using fixed-point notation.
Syntax:
toFixed(digits)
*/

const fixedMethod = 45.345;

const fixedMethod02 = -34.46;

console.log(
  fixedMethod.toFixed(0),
  fixedMethod.toFixed(1),
  fixedMethod.toFixed(2),
  fixedMethod02.toFixed(1)
);

console.log(Number(13_94));
console.log(Number("13_94"));
console.log(parseInt("13_94"));

///////////////<--------- Number END

//////////////---------->Math Start

/*
 Min and Max
 The Math.max() static method returns the largest of the numbers
 Syntax:
Math.max(value)
Math.max(...array)
The Math.min() static method returns the smallest of the numbers

 Syntax:
Math.min(value)
Math.min(...array)
*/

const maxMethod01 = [2, 4, 5, 8, "9"];
const maxMethod02 = ["10", "34", "84"];
const maxMethod03 = [0, -1, -3, -4];
const maxMethod04 = [-2, -3, -4, -5];
const maxMethod05 = [1];
const maxMethod06 = ["hello", "how", "areyou"];
const maxMethod07 = [10, 12, "hello"];

console.log(
  Math.max(...maxMethod01),
  Math.max(...maxMethod02),
  Math.max(...maxMethod03),
  Math.max(...maxMethod04),
  Math.max(...maxMethod05),
  Math.max(19, 20, 34),
  Math.max(...maxMethod06),
  Math.max(...maxMethod07)
);

console.log(
  Math.min(...maxMethod01),
  Math.min(...maxMethod02),
  Math.min(...maxMethod03),
  Math.min(...maxMethod04),
  Math.min(...maxMethod05),
  Math.min(19, 20, 34),
  Math.min(...maxMethod06),
  Math.min(...maxMethod07)
);
/*
Math.abs()
The Math.abs() static method returns the absolute value of a number
Syntax:
Math.abs(x)
x->a number
Return value:
The absolute value of x. If x is negative (including -0), returns -x. Otherwise, returns x. The result is therefore always a positive number or 0.

*/

const absMethod01 = -2;

const absMethod02 = "sgggg";
const absMethod03 = "-2";

console.log(
  Math.abs(absMethod01),
  Math.abs(absMethod02),
  Math.abs(absMethod03)
);

/* 
Math.sign()
The Math.sign() static method returns 1 or -1, indicating the sign of the number passed as argument.
Syntax:
Math.sign(x)
x->A number.

Return value:
A number representing the sign of x:

If x is positive, returns 1.
If x is negative, returns -1.
If x is positive zero, returns 0.
If x is negative zero, returns -0.
Otherwise, returns NaN.
*/

const signMethod = 4;
const signMethod01 = -4;
const signMethod02 = 0;
const signMethod03 = -0;

const signMethod04 = "hello";
const signMethod05 = ["hello", "hgogg"];
const signMethod6 = 4.08;

console.log(
  Math.sign(signMethod),
  Math.sign(signMethod01),
  Math.sign(signMethod02),
  Math.sign(signMethod03),
  Math.sign(signMethod04),
  Math.sign(signMethod05),
  Math.sign(signMethod6)
);

/*
Math.trunc()
The Math.trunc() static method returns the integer part of a number by removing any fractional digits.
Syntax
Math.trunc(x)
x->number

Return value:
The integer part of x
 */

const truncMethod = 12.48;

const trunMethod01 = -23.455;

const trunMethod02 = 12;

const trunMethod03 = -22;

const trunMethod04 = "hello";

const trunMethod05 = [1, 3, 5];

console.log(
  Math.trunc(truncMethod),
  Math.trunc(trunMethod01),
  Math.trunc(trunMethod02),
  Math.trunc(trunMethod03),
  Math.trunc(trunMethod04),
  Math.trunc(trunMethod05)
);

/*Math.random()

The Math.random() static method returns a floating-point, pseudo-random number that's greater than or equal to 0 and less than 1
Syntax:
Math.random()
Return value:
Math.random() always returns a number lower than 1.
A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
 */

const randomMethod01 = 10;
const randomMethod02 = -5;

const randomMethod03 = -23;
const randomMethod04 = 34.5;
const randomMethod05 = "Hello";

console.log(
  Math.random(randomMethod01),
  Math.random(randomMethod02),
  Math.random(randomMethod03),
  Math.random(),
  Math.random(randomMethod04),
  Math.random(randomMethod05),
  Math.random() * 10,
  Math.random() * 11
);

/* 
Math.floor():
The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
Syntax:
Math.floor(x)
x->A number.
Return value:
The largest integer smaller than or equal to x
*/

const floorMethod01 = 1.4;

const floorMethod0A = 5.7;
const floorMethod02 = 10;

const floorMethod03 = 0;

const floorMethod04 = 1;

const floorMethod06 = -10;

const floorMethod07 = -13.1;

const floorMethod08 = "hello";

console.log(
  Math.floor(floorMethod01),
  Math.floor(floorMethod0A),
  Math.floor(floorMethod02),
  Math.floor(floorMethod03),
  Math.floor(floorMethod04),
  Math.floor(floorMethod06),
  Math.floor(floorMethod07),
  Math.floor(floorMethod08)
);
/*Math.round()
The Math.round() static method returns the value of a number rounded to the nearest integer.
Syntax
Math.round(x)
x->A number
Return value:
The value of x rounded to the nearest integer
*/

const roundMethod01 = 1.4;

const roundMethod0A = 5.7;
const roundMethod02 = 10;

const roundMethod03 = 0;

const roundMethod04 = 1;

const roundMethod06 = -10;

const roundMethod07 = -13.1;

const roundMethod08 = "hello";

console.log(
  Math.round(roundMethod01),
  Math.round(roundMethod0A),
  Math.round(roundMethod02),
  Math.round(roundMethod03),
  Math.round(roundMethod04),
  Math.round(roundMethod06),
  Math.round(roundMethod07),
  Math.round(roundMethod08)
);

/*
Math.ceil()
The Math.ceil() static method always rounds up and returns the smaller integer greater than or equal to a given number.
Syntax
Math.ceil(x)
x->A number.

Return value:
The smallest integer greater than or equal to x. It's the same value 

 */
const celiMethod01 = 1;
const celiMethod01A = 0.7;
const celiMethod01B = 1.49;

const celiMethod0A = 5.7;
const celiMethod02 = 10;

const celiMethod03 = 0;

const celiMethod04 = 1;

const celiMethod06 = -10;

const celiMethod07 = -13.1;

const celiMethod08 = "hello";

console.log(
  Math.ceil(celiMethod01),
  Math.ceil(celiMethod01A),
  Math.ceil(celiMethod01B),
  Math.ceil(celiMethod0A),
  Math.ceil(celiMethod02),
  Math.ceil(celiMethod03),
  Math.ceil(celiMethod04),
  Math.ceil(celiMethod06),
  Math.ceil(celiMethod07),
  Math.ceil(celiMethod08)
);

/*Math.sqrt()



The Math.sqrt() static method returns the square root of a number

x->A number greater than or equal to 0.
Return value
The square root of x, a nonnegative number. If x < 0, returns NaN.

 */

const sqrtMethod = 9;

const sqrtMethod1 = 16;

const sqrtMethod02 = 27;
const sqrtMethod03 = -35;

const sqrtMethod04 = "hello";

console.log(
  Math.sqrt(sqrtMethod),
  Math.sqrt(sqrtMethod1),
  Math.sqrt(sqrtMethod02),
  Math.sqrt(sqrtMethod03),
  Math.sqrt(sqrtMethod04)
);
/* 
The Math.pow() static method returns the value of a base raised to a power.
Syntax
Math.pow(base, exponent)
Return value
A number representing base taken to the power of exponent. Returns NaN
*/

console.log(Math.pow(5, 2), Math.pow(5, 3), Math.pow(5, 3.4), Math.pow("rea"));

////////////////////<-------- Math End

//////Bigint

// JavaScript BigInt variables are used to store big integer values that are too big to be represented by a normal JavaScript Number .

console.log(Number.MAX_SAFE_INTEGER, "MAXIMUm");

const Normal = 12949389883;
const bigint = 833333n;

console.log(typeof Normal, typeof bigint);

//////////////

const day = new Date();

console.log(
  day.getDate(),
  "getDate",
  day.getDay(),
  "getDay",
  day.getFullYear(),
  "getFullYear",
  day.getHours(),
  "getHours",
  day.getMilliseconds(),
  "getMilliseconds",
  day.getMinutes(),
  "getMinutes",
  day.getMonth() + 1,
  "getMonth",
  day.toDateString(),
  "toDateString",
  day.getTime(),
  "getTime"
);

const today = `${day.getDate()}/${day.getMonth() + 1}/${day.getFullYear()}`;
const todaytime = `${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`;
console.log(today, todaytime);

///// 12 hour format

const da = new Date();

const hour = da.getHours();

const timeperiod = hour < 12 ? "AM" : "PM";

const time = hour % 12;
const min = da.getMinutes();

console.log(`${time} : ${min} ${timeperiod}`, "12 hour format");

////////////Intl.DateTimeFormat.prototype.format()

/* 
// The Intl.DateTimeFormat.prototype.format() method is an inbuilt method in JavaScript that is used to format a date according to the locale and formatting options of this Intl.DateTimeFormat object. 
///////////Parameters

1)dateStyle (full,long,medium,short)

2)timeStyle (full,long,medium,short)

3)hour12(true,false
  
4)weekday(long,short,narrow)

5)year(numeric,2-digit)

6)month(numeric,2-digit,long,short,narrow)

7)day(numeric,2-digit)

8)hour(numeric,2-digit)

9)minute(numeric,2-digit)

10)second(numeric,2-digit)

11)timeZoneName(long,short,shortOffset,longOffset,shortGeneric,longGeneric)

*/

// The Navigator.languages read-only property returns an array of strings representing the user's preferred languages.
const navi = navigator.language;

console.log(navi, "navigator");
const options1 = {
  dateStyle: "short",
  timeStyle: "short",

  hour12: true,
};
console.log(new Intl.DateTimeFormat("en-GB", options1).format(day));

/////// NumberFormat
// The Intl object in JavaScript provides a way to format and manipulate numbers, dates, and strings according to the conventions of a specific locale
/*
///Reference site
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
options
1)style(decimal(default),currency,percent)

2)currency(USD,INR)
3)currencyDisplay(symbol(default),narrowSymbol,code,name)
4)currencySign(standard(default),accounting)
5)minimumFractionDigits,maximumFractionDigits
*/

const currency = 1500.5678;

const options2 = {
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
};

console.log(
  new Intl.NumberFormat("en-us", options2).format(currency),
  "<----CurrencyMethod"
);

/////////////------>Practice sum

function conuntNumber(args) {
  const PostiveNumber = [];
  const NegativeNumber = [];

  const checkingNumber = args.filter((x) =>
    Math.sign(x) == 1 ? PostiveNumber.push(x) : NegativeNumber.push(x)
  );

  return [PostiveNumber, NegativeNumber].map((x, i) =>
    i == 0 ? x.reduce((x, y) => x + y) : x.reduce((x, y) => x + y)
  );
}

console.log(
  conuntNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
);

const arraydg = ["Alex", "Balaji"];

const Pass = function (el) {
  let result;

  switch (el) {
    case 0:
      result = "Hello Alex";
      break;
    case 1:
      result = "Hello Balaji";
      break;
    default:
      result = "fag";
  }
  return result;
};

const finalResult = arraydg.map((x, i) => Pass(i)).join(",");

console.log(finalResult, "ggggg");

////////////////////<--------Practice sum

///////Multiple Ternary Operator

function Numberstatus(n) {
  return n == 0 ? "Zero" : n > 0 ? "Postive" : n < 0 ? "Negative" : null;
}

console.log(Numberstatus(-2));
//PrimeNumber
function checkPrimeNumber(n) {
  return n % 2 == 1 ? `${n} Is a Prime Number` : `${n} Is NOT a Prime Number`;
}

console.log(checkPrimeNumber(23));

//Dom Events
console.log(document.documentElement);

//SetTimeout

console.log(10);

setTimeout(() => console.log(2), 1000);

console.log(3);

setTimeout(() => console.log(4), 0);

//Module Pattern

/*
(fn(){

})();
*/
const Operations = (function () {
  const Add = (n1, n2) => {
    return n1 + n2;
  };

  const Sub = (n1, n2) => {
    return n1 - n2;
  };

  const WhatisType = (el) => {
    return typeof el;
  };
  return {
    Add,
    Sub,
    WhatisType,
  };
})();

const { Add, Sub, WhatisType } = Operations;

console.log(Add(1, 2));

console.log(Sub(2, 2));
console.log(WhatisType("hello"));

console.log(Operations);

//Two array compare filter

var mispelled = function (word1, word2) {
  return word1.split("").filter((x) => !word2.split("").includes(x));
};

console.log(mispelled("22versed", "versed"));

//2 for loop

function loop(s) {
  const emptyarray = [];
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      emptyarray.push([s[i], s[j]]);
    }
  }

  return emptyarray;
}

console.log(loop(["a", "b", "c", "d", "e"]));

//arithmetic Operator

function operation(x) {
  var result = 0;

  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }

  return result;
}

console.log(operation([1, 2, 3, 4, 5]));

function operation2(x) {
  var result = "";

  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }

  return result;
}

console.log(operation2(["B", "A", "L", "A", "J", "I"]));

function operation3(...x) {
  var result = 0;

  for (let i = 0; i < x.length; i++) {
    result += x[i];
  }

  return result;
}

console.log(operation3(1, 2, 3, 4, 5));

//two array compare same index

function dup(x, y) {
  const result = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i] == y[i]) {
      result.push(true);
    } else {
      result.push(false);
    }
  }
  console.log(result);
  return result.every((x) => x === true);
}

console.log(dup([1, 2, 3, 4, 5], [1, 2, 3, 5, 4]));

// compare Two array Difference
function difference(x, y) {
  const result = [];

  const oneToTwo = x.map((x) => (y.includes(x) ? true : result.push(x)));
  const twoToone = y.map((y) => (x.includes(y) ? true : result.push(y)));
  return result.map(String);
}

console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

// Input: numbers= [10,20,10,40,50,60,70], target=50
// Output: 2, 3

function target(x) {
  for (let i = 0; i < x.length; i++) {
    let result = x[i] + x[i + 1];

    if (result === 50) {
      return `${i} ${i + 1}`;
    }
  }
}

console.log(target([10, 20, 50, 60, 70, 10, 40]));

//while Approach

function repeatStr(n, s) {
  let result = " ";

  while (n > 0) {
    result += s;

    --n;
  }
  return result;
}

console.log(repeatStr(5, "* "));

let obj = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
  key4: "value4",
};
Object.entries(obj).forEach(([key, value]) => {
  console.log(key, value);
});

//export Object with operations
function exportObject(operation, array) {
  const OperationObj = {
    Min: (a) => Math.min(...a),
    Max: (a) => Math.max(...a),
    "Ascending Order": (a) => a.sort((a, b) => (a < b ? -1 : 1)),
    "Descendiong Order": (a) => a.sort((a, b) => (a > b ? -1 : 1)),
    SumArray: (a) =>
      a.reduce((a, b) => {
        return a + b;
      }),
    RemoveDuplicatearray: (a) => [...new Set(a)],
  };

  return OperationObj[operation](array);
}

console.log(exportObject("Max", [1, 3, 4, 5, 7, 2, 2]));
//array remove splice method
function removeEveryOther(arr, index, removearrayer = []) {
  for (let i = index - 1; i < arr.length; i += index - 1) {
    removearrayer.push(arr.splice(i, 1));
  }
  console.log(removearrayer.flat(), "REMOVE ARRAY");
  return arr;
}

console.log(
  removeEveryOther(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ],
    2
  )
);
