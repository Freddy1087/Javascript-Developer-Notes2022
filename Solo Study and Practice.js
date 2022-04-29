function returnFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

console.log(returnFullName(`Freddy`, `Mejia`));

function howOld(person) {
  return 2022 - person.yearBorn;
}

const freddy = { yearBorn: 1987 };
console.log(howOld(freddy));

function returnAsterisk(num) {
  if (num < 1) {
    return;
  }
  console.log(`*`);
  const subtractNum = num - 1;
  return returnAsterisk(subtractNum);
}

returnAsterisk(5);

num = num - 1; // explicit example
num--; //this will actually return what the value would be.
--num; // reassign the new value back to the value

function aggregateAsterisk(num, arr) {
  if (num < 1) {
    return console.log(arr.join(""));
  }
  const subtractNum = num - 1;
  arr.push(`*`);
  return aggregateAsterisk(subtractNum, arr);
}

// aggregateAsterisk(5, [])

for (let i = 0; i < 5; i++) {
  aggregateAsterisk(i * 10, []);
}

//dynamic array

//recursive function - a function that calls itself over and over till it's condition is met.

// Solo studying below!

const numbers = [25, 50, 75, 100];
let output = 0;

// for (let i = 0; i < numbers.length; i++) {
//     output += numbers[i];
// };
// console.log(`The product is ${output}`);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(numbers));

// console.log(numbers[0] + numbers[1] + numbers [2] + numbers [3]); aka horrible way to code

// console.log(`The product is ${output}`);

// const numbers = [25, 50, 75, 100].reduce((partialSum, a) => partialSum + a, 0); //also adds all the elements in an array
// console.log(numbers)

// const bills = [50, 60, 90, 100]
// const tips = [];
// const totals = [];

// function calcTip(billArr) {
//     return billArr * 0.2
// };

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(tip + bills[i])
// };

// console.log(bills, tips, totals);

// function calcAverage(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));

// Preparing for the Syntax Exam below!

// []
// {}
// o = 5;
// o*= 5
// console.log(o)

// // let x = 2 + 3 + "5";

// let x = "John Doe";

// x = 0;``
// console.log(x)

let x = 5;
let y = 5;
let z = 6;
console.log(x == y); // Returns true
console.log(x == z); // Returns false

const cars = ["Saab", "Volvo", "BMW"];
let car = cars[0];
console.log(car);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit, fruits)

// IF and ELSE practice

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits[fruits.length - 1]);

hour = 12;
if (hour < 11) {
  console.log("Good morning mate!");
} else if (hour == 12) {
  console.log(`It's high noon!`);
} else {
  console.log(`Good evening!`);
}

//Switch Statement Exercise

const per = "cynthia";
switch (per) {
  case "andrew":
    console.log(`Andrew has dark hair`);
    break;
  case "fredz":
    console.log(`Cool dude Fredz!`);
    break;
  case "cynthia":
    console.log(`Youngest one! CMM`);
    break;
}

const bills = [10, 50, 100, 500];
const tips = [];
const totals = [];

function calcTip(billsArr) {
  return billsArr * 0.2;
}

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(bills), calcAverage(tips), calcAverage(totals));
