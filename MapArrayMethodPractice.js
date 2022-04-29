// Array map() Practice

const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt); // Square roots each element in the array
console.log(newArr); // Shows [2, 3, 4, 5]

const numbers1 = [65, 44, 12, 4];
const newArr1 = numbers.map(myFunction); //Creates a new array that has a function call on the numbers array.

function myFunction(num) {
  return num * 10;
} //Function takes the input and multiplies it by 10 and returns the product.

console.log(newArr1); // Shows [650, 440, 120, 40]

const tips = [20, 50, 100];
const tipsAndDailyWage = tips.map((i) => i + 15); // Adds 15 to each element in the array

console.log(tipsAndDailyWage); // Shows [35, 65, 115]

const tips2 = [10, 20, 30];
console.log(tips2.map((i) => i + 15)); //Shows an array of [25, 35, 45]
console.log("***");
tips2.forEach((i) => console.log(i + 15)); //Shows each element one by one, in a descending list
console.log("***");
tips2.forEach((i) => console.log(i)); //Shows each element one by one, no mutations, in a descending list

// Adding strings to each element in an array

const names = ["Freddy", "Elias", "Farid"];
console.log(names.map((i) => i + "-san"));
names.map((i) => console.log(i + "-san"));
