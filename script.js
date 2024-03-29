// Template Strings
// https://github.com/jonasschmedtmann/complete-javascript-course/blob/master/02-Fundamentals-Part-2/final/script.js
var grettings = "Good Morning";

console.log("Hello," + grettings + " Have a Nice Day");

console.log(`Hello ${grettings} Have a Nice Day`);

//-----------  Array --------------   START

const array_01 = ["Alex", "Balaji", "Chitra"];

console.log(array_01[0]);

console.log(array_01.length);

//--- Add Methods
const array_02 = ["Rio", "Denver", "Raqul"];
const array_02a = ["tiger", "bear", "monkey"];
const array_02b = ["Rio", "Denver", "Raqul"];
const array_02c = ["tiger", "bear", "monkey"];

array_02.push("Professor"); //Last Element Add

array_02a.unshift("lion"); // First Element Add

array_02b.pop(); // Last Element Remove
array_02c.shift(); // First Element Remove

console.log(array_02, "array_02");

console.log(array_02a, "array_02a");
console.log(array_02b, "array_02b");
console.log(array_02c, "array_02c");

const text = "Hello Balaji What Are hell Doing ?";

console.log(text.indexOf("Balaji"));
console.log(text.includes("Balaji")); // return true or false
console.log(text.includes("Alex")); // return true or false

// Map

const Mapdata = ["Balaji", "Alex", "Chitra"];

const Mapmethod = Mapdata.map((item) => {
  return item === "Chitra" ? "Correct" : "NotCorrect";
});

console.log(Mapmethod, "Mapmethod");

// Filter

const Filtermethod = Mapdata.filter((elm) => elm !== "Balaji");

console.log(Filtermethod, "Filtermethod");

//-----------   Array --------------   End

// ---------- Object ------------  START

const details = {
  name: "Balaji",
  country: "India",
};

console.log(
  "Hello,Myname is " + details.name + " My Country Name Is " + details.country
);

console.log(`Hello ${details.name}`);

//Object Array

const details2 = {
  actors: ["Rio", "Denver"],
};

// const [Name, LastName] = details2.actors;

const {
  actors: [Name, LastName],
} = details2;

console.log(`Hello ${Name}`);

//Object  Function

const age = {
  DOY: 2000,

  currentage: function () {
    return 2022 - this.DOY;
  },
};

console.log(`${age.currentage()} Years Old`);

//Object all

const allDetails = {
  Name: "Rio",
  From: "Mumbai",
  Friends: ["Denver", "Narobi", "Tokoyo"],

  mydata: function (greetings) {
    const data = `${greetings} My name is ${this.Name}, I am From ${this.From}, Please Meet to My Friends ${this.Friends[0]} and ${this.Friends[2]}`;

    return data;
  },
};

console.log(allDetails.mydata("Hello"));
// ----------- Object ---------     END

//----- Loop -----------    START

//If loop

const election = function () {
  const value = prompt("What is Your age For Election Vote", " ");

  var decideage;

  if (value >= 18) {
    decideage = `Your ${value} Years Old Eligble For Vote`;
  } else {
    decideage = `Your ${value} Years Old Not Eligble For Vote`;
  }

  window.alert(decideage);
};

document.querySelector(".if_condition").addEventListener("click", function () {
  election();
});

// For loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// For Condition with array

var city = ["chennai", "madurai", "banglore", "delhli", "kerala"];

var length = city.length;

for (let i = 0; i <= length - 1; i++) {
  console.log(`My Favourite City Name is ${city[i]}`);
}

// For Condition With Object
var details_names = [
  { Name: "Apple", Id: "123xx", Place: "Chennai" },
  { Name: "Banana", Id: "123xx", Place: "Mumbai" },
  { Name: "Cherry", Id: "123xx", Place: "Kovai" },
  { Name: "Watermelon", Id: "123xx", Place: "Kerala" },
];

var length_details = details_names.length;

for (let i = 0; i <= length_details - 1; i++) {
  console.log(
    `Welcome ${details_names[i].Name} Your ID: ${details_names[i].Id} Place:${details_names[i].Place} `
  );
}

document.querySelector(".demo").innerHTML = "Hello";

// For Of

const numbers = ["One", "Two", "Three", "Four", "Five"];

for (const list of numbers) {
  console.log(list); // List Display Elements
}

for (const listElement in numbers) {
  console.log(listElement); // List Display Index
}

//Switch

let switch_value = "2";

switch (switch_value) {
  case "0":
    console.log("You enter 0");
    break;
  case "1":
    console.log("You enter 1");
    break;
  default:
    console.log("Not");
}

// While

var x = 1;

while (x <= 5) {
  console.log(x);
  x++;
}

// Do - while

var y = 10;

do {
  console.log(y);
  y++;
} while (y <= 15);

// Break(left condition)

for (var x = 1; x <= 5; x++) {
  if (x == 3) {
    break;
  }

  console.log(x);
}

// Continue(omitted condition)

for (var y = 1; y <= 5; y++) {
  if (y == 3) {
    continue;
  }
  console.log(y);
}

//--------- Loop ---------    END

// ---------- Function -------------- START

// Function Declartion

function myself(myname) {
  return "Hello " + myname;
}

console.log(myself("Balaji"));

// Function Expression
const myself2 = function (myname2) {
  return `Hello ${myname2}`;
};

console.log(myself2("Rio"));

// Arrow Function

const myself3 = (myname3) => `Hello ${myname3}`;

console.log(myself3("Denver"));

// Methods Of Function  -> START

// Pass Multiple Argument Though Function with Object

var countryDetails = function ({ countryName, population, captial }) {
  return (
    "I am From " +
    countryName +
    " My Country Ovarall Population in World " +
    population +
    "." +
    captial +
    " Is Captial Of India"
  );
};
console.log(
  countryDetails({
    countryName: "India",
    population: "130 Million",
    captial: "Delhi",
  })
);
// Pass Multiple Argument Though Function with array
var countryDetails02 = function ([mycountry, ourpm]) {
  return (
    "My Country Name is " + mycountry + " Our Primeminister name is " + ourpm
  );
};
console.log(countryDetails02(["India", "Modi"]));
// Methods Of Function  -> END
// Default Parameter

var defaultParameter = function (name, says = "Good Morning") {
  return "Hello " + name + "," + says;
};
console.log(defaultParameter("Balaji"));

// Methods of Function  ->END

// Ternary Operator

var mark = 40;

var result = mark > 40 ? "Pass" : "Fail";

console.log(result);

// Nullish coalescing operator

const value2 = 0;
const value3 = 1;
// without Nullish
const nullish_operator = value2 || value3;
console.log(nullish_operator);

//with Nulliesh Operator
const nullish_operator_with = value2 ?? value3;

console.log(nullish_operator_with);
// Optional Chaining

const optionalChaining = {
  // Name: "balaji",
};
// without Optional Chaining
console.log(optionalChaining.Name);
// with Optional Chaining
console.log(optionalChaining?.Name ?? "You Enter Wrong Key");

// Spread Opeator

var arrayOne = ["Tiger", "Lion"];

var arrayTwo = ["Rio", "Narobi", "Denver", "Professor"];

console.log([...arrayOne, ...arrayTwo]);

// list item

const merge = [...arrayOne, ...arrayTwo];

for (const list of merge) {
  console.log(list);
}

// Call Back Function (A callback is a function passed as an argument to another function)

function personalDetails(todayage) {
  console.log("I am " + todayage + " Years Old ");
}

function currentAge(doy) {
  var ageCaluate = 2020 - doy;
  return personalDetails(ageCaluate);
}

currentAge("2000");

// function greeting(name) {
//   alert("Hello " + name);
// }

// function processUserInput(callback) {
//   var name = prompt("Please enter your name.");
//   callback(name);
// }

// processUserInput(greeting);

function currentage(age) {
  console.log("second");
  console.log(2022 - age);
}

function myyear(year) {
  console.log("first");
  var age = "1994";
  year(age);
}

myyear(currentage);

// Higher Order Function (Pass Arugment(function))

function morning() {
  return "Hello Good Morning";
}

function day() {
  return "Have A Nice Day";
}

function message(morning, day) {
  return morning + " ," + day;
}

console.log(message(morning(), day()));

// Promise

function eligablevote() {
  console.log("Success");
}

function noteligablevote() {
  console.log("Fail");
}

let Promis = new Promise(function (myReslove, myReject) {
  var yourAge = 28;

  if (yourAge >= 18) {
    myReslove();
  } else {
    myReject();
  }
});

Promis.then(
  function (value) {
    eligablevote();
  },
  function (error) {
    noteligablevote();
  }
);

// console.log(Promis, "Promis");
var xset = 5;
var newPromismethod = new Promise(function (reslove, reject) {
  setTimeout(() => {
    if (xset <= 25) {
      reslove("Promise Realsed");
    } else {
      reject("Reject Promise");
    }
  }, 2000);
}).then(
  function (resvalue) {
    console.log(resvalue);
  },
  function (rejvalue) {
    console.log(rejvalue);
  }
);

console.log(newPromismethod, "newPromismethod");

let conditions = true;

const proms = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (conditions) {
      resolve("Hello");
    } else {
      reject("This condition faild");
    }
  }, 2000);
});

proms
  .then((result) => {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// Call(call() method, you can write a method that can be used on different objects.The call() method takes arguments separately.)

const information = {
  informationData: function () {
    console.log(this.Name + " Is a " + this.Job);
  },
};

const person1 = {
  Name: "Balaji",
  Job: "React Js Developer",
};

const person2 = {
  Name: "Alex",
  Job: "Angular JS Developer",
};

const person3 = {
  Name: "Rio",
  Job: "UI/UX Developer",
};

const objectcall = information.informationData;

objectcall.call(person1);

objectcall.call(person2);

objectcall.call(person3);

// Apply (apply() method, you can write a method that can be used on different objects.apply() method takes arguments as an array.)

var employeeDetails = {
  biodata: function (Company, district, state) {
    console.log(
      this.Name +
        " is a " +
        this.Job +
        ",He is Working " +
        Company +
        ",He is From " +
        district +
        " at " +
        state
    );
  },
};

var employee1 = {
  Name: "Balaji",
  Job: "React Js Developer",
};

var employee2 = {
  Name: "Rio",
  Job: "UI/UX Developer",
};

var employee3 = {
  Name: "Alex",
  Job: "Angular JS Developer",
};

var detailsOfArea01 = ["ZOHO", "Chennai", "Tamilnadu"];
var detailsOfArea02 = ["TCS", "Banglore", "Karnataka"];
var detailsOfArea03 = ["ZOHO", "Hydreabad", "Andhra Pradesh"];
var objectapply = employeeDetails.biodata;

objectapply.apply(employee1, detailsOfArea01);
objectapply.apply(employee2, detailsOfArea02);
objectapply.apply(employee3, detailsOfArea03);

// Bind bind() method, an object can borrow a method from another object.

var bind = objectapply.bind(employee1);

var bind2 = objectapply.bind(employee2);
var bind3 = objectapply.bind(employee3);

bind(...detailsOfArea01);
bind2(...detailsOfArea02);
bind3(...detailsOfArea03);

// ------------- Function --------------- END

// ------------ Scope -------     START

// globalscopt (Variable declare in outerfunction  access in everywhere function inside and outside)
var a = 1;

function globalScope() {
  console.log(a); // Inner Function
}
globalScope();
console.log(a); // Outer Function

// Local Scope(Variable declare in inner function access in only inside function not outer function)

function localScope() {
  var b = "Hello Javascript Developer";
  console.log(b); //
}
localScope();
// console.log(b); // defined
// ------------- Scope ------- END

// --------- Strings Tools ----- START

// indexof

var index01 = "Hello Balaji How Are YOu Balaji?";

console.log(index01.indexOf("Balaji")); // First Match return
// lastindexof
console.log(index01.lastIndexOf("Balaji")); // Last Match return
// slice
console.log(index01.slice("13", "20"));

console.log(index01.slice(-7));

//tolowercase

console.log(index01.toLowerCase());

// touppercase

console.log(index01.toUpperCase());

//trim

var text2 = "  Hello World";
console.log(text2.trim()); // Remove Spaces

// Replace

var text3 = "Rio Is a ReactJS Developer";

console.log(text3.replace("ReactJS", "AngularJS").replace("Rio", "Balaji"));

// Global Replace

var text4 = "Hello Denver, How are you Denver ?";

console.log(text4.replace(/Denver/g, "Professor"));

// startswith() endsWith() returns true if a string ends with a specified string,

var text5 = "Rio Is a ReactJS Developer";

console.log(text5.startsWith("Rio"));

console.log(text5.startsWith("Is"));

console.log(text5.endsWith("Developer"));

console.log(text5.endsWith("ReactJS"));

// Split

var text6 = "Hello Balaji How are you doing";

var myArray = text6.split(" ");

console.log(myArray);

console.log(myArray[1]);

// Join join() returns an array as a string

var fruitsList = ["Apple", "Orange", "Cherry", "Mango"];

console.log(fruitsList.join(" and "));

// Pad Start and Pad End The padStart() method pads a string with another string

var textLast = " Balaji How are You Doing ?";

console.log(textLast.length);

console.log(textLast.padStart(32, "Hello"));

var textLast02 = "How are ";
console.log(textLast02.length);

console.log(textLast02.padEnd(13, "You ?"));

// Repeat

var textLast03 = "Hello Developer ";

console.log(textLast03.repeat(10));

// ------------  Strings Tools --- END

// -----  Array Tools -------- START

//slice

var arrayText = ["appple", "banana", "cherry", "graps", "mango"];

var slice = arrayText.slice(0, 2);
console.log(slice);

//reverse

console.log(arrayText.reverse());

// concat

var arrayName01 = ["a", "b", "c", "d", "e"];

var arrayName02 = ["f", "g", "h"];

console.log(arrayName01.concat(arrayName02));
//alternative
console.log(...arrayName01, ...arrayName02);

// Foreach forEach() calls a function for each element in an array

var arrayName03 = ["Rio", "Denver", "Alex", "Professor", "Tokoyo"];

arrayName03.forEach(function (item, index) {
  console.log(`${index} For ${item}`);
});

// Filter

var arrayName04 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

var filterMethod = arrayName04.filter(function (numbers) {
  return numbers > 30;
});

console.log(filterMethod);

// Reduce The reduce() method executes a reducer function for array element.

const arrayName05 = [1, 2, 3, 4, 5];

const reduceMethod = arrayName05.reduce(function (acc, current) {
  return acc + current;
});

console.log(reduceMethod);

// Min and Max

// MinValue

var arrayName06 = [5, 10, 15, 20, 25];

const minValue = arrayName06.reduce(function (acc, value) {
  if (acc < value) {
    return acc;
  } else {
    return value;
  }
});

console.log(minValue);

// Max value
const maxValue = arrayName06.reduce(function (acc, current) {
  if (acc > current) {
    return acc;
  } else {
    return current;
  }
});

console.log(maxValue);

//How to fill empty Array

var dataarray = [10, 20, 30, 40, 50];

var emptyarray = [100, 200, 300, 400, 500];

var pushArray = dataarray.filter(function (numbers) {
  return numbers < 30;
});
var pushArrayNew;
for (pushArrayNew of pushArray) {
  emptyarray.push(pushArrayNew);
}

console.log(emptyarray);

// ---------- Array Tools --------- END

// ----------- SetIntervel & SetTimeout ---- START
//clearTimeout(),clearInterval()
// setTimeout execute function just one time
// setInterval execute function unlimited times

var setTime = setTimeout(setMyFunction, 1000);

function setMyFunction() {
  document.getElementById("timeout").innerHTML =
    "<p>Hello I am SetTimeout Method</p>";
}
/*
var setInter = setInterval(setMyFunction2V, 1000);

function setMyFunction2V() {
  document.getElementById("inter").innerHTML +=
    "<p> Hello I am SetIntervel Method</p>";
}
*/

// Image Change Automatic

var imageSources = ["images/css.jpg", "images/Js.png", "images/html.png"];
var imageDescription = ["CSS", "JAVASCRIPT", "HTML"];
var index = 0;
setInterval(function () {
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  document.getElementById("texts").innerHTML = imageDescription[index];
  index++;
}, 2000);

// ----------- SetIntervel & SetTimeout ---- END

// ----------- Create Element --------- START

/* 
Reference Site: https://www.w3schools.com/jsref/met_document_createelement.asp 

append() method inserts a set of Node objects or DOMString objects after the last child of the Element 
DOMString objects are inserted as equivalent Text nodes.

*/

const modelFunction = function () {
  const model = document.createElement("div");
  model.className = "Model";

  const tag = document.createElement("p");

  tag.className = "tagP";

  tag.textContent = "Hello Create Element";

  model.append(tag);

  document.body.appendChild(model);
};

document
  .querySelector(".createElements")
  .addEventListener("click", function () {
    modelFunction();
  });

//------------------- Create Element ------------- END

// ------------------ DOM JS ------------------ START

document.getElementById("imageDOM").src =
  "https://static.javatpoint.com/blog/images/mern-stack.png";

document.getElementById("cssDOM").style.color = "red";
document.getElementById("cssDOM").style.backgroundColor = "green";

function changetext(argument) {
  argument.innerHTML = "Clicked";
}
function changetextV2() {
  document.getElementById("changetextV2").innerHTML = "Clicked Version 2";
}

function clickEvent() {
  alert("Onclick Event");
}

function mOver(argument) {
  argument.innerHTML = "Hovered";
}

function mOut(argument) {
  argument.innerHTML = "Mouse Over Me";
}

function removeElement() {
  document.getElementById("removeElement").remove();
}

document.getElementsByClassName("Domclass")[0].innerHTML = "Hello Class";

document.getElementsByClassName("Domclass")[1].innerHTML = "Hello Class 01";

document.getElementsByClassName("Domclass")[2].innerHTML = "Hello Class 02";

function Setimage() {
  document.getElementsByClassName("Setdom")[0].innerHTML =
    " !!!! Change Text !!!!";

  document.getElementsByClassName("Setdom")[1].style.backgroundColor = "red";
  document
    .getElementsByClassName("Setdom")[2]
    .setAttribute(
      "src",
      "https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png"
    );
  document.getElementsByClassName("Setdom")[2].style.width = "200px";
  document.getElementsByClassName("Setdom")[2].style.height = "120px";
}

document.getElementById("getURL").innerHTML = document.URL;

// ------------------- DOM JS -------------------- END

// ------------------------- ASYNC/AWAIT ---------- START

const data = async () => {
  const reponse = await fetch("https://jsonplaceholder.typicode.com/todos");

  console.log(reponse, "got");

  if (!reponse.ok) {
    console.log("----------------->Error");
  } else {
    const Detils = await reponse.json();
    console.log(Detils);
    return Detils;
  }
};

data();

// ------------------------- ASYNC/AWAIT ---------- END

//------------- try/catch

let valued = 7;

try {
  if (valued == 30) {
    console.log("Correct");
  } else if (valued >= 50) {
    throw "GREATER THAN";
  } else if (valued <= 50) {
    throw "Less THAN";
  }
  // if (valued >= 50) if (valued <= 50) throw "Less THAN";
} catch (err) {
  console.log(err);
}

const fff = async () => {
  const reponse = await fetch("./example.json");

  const Detilsdd = await reponse.json();

  const mapData = Detilsdd.map((elm, index) => {
    console.log(index);

    return elm.name;
  });

  document.getElementById("getURL").innerHTML = mapData;
  console.log(mapData, "Mapdata");
};

fff();

// --------- Javascript Topices Fetch APi

const topic = async () => {
  const res = await fetch("./Utils/Topices.json");
  // console.log(res, "res");

  let getSno;

  let getTopic;
  let getLink;
  if (!res.ok) {
    console.error("---404 Error ---");
  } else {
    const check = await res.json();
    // console.log(check, "SuccessFully");

    //Get SerialNumber
    getSno = check.map((elm) => {
      return elm.SNO;
    });
    // Get Topic

    getTopic = check.map((elm) => {
      return elm.Topic;
    });

    getLink = check.map((elm) => {
      return elm.Link;
    });
  }
  // console.log(getSno, getTopic, getLink, "getSno");

  if (!res.ok) {
    document.getElementById("topicno").innerHTML =
      ".....Under Maninteance.....";
  } else {
    for (var y = 0; y <= getSno.length - 1; y++) {
      // let dataa = getTopic[y];
      // console.log(dataa, "dataa");
      document.getElementById("getsno").innerHTML += getSno[y] + "<br>";

      // document.getElementById("topicno").innerHTML += getTopic[y] + "<br>";

      document.getElementById("link").innerHTML +=
        "<a href='" + getLink[y] + "' >" + getTopic[y] + "<br/>" + "</a>";
    }
  }
};
topic();

//Null vs Undefined

let Define;

// let Define = null;
console.log(Define, "Define");

console.log(typeof undefined);
console.log(typeof null);

console.log(null == undefined); //check value

console.log(null === undefined); // check datat type

//Difference between Let & Const & var

var job = "hhhh";
var job = "Hello";
console.log(job, "job");
let declare = "balaji";

declare = "hrrb";

console.log(declare, "declare");

//instanceof javascript

//Returns ture is an object is an instance of an object type

const Checkinstance = {
  name: "balaji",
  Clg: "SCAD CET",
};

console.log(job instanceof Object, "Instance");

console.log(Checkinstance instanceof Object, "Checkinstance");

//scope

//common approach
let ar = 10;
var b = 20;
const c = 30;

function globalscope() {
  console.log(ar, b, c);
}

globalscope();

console.log(ar, b, c);

//----------

//reasign  -- var and let
let d;
var e;

function secondglobalscope() {
  e = "h3llo";
  d = 30;
  e = "balaji";
  console.log(d, e);
}
secondglobalscope();

console.log(d, e);

//-----------
//     const f
//     function thirdglobalscope(){
//         f="Third"
//       console.log(f)
//     }
//   thirdglobalscope()
//     console.log(f)
//0/p->throw Error

//redeclare

var w = 20;
let wr = "hello";
function fourthglobalScope() {
  var w = 50;
  let wr = "Wednesnday";
  console.log(w, wr, "fourthglobalScope");
}

fourthglobalScope();
console.log(w, wr);

// redeclare

//all function expression
var one = "hjlll";
let two = "good";
var hellodd = function () {
  console.log(one, two);
};
hellodd();

console.log(one, two);

//nested function
var at = "hello";
function nested() {
  var at = "balaji";

  function nestedSecond() {
    var at = "javascript";

    console.log(at, "nestedSecond-->02");
  }
  console.log(at, "nestedSecond-->03");
  nestedSecond();
}

nested();
console.log(at, "nestedSecond-->01");
///-------->
// var x = 10;
// if (true) {
//   var x = 20;
//   console.log(x); // 20
// }
// console.log(x); // 20

//without var keyword

username = "Balaji";

function globalwithoutkey() {
  console.log(username);
}
globalwithoutkey();
console.log(username);
