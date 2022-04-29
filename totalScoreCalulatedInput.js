//Write a function thats going to take an array of integers, goal of the function is to keep a total score but the total score is calculated based on the following:
//Add one point, for every even number in the array, add 3 points for every odd number in the array, if the value of that number ever equals 5, it no longer gets awarded 1 or 3, instead gets awarded five points.

const input1 = [1, 2, 3, 4, 5];
const input2 = [17, 19, 21];
const input3 = [5, 5, 5];

function getCalculatedScore(arr) {
  let totalScore = 0;

  arr.forEach((num) => {
    if (num === 5) {
      totalScore += 5;
      return;
    }

    //used to determine even or odds
    if (num % 2 == 0) {
      totalScore += 1;
    } else {
      totalScore += 3;
    }
  });

  return totalScore;
}
console.log(getCalculatedScore(input1));
console.log(getCalculatedScore(input2));
console.log(getCalculatedScore(input3));
