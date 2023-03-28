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
