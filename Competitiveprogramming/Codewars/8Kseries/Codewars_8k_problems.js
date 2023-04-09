//-------->1<--------- All Star Code Challenge #18
//link https://www.codewars.com/kata/5865918c6b569962950002a1

function stringCount(str, i) {
  return str.split("").filter((x) => x == i).length;
}

console.log(stringCount("", "z"));

//2^nd method

function secondStringCount(str, i) {
  const emptyarray = [];
  const output = str.split("").map((x) => (x == i ? emptyarray.push(x) : null));
  return emptyarray.length;
}

console.log(secondStringCount("Hello", "l"));

// Century From Year
//https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097

function centuryYear(x) {
  return x <= 100 ? 1 : x % 100 == 0 ? x / 100 : Math.trunc(x / 100) + 1;
}
console.log(centuryYear(89));
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705));

//Square(n) Sum
//https://www.codewars.com/kata/515e271a311df0350d00000f
function SquareSum(array) {
  return array.length > 0
    ? array.map((x) => Math.pow(x, 2)).reduce((a, b) => a + b)
    : 0;
}

console.log(SquareSum([1, 2]));

//Even or Odd
//https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

//1nd method
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}
console.log(even_or_odd(-8));

//2nd method
function evenOrOdd(number) {
  if (Math.sign(number) == 1) {
    return number % 2 == 0 ? "Even Number" : "Odd Number";
  } else {
    return -number % 2 == 0 ? "Even Number" : "Odd Number";
  }
}
console.log(evenOrOdd(-7));

//Reversed Strings
//https://www.codewars.com/kata/5168bb5dfe9a00b126000018
function ReversedStrings(x) {
  return x.split("").reverse().join("");
}

console.log(ReversedStrings(""));

function ReversedStrings2(x) {
  return [...x].reverse().join("");
}

console.log(ReversedStrings2("Hello"));

function ReversedStrings3(x) {
  return [...x].reduce((a, b) => b + a);
}

console.log(ReversedStrings3("Hello"));

function ReversedStrings4(x) {
  let reverse = [];

  for (let i = 0; i < x.length; i++) {
    reverse.unshift(x[i]);
  }

  return reverse.join("");
}

console.log(ReversedStrings4("Hello"));

//Add Length
//https://www.codewars.com/kata/559d2284b5bb6799e9000047

//1^nd method

function addLength3(str) {
  return str.split(" ").map((x, i) => `${x} ${x.length}`);
}

console.log(addLength3("you will win"));

//2^nd method
function addLength(str, emptyarray = []) {
  const result = str.split(" ").map((x) => emptyarray.push(`${x} ${x.length}`));

  return emptyarray;
}
console.log(addLength("you will win"));

//3^method
function addLength2(str) {
  const result2 = str.split(" ").reduce((acc, curr) => {
    const stringLength = `${curr} ${curr.length}`;
    return [...acc, stringLength];
  }, "");
  return result2;
}
console.log(addLength2("Hello Balaji How are you"));

//Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

//1^method
const quarterOf = (month) => {
  return month <= 3
    ? 1
    : month <= 6
    ? 2
    : month <= 9
    ? 3
    : month <= 12
    ? 4
    : null;
};
console.log(quarterOf(11));
//2^nd method
const returnarray = [1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4];
const quarterOf2 = (month) => returnarray[month];

console.log(quarterOf2(4));

//3^nd method
const quarterOf3 = (m) =>
  (m <= 3 && 1) ||
  (m <= 6 && 2) ||
  (m <= 9 && 3) ||
  (m <= 12 && 4) ||
  "NOT FOUND";

console.log(quarterOf3(2));

//Reversed Words
//https://www.codewars.com/kata/51c8991dee245d7ddf00000e
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}
console.log(
  reverseWords("The greatest victory is that which requires no battle")
);

//clock //not completed pending validation and add math methods

function getHMS(elm, time) {
  var min;
  var sec;
  var hour;
  if (time == "hours") {
    min = elm * 60;
    sec = min * 60;

    return `${min} minutes ${sec} Seconds`;
  } else if (time == "minutes") {
    hour = Math.floor(elm / 60);
    min = Math.floor(elm % 60);
    sec = Math.floor(elm * 60);

    return `${hour} hours ${min} minutes ${sec} Seconds`;
  } else if (time == "seconds") {
    min = elm / 60;
    hour = min / 60;

    return `${hour} hours ${min} minutes`;
  }
}

console.log(getHMS(80, "minutes"));

//Remove String Spaces
//https://www.codewars.com/kata/57eae20f5500ad98e50002c5
function noSpace(x) {
  return x.split(" ").join("");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B "));

//String repeat
//https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  return s.repeat(n);
}

console.log(repeatStr(5, " Hello "));
//Counting sheep...
//https://www.codewars.com/kata/54edbc7200b811e956000556

//Invert values
//https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
function invert(array) {
  return array.map((x) => (Math.sign(x) == 1 ? -x : -x));
}

console.log(invert([1, 2, 3, 4, 5]));

//Beginner - Reduce but Grow
//https://www.codewars.com/kata/57f780909f7e8e3183000078
function grow(x) {
  return x.reduce((a, b) => a * b);
}

console.log(grow([2, 2, 2, 2, 2, 2]));

//Vowel remover
//https://www.codewars.com/kata/5547929140907378f9000039

function shortcut(string) {
  return string
    .split("")
    .map((x) => (["a", "e", "i", "o", "u"].includes(x) ? x.replace(x, "") : x))
    .join("");
}

console.log(shortcut("complain"));

//2^nd method

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("complain"));
