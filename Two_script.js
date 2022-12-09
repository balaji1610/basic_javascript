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
