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
//--------- Loop ---------    END
