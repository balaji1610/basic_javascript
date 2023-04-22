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
