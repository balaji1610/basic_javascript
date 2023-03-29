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
