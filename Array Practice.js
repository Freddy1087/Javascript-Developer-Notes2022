// *** Array Practice ***

//Add by 1 to each element in a numbers Array using map()

const arrOfNums = [1, 2, 3, 4, 5];
console.log(arrOfNums.map((i) => i + 1)); //Shows [2, 3, 4, 5, 6]

//Creating a function that adds by 5 to each element in a numbers Array
//Using a FOR LOOP

function addByFive(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 5);
  }
  return newArr;
}

console.log(addByFive(arrOfNums)); //Shows [6, 7, 8, 9, 10]

// Add all elements of an array together using reduce()

const arrOfNums2 = [25, 50, 75, 100];
console.log(arrOfNums2.reduce((a, b) => a + b)); //Shows 250

// Add all elements of an array by looping

const arrOfNums3 = [2, 4, 6, 8];
let sumOfNums3 = 0;
for (let i = 0; i < arrOfNums3.length; i++) {
  sumOfNums3 += arrOfNums3[i];
}
console.log(sumOfNums3); //Shows 20

// Accessing elements in an array

const fruits = ["apples", "oranges", "pears", "bananas"];
console.log(fruits[fruits.length - 1]); // Shows last element aka bananas
console.log(fruits[1]); //Shows oranges

// Altering elements in an array

const carMakes = ["BMW", "Honda", "Jeep", "Toyota"];
carMakes.push("Audi", "VW"); // Adds Audi and VW to the end of the carMakes array
carMakes.pop(); // Removes the last element in an array aka VW
console.log(carMakes);

carMakes.shift(); // Removes the first element in an array aka BMW
carMakes.unshift("Tesla"); // Adds Tesla to the front of the array
console.log(carMakes);

// Combining / Merging two (or more) separate arrays | Creates a new array

const colors1 = ["red", "blue"];
const colors2 = ["yellow", "brown"];
const colors3 = ["black", "purple"];
const allTheColors = colors1.concat(colors2, colors3);
console.log(allTheColors);

console.log(colors2.concat(colors1, colors3));
