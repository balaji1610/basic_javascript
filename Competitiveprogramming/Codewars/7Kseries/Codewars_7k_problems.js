//Sort array by string length
//https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
function sortByLength(array) {
  return array.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(["Longer", "Longest", "Short"]));

//Sum even numbers
//https://www.codewars.com/kata/586beb5ba44cfc44ed0006c3
function sumEvenNumbers(input) {
  return input.filter((x) => x % 2 == 0).reduce((x, y) => x + y);
}

console.log(sumEvenNumbers([4, 3, 1, 2, 5, 10, 6, 7, 9, 8]));

//Disemvowel Trolls
//https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
  return str
    .split("")
    .map((x) =>
      ["a", "A", "e", "E", "i", "I", "O", "o", "U", "u"].includes(x)
        ? x.replace(x, "")
        : x
    )
    .join("");
}

console.log(disemvowel("What are you, a communist?"));

//2nd method
function disemvowel2(str) {
  return str.replace(/[aeiou]/gi, "");
}
console.log(disemvowel2("WhAt are you, a communist?"));
//Credit Card Mask
//https://www.codewars.com/kata/5412509bd436bd33920011bc

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#");
}

console.log(maskify("4556364607935616"));

//Remove the minimum
//https://www.codewars.com/kata/563cf89eb4747c5fb100001b
function removeSmallest(numbers) {
  numbers.splice(numbers.indexOf(Math.min(...numbers)), 1);
  return numbers;
}

console.log(removeSmallest([5, 3, 2, 1, 4]));

//2nd method
function removeSmallest2d(numbers) {
  const findindex = numbers.findIndex((index) => index == Math.min(...numbers));

  return numbers
    .map((elm, index) => (index == findindex ? null : elm))
    .filter(Number);
}

console.log(removeSmallest2d([2, 2, 1, 2, 1]));

//Sum of a sequence
//https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step, resultarray = []) => {
  for (let i = begin; i <= end; i += step) {
    resultarray.push(i);
  }

  return resultarray.reduce((a, b) => a + b);
};

console.log(sequenceSum(1, 5, 3));

//Changing letters
//https://www.codewars.com/kata/5831c204a31721e2ae000294

function swap(string) {
  return string
    .split("")
    .map((x) =>
      ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"].includes(x)
        ? x.replace(x, x.toUpperCase())
        : x
    )
    .join("");
}

console.log(swap("Hello World!"));

//2^method
function swap2d(string) {
  const obje = {
    a: "A",
    e: "E",
    i: "I",
    o: "O",
    u: "U",
  };

  return string
    .split("")
    .map((x) =>
      ["a", "e", "i", "o", "u"].includes(x) ? x.replace(x, obje[x]) : x
    )
    .join("");
}
console.log(swap2d("Friday"));
//3^method
function swap3d(string) {
  return string.replace(/[aeiou]/g, (x) => x.toUpperCase());
}

console.log(swap3d("Hello World!"));

//Ch4113ng3
//https://www.codewars.com/kata/59e9f404fc3c49ab24000112

function nerdify(txt) {
  let getobj = {
    a: "4",
    A: "4",
    e: "3",
    E: "3",
    l: "1",
  };
  console.log();

  return txt
    .split("")
    .map((x) => (Object.keys(getobj).includes(x) ? getobj[x] : x))
    .join("");
}

console.log(nerdify("Fund4m3nt41s"));

//2^method
function nerdify2d(txt) {
  return txt.replace(
    /[aelAE]/g,
    (a) => ({ a: 4, e: 3, l: 1 }[a.toLowerCase()])
  );
}

console.log(nerdify2d("Fund4m3nt41s"));

//Vowel one
//https://www.codewars.com/kata/580751a40b5a777a200000a1

function vowelOne(s) {
  const vowel = "aeiouAEIOU";
  return s
    .split("")
    .map((x) => (vowel.includes(x) ? 1 : 0))
    .join("");
}

console.log(vowelOne("vowelOne"));

//String ends with?
//https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending) {
  return str.slice(-ending.length) === ending;
}

console.log(solution("abcde", "cde"));
//2^method
function solution2d(str, ending) {
  return str.endsWith(ending);
}

console.log(solution2d("abc", "d"));

//Greet Me
//https://www.codewars.com/kata/535474308bb336c9980006f2
var greet = function (name) {
  const lower = name.toLowerCase();
  const string = lower[0].toUpperCase() + lower.slice(1) + "!";
  return `Hello ${string}`;
};

console.log(greet("riley"));

//Remove consecutive duplicate words
//https://www.codewars.com/kata/5b39e91ee7a2c103300018b3
function removeConsecutiveDuplicates(string, removeDuplicate = []) {
  const split = string.split(" ");

  for (let i = 0; i < split.length; i++) {
    if (split[i] != split[i + 1]) {
      removeDuplicate.push(split[i]);
    }
  }

  return removeDuplicate.join(" ");
}

console.log(
  removeConsecutiveDuplicates(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);

//2nd method
function removeConsecutiveDuplicates2d(string) {
  return string
    .split(" ")
    .map((elm, i, arr) => (arr[i] != arr[i + 1] ? arr[i] : null))
    .filter(Boolean)
    .join(" ");
}

console.log(
  removeConsecutiveDuplicates2d(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
//Reverse words
//https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
function reverseWords(str) {
  return str
    .split(" ")
    .map((x) => x.split("").reverse("").join(""))
    .join(" ");
}

console.log(reverseWords("This is an example!"));

//Descending Order
//https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n) {
  return String(n)
    .split("")
    .sort((a, b) => (a > b ? -1 : 1))
    .map(Number)
    .join("");
}

console.log(descendingOrder(123456789));

//Sum of Minimums!
//https://www.codewars.com/kata/5d5ee4c35162d9001af7d699

function sumOfMinimums(arr) {
  return arr.map((x) => Math.min(...x)).reduce((a, b) => a + b);
}

console.log(
  sumOfMinimums([
    [1, 2, 3, 4, 5],
    [5, 6, 7, 8, 9],
    [20, 21, 34, 56, 100],
  ])
);

//Convert Hash To An Array

//https://www.codewars.com/kata/59557b2a6e595316ab000046
function convertHashToArray(hash) {
  return Object.entries(hash).sort();
}

console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }));
//2^nd method
function convertHashToArray(hash, emptyarr = []) {
  for (let i in hash) {
    emptyarr.push([i, hash[i]]);
  }

  return emptyarr.sort();
}

console.log(convertHashToArray({ product: "CodeWars", powerLevelOver: 9000 }));

//You're a square!
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e

var isSquare = function (n) {
  return Number.isInteger(Math.sqrt(n));
};

console.log(isSquare(9));

//
var isSquare2d = function (n) {
  return Math.sqrt(n) % 1 === 0;
};

console.log(isSquare2d(25));

//Frequency sequence

//https://www.codewars.com/kata/585a033e3a36cdc50a00011c

function freqSeq(str, sep, emptyarr12 = []) {
  str.split("").forEach((x) => {
    const length = str.split("").filter((a) => a === x).length;

    emptyarr12.push(length);
  });
  return emptyarr12.join(sep);
}

console.log(freqSeq("19999999", ":"));

//

function freqSeq2d(str, sep) {
  return str
    .split("")
    .map((elm, index, array) => array.filter((vi) => vi === elm).length)
    .join(sep);
}

console.log(freqSeq2d("hello world", "-"));

//Shortest Word
//https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

function findShort(s) {
  const res = s.split(" ").map((x) => x.length);
  return Math.min(...res);
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

//Highest and Lowest
//https://www.codewars.com/kata/554b4ac871d6813a03000035

function highAndLow(numbers) {
  const split = numbers.split(" ");
  return `${Math.max(...split)} ${Math.min(...split)}`;
}

console.log(highAndLow("1 2 3 4 5"));

//Vowel Count
//https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
  const vowvel = "aeiouAEIOU";
  return str
    .split("")
    .map((elm) => vowvel.includes(elm))
    .filter(Boolean).length;
}

console.log(getCount("abracadabra"));

//List Filtering
//https://www.codewars.com/kata/53dbd5315a3c69eed20002dd
function filter_list(l) {
  // Return a new array with the strings filtered out

  return l.filter((x) => Number.isInteger(x));
}
console.log(filter_list([1, 2, "a", "b", "1"]));

function filter_list2d(l) {
  // Return a new array with the strings filtered out

  return l.map((elm) => typeof elm == "number" && elm).filter(Boolean);
}
console.log(filter_list2d([1, 2, "a", "b", "1"]));

//Sort Numbers
//https://www.codewars.com/kata/5174a4c0f2769dd8b1000003

function solutiondd(numsddf) {
  return numsddf.sort((a, b) => (a < b ? -1 : 1));
}

console.log(solutiondd([2, 20, 10]));

//Jaden Casing Strings
//https://www.codewars.com/kata/5390bac347d09b7da40006f6
function JadenCase(str) {
  return str
    .split(" ")
    .map((elm) => elm.replace(elm, elm.charAt(0).toUpperCase() + elm.slice(1)))
    .join(" ");
}

console.log(JadenCase("How can mirrors be real if our eyes aren't real"));

//Count the divisors of a number
//https://www.codewars.com/kata/542c0f198e077084c0000c2e

function getDivisorsCnt(n, emptyarray = []) {
  for (let i = 1; i <= 100; i++) {
    n % i === 0 ? emptyarray.push(i) : null;
  }
  return emptyarray.length;
}

console.log(getDivisorsCnt(30));

//Are the numbers in order?
//https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr) {
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] > arr[z + 1]) {
      return false;
    }
  }

  return true;
}

console.log(inAscOrder([1, 2, 3, 4, 5, 7]));

//Testing 1-2-3
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
var number = function (array) {
  return array.map((elm, index) => `${index + 1} : ${elm}`);
};

console.log(number(["a", "b", "c"]));
//Make a function that does arithmetic!
//https://www.codewars.com/kata/583f158ea20cfcbeb400000a
function arithmetic(a, b, operator) {
  let operations = {
    add: () => a + b,
    subtract: () => a - b,
    multiply: () => a * b,
    divide: () => a / b,
  };

  return operations[operator]();
}

console.log(arithmetic(1, 2, "add"));
//Remove anchor from URL
//https://www.codewars.com/kata/51f2b4448cadf20ed0000386
function removeUrlAnchor(url) {
  let obj = {
    "#": "#",
    "/": "/",
    "?": "?",
  };

  return url
    .split("")
    .map((elm) => elm.replace(obj[elm], " "))
    .join("")
    .split(" ")[0];
}

console.log(removeUrlAnchor("www.codewars.com/katas/?page=1#about"));

//Friend or Foe?
//https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends) {
  return friends.filter((elm) => elm.length == 4);
}

console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])
);
//Two to One
//https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  return [...new Set(s1.concat(s2).split(""))].sort().join("");
}

console.log(longest("inmanylanguages", "theresapairoffunctions"));
//Sum of two lowest positive integers
//https://www.codewars.com/kata/558fc85d8fd1938afb000014
function sumTwoSmallestNumbers(numbers) {
  return numbers
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((a, b) => a + b);
}

console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]));
//Odd or Even?
//https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(array) {
  const res = array.reduce((x, y) => x + y);
  return Math.abs(res) % 2 == 0 ? "EVEN" : "ODD";
}

console.log(oddOrEven([1023, 1, 3]));
//Smallest value of an array
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0
function min(arr, toReturn) {
  let result = {
    value: () => Math.min(...arr),
    index: () => arr.indexOf(Math.min(...arr)),
  };

  return result[toReturn]();
}

console.log(min([8, 2, 3, 4, 5], "value"));
//Mumbling
//https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
function accum(s) {
  const double = s.split("").map((elm, index) => elm.repeat(index + 1));

  return double
    .map((elm) => elm.replace(elm.charAt(0), elm.charAt(0).toUpperCase()))
    .join("-");
}

console.log(accum("cwAt"));

//String Merge!
//https://www.codewars.com/kata/597bb84522bc93b71e00007e
function stringMerge(string1, string2, letter) {
  return (
    string1.slice(0, string1.indexOf(letter)) +
    string2.slice(string2.indexOf(letter))
  );
}

console.log(stringMerge("wonderful", "people", "e"));
//JavaScript Array Filter
//https://www.codewars.com/kata/514a6336889283a3d2000001
function getEvenNumbers(numbersArray) {
  return numbersArray.filter((elm) => elm % 2 !== 1);
}

console.log(getEvenNumbers([1, 2, 3, 6, 8, 10]));
//Lost number in number sequence
//https://www.codewars.com/kata/595aa94353e43a8746000120
function findDeletedNumber(arr, mixArr) {
  const finalResult = arr.filter((elm) => (mixArr.includes(elm) ? 0 : elm));

  return finalResult.length <= 0 ? 0 : finalResult.join("");
}

console.log(
  findDeletedNumber([1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 9, 7, 4, 6, 2, 3, 8])
);
//Simple consecutive pairs
//https://www.codewars.com/kata/5a3e1319b6486ac96f000049
function pairs(ar) {
  let final = 0;

  for (let i = 0; i < ar.length; i += 2) {
    if (Math.abs(ar[i] - ar[i + 1]) == 1) {
      final += 1;
    } else {
      final;
    }
  }

  return final;
}

console.log(pairs([73, 72, 8, 9, 73, 72]));

//Return a string's even characters.
//https://www.codewars.com/kata/566044325f8fddc1c000002c
function evenChars(string) {
  const li =
    string.length > 100
      ? "invalid string"
      : string
          .split("")
          .map((elm, index) => ((index + 1) % 2 === 0 ? elm : null))
          .filter(Boolean);

  return li.length == 0 ? "invalid string" : li;
}

console.log(evenChars("abcdefghijklm"));

//SillyCASE
//https://www.codewars.com/kata/552ab0a4db0236ff1a00017a

function sillycase(elm) {
  return (
    elm.slice(0, Math.round(elm.length / 2)).toLowerCase() +
    elm.slice(Math.round(elm.length / 2)).toUpperCase()
  );
}

console.log(sillycase("foobar"));
