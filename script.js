// Template Strings

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

array_02.push("Professor");

array_02a.unshift("lion");

array_02b.pop();
array_02c.shift();

console.log(array_02);

console.log(array_02a);
console.log(array_02b);
console.log(array_02c);

const text = "Hello Balaji What Are hell Doing ?";

console.log(text.indexOf("Balaji"));
console.log(text.includes("Balaji"));
console.log(text.includes("Alex"));

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

console.log(`Hello ${details2.actors[1]}`);

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
    decideage = `Your${value} Years Old Eligble For Vote`;
  } else {
    decideage = `Your${value} Years Old Not Eligble For Vote`;
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
  console.log(list);
}

//Switch

let switch_value = "0";

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
