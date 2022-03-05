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

  if (value > 18) {
    decideage = `Your${value} Years Old Eligble For Vote`;
  } else if ((value = 0)) {
    decideage = `Please Enter Your age`;
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
//--------- Loop ---------    END
