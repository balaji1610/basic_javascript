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
