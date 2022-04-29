//Create every variable that exists in JS

const bool = false;
const str = "string";
const num = 14;
const arr = [];
const obj = {};
const und = undefined;
const nul = null;

//Create a variable that can have it's value changed

let a = 0;

//Create a for loop that loops 5x in increments line 13

for (let i = 0; i < 5; i++) {
  a += 1;
}
// console.log(a);

//push 17 objects into an array

for (let i = 0; i < 17; i++) {
  arr.push(obj);
}

console.log(arr);

//Print this in code

//array of strings, strings composing of "*"

const arrOfStringsStars = ["*", "*", "*", "*"];

for (let i = 0; i < arrOfStringsStars.length; i++) {
  console.log(arrOfStringsStars.slice(i, arrOfStringsStars.length).join(""));
}

// Create a function that takes amount of bunnies and returns two ears per bunny. Don't use for FOR loop, or multiplication.

//RECURSIVE FUNCTION

function getEarsFromBunny(ears, numOfBunnies) {
  if (numOfBunnies === 0) {
    return ears;
  } else {
    ears = ears + 2;
    numOfBunnies = numOfBunnies - 1;
    return getEarsFromBunny(ears, numOfBunnies);
  }
}

function getBunnyEars(bunnies, bunRecurFunction) {
  let bunnyEars = 0;

  return bunRecurFunction(bunnyEars, bunnies);
}

console.log(getBunnyEars(1, getEarsFromBunny));
console.log(getBunnyEars(2, getEarsFromBunny));
console.log(getBunnyEars(3, getEarsFromBunny));
console.log(getBunnyEars(4, getEarsFromBunny));
console.log(getBunnyEars(100, getEarsFromBunny));

// let test = 5;
// test = test + 3
// console.log(test);
