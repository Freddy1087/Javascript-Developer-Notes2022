// Fun w/ Functions!

hello = function () {
  return "Hello World!";
}; //Function Declaration

function hi() {
  return "High in the Sky!";
} //Function Expression

arrow = () => "Arrows from the North";

console.log(hello());
console.log(hi());
console.log(arrow());

// Function that returns the average numbers from elements of an Array

function getCalcAverageOfArray(arr) {
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }
  return sumOfArr / arr.length;
}

const moneyArr = [10, 30, 50];
console.log(getCalcAverageOfArray(moneyArr));

// Function that reverses each word in the string. All spaces to be retained.

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// A function which converts the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

// A function that calculates the average of the numbers in an array

function find_average(array) {
  if (array == 0) {
    return 0;
  } else {
    return array.reduce((a, b) => a + b) / array.length;
  }
}
// Alernate / Refactored
function find_average(array) {
  return array == 0 ? 0 : array.reduce((a, b) => a + b) / array.length;
}
