//-------->1<--------- All Star Code Challenge #18
//link https://www.codewars.com/kata/5865918c6b569962950002a1

function stringCount(str, i) {
  return str.split("").filter((x) => x == i).length;
}

console.log(stringCount("", "z"));

//2^nd method

function secondStringCount(str, i, emptyarray2 = []) {
  const output = str
    .split("")
    .map((x) => (x == i ? emptyarray2.push(x) : null));
  return emptyarray2.length;
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
function addLength(str) {
  const emptyarray = [];
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

//Grasshopper - Summation
//https://www.codewars.com/kata/55d24f55d7dd296eb9000030

var summation = function (num) {
  var result = 0;
  for (let i = 1; i <= num; i++) {
    result += i;
  }
  return result;
};

console.log(summation(1));

//Remove exclamation marks
//https://www.codewars.com/kata/57a0885cbb9944e24c00008e
function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((x) => x !== "!")
    .join("");
}

console.log(removeExclamationMarks("Hello World!"));

//Remove Special Characters
function removeExclamationMarks2(s) {
  let object = {
    "!": "",
    "#": "",
    "%": "",
  };

  return s
    .split("")
    .map((x) => (x.includes(object[x]) ? object[x] : x))
    .join("");
}

console.log(
  removeExclamationMarks2("Hello World! # Hellow how are Your ? % hi balaji")
);

//3^method
function removeExclamationMarks3(s) {
  return s.replace(/!/gi, "");
}

console.log(removeExclamationMarks3("Hello World!"));

//Find Multiples of a Number

//https://www.codewars.com/kata/58ca658cc0d6401f2700045f/javascript
function findMultiples(integer, limit, resultaray = []) {
  for (let i = integer; i <= limit; i += integer) {
    resultaray.push(i);
  }

  return resultaray;
}

console.log(findMultiples(4, 27));

//Is it a palindrome?
//https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

function isPalindrome(x) {
  return x.toLowerCase().split("").reverse().join("") == x.toLowerCase();
}

console.log(isPalindrome("a"));

//Convert a String to a Number!
//https://www.codewars.com/kata/544675c6f971f7399a000e79

const stringToNumber = function (str) {
  // return parseInt(str)
  return Number(str);
};

console.log(stringToNumber("1405"));

//Sum The Strings
//https://www.codewars.com/kata/5966e33c4e686b508700002d
function sumStr(...x) {
  const result = x
    .map((x) => Number(x))
    .reduce((a, b) => {
      return a + b;
    });

  return String(result);
}

console.log(sumStr("4", "5"));
//Switch it Up!
//https://www.codewars.com/kata/5808dcb8f0ed42ae34000031

function switchItUp(number) {
  const object = {
    0: "Zero",
    1: "One",
    2: "Two",
    3: "Three",
    4: "Four",
    5: "Five",
    6: "Six",
    7: "Seven",
    8: "Eight",
    9: "Nine",
  };
  return object[number];
}
console.log(switchItUp(5));

//Remove First and Last Character
//https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0

function removeChar(str) {
  return str.slice(1, str.length - 1);
}

console.log(removeChar("eloquent"));

//Get the mean of an array
//https://www.codewars.com/kata/563e320cee5dddcf77000158
function getAverage(marks) {
  const sum = marks.reduce((x, y) => x + y);

  return Math.trunc(sum / marks.length);
}

getAverage([2, 2, 2, 2]);

//Abbreviate a Two Word Name
//https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
function abbrevName(name) {
  return name
    .split(" ")
    .map((x) => x.charAt(0))
    .join(".");
}

console.log(abbrevName("David Mendieta"));
//2^nd method
function abbrevName2(name) {
  return name
    .split(" ")
    .map((i) => i[0].toUpperCase())
    .join(".");
}

console.log(abbrevName2("david Mendieta"));

//Count the Monkeys!
//https://www.codewars.com/kata/56f69d9f9400f508fb000ba7

function monkeyCount(n, emptyarray2d = []) {
  for (let i = 1; i <= n; i++) {
    emptyarray2d.push(i);
  }
  return emptyarray2d;
}

console.log(monkeyCount(20));

//Basic Mathematical Operations
//https://www.codewars.com/kata/57356c55867b9b7a60000bd7

function basicOp(operation, value1, value2) {
  return (
    (operation == "+" && value1 + value2) ||
    (operation == "-" && value1 - value2) ||
    (operation == "*" && value1 * value2) ||
    (operation == "/" && value1 / value2)
  );
}

console.log(basicOp("/", 49, 7));

function basicOp2d(operation, value1, value2) {
  const expand = {
    "+": value1 + value2,
    "-": value1 - value2,
    "*": value1 * value2,
    "/": value1 / value2,
  };

  return expand[operation];
}

console.log(basicOp2d("-", 49, 7));

//Count of positives / sum of negatives
//https://www.codewars.com/kata/576bb71bbbcf0951d5000044

function countPositivesSumNegatives(
  input,
  postivearray = [],
  negativearray = []
) {
  const expand = input.map((x) =>
    x > 0 ? postivearray.push(x) : negativearray.push(x)
  );

  const resultpositivearray = function (x) {
    return x.length;
  };
  const resultnegativearray = function (x) {
    return x.reduce((a, b) => {
      return a + b;
    });
  };
  return [
    resultpositivearray(postivearray),
    resultnegativearray(negativearray),
  ];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

//You only need one - Beginner
//https://www.codewars.com/kata/57cc975ed542d3148f00015b
function check(a, x) {
  return a.includes(x);
}

console.log(check(["what", "a", "great", "kata"], "kat"));

//pick a set of first elements
//https://www.codewars.com/kata/572b77262bedd351e9000076
function first(arr, n) {
  return arr.slice(0, n);
}

console.log(first(["a", "b", "c", "d", "e"], 2));
//Return the day
//https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
function whatday(num) {
  let holidays = {
    1: "Sunday",
    2: "Monday",
    3: "Tuesday",
    4: "Wednesday",
    5: "Thursday",
    6: "Friday",
    7: "Saturday",
  };

  return holidays[num] ?? "Wrong, please enter a number between 1 and 7";
}

console.log(whatday(9));

//Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  return Math.sign(num) == 1 ? -num : num;
}
console.log(makeNegative(0.12));

//Removing Elements
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2
function removeEveryOther(arr) {
  return arr.filter((elm, i) => (i + 1) % 2 == !0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

//Remove duplicates from list
//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
function distinct(a) {
  return [...new Set(a)];
}

console.log(distinct([1, 1, 2]));
//Array plus array
//https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((a, b) => {
    return a + b;
  });
}

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
//Opposite number
//https://www.codewars.com/kata/56dec885c54a926dcd001095
function opposite(number) {
  return Math.sign(number) == 1 ? -number : Math.abs(number);
}

console.log(opposite(-14));

//Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n, emptyarray = []) {
  for (let i = 1; i <= n; i++) {
    emptyarray.push(i * x);
  }
  return emptyarray;
}

console.log(countBy(2, 5));

//Convert a string to an array
//https://www.codewars.com/kata/57e76bc428d6fbc2d500036d
function stringToArray(string) {
  return string.split(" ");
}

//Convert a Number to a String!
//https://www.codewars.com/kata/5265326f5fda8eb1160004c8
function numberToString(num) {
  return num.toString();
}

console.log(numberToString(123));

console.log(stringToArray("Robin Singh"));
//What is between?
//https://www.codewars.com/kata/55ecd718f46fba02e5000029
function between(a, b, empyarray = []) {
  let i = a;
  while (i <= b) {
    empyarray.push(i);
    i++;
  }

  return empyarray;
}

console.log(between(-2, 2));

//Convert number to reversed array of digits
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
  return String(n).split("").reverse().map(Number);
}

console.log(digitize(35231));

//Short Long Short
//https://www.codewars.com/kata/50654ddff44f800200000007

function solution(a, b) {
  if (isNaN(a)) {
    const Stringresult = [a, b].sort((a, b) => a.length - b.length);

    return Stringresult[0] + Stringresult[1] + Stringresult[0];
  } else {
    const Numberresult = [a, b].sort();
    return Numberresult[0] + Numberresult[1] + Numberresult[0];
  }
}

console.log(solution("13", "200"));
function solution2d(a, b) {
  return a.length < b.length ? a + b + a : b + a + b;
}

console.log(solution2d("13", "200"));

//Sum of positive
//https://www.codewars.com/kata/5715eaedb436cf5606000381
function positiveSum(arr) {
  return arr
    .filter((x) => Math.sign(x) == 1)
    .reduce((a, b) => {
      return a + b;
    });
}

console.log(positiveSum([1, -4, 7, 12]));
//Double Char
//https://www.codewars.com/kata/56b1f01c247c01db92000076
function doubleChar(str) {
  return str
    .split("")
    .map((x) => x.repeat(2))
    .join("");
}

console.log(doubleChar("123456"));
//Reversed sequence
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d
const reverseSeq = (n, resultarray = []) => {
  for (let i = n; i > 0; i--) {
    resultarray.push(i);
  }

  return resultarray;
};

console.log(reverseSeq(5));

const reverseSeq2d = (n, resultarrayer = []) => {
  let i = n;
  while (i > 0) {
    resultarrayer.push(i);
    i--;
  }
  return resultarrayer;
};

console.log(reverseSeq2d(5));
//Sum Mixed Array
//https://www.codewars.com/kata/57eaeb9578748ff92a000009
function sumMix(x) {
  return x.map(Number).reduce((a, b) => {
    return a + b;
  });
}

console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));
//Merge two sorted arrays into one
//https://www.codewars.com/kata/5899642f6e1b25935d000161
function mergeArrays(arr1, arr2) {
  return [...new Set(arr1.concat(arr2))].sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]));

//Fake Binary
//https://www.codewars.com/kata/57eae65a4321032ce000002d
function fakeBin(x) {
  return x
    .split("")
    .map((x) => (x < 5 ? "0" : "1"))
    .join("");
}

console.log(fakeBin("366058562030849490134388085"));

//Sum without highest and lowest number
//https://www.codewars.com/kata/576b93db1129fcf2200001e6
function sumArray(array) {
  const getindex = [
    array.indexOf(Math.min(...array)),
    array.indexOf(Math.max(...array)),
  ];

  return array
    .map((elm, index) => (getindex.includes(index) ? null : elm))
    .filter(Number)
    .reduce((a, b) => a + b);
}

console.log(sumArray([0, 1, 6, 10, 10]));

//Reversing Words in a String
//https://www.codewars.com/kata/57a55c8b72292d057b000594
function reverse(string) {
  return string.split(" ").reverse().join(" ");
}
console.log(reverse("Hello World"));
