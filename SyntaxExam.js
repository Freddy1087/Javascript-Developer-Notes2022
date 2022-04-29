let x;

const y = 5;

for (let i = 0; i < y; i++) {
    console.log(returnString(i))
};

// ***** ***** *****

function returnString(string) {
    return string
};

const arr = [];

arr.push(returnString('string 1'));
arr.push(returnString('string 2'));

console.log(arr);


arr.pop()
console.log(arr);

arr.unshift('Interview Accepted');

console.log(arr)

const ageArr = [{ age: 21 }, { age: 5 }, { age: 55 }];

// console.log(ageArr)

ageArr.forEach(obj => {
    console.log(obj.age)
});

function getAndAddNamePropertyToObjectInArray(arr) {
    ageArr.forEach(obj => {
        obj.name = 'Pablo'
    })
    return arr
};


const addNamePropToArr = getAndAddNamePropertyToObjectInArray(ageArr);
console.log(addNamePropToArr)


// ************************* END OF EXAM **********************************

const bills = [{ total: 25, percentage: 20 }, { total: 50, percentage: 18 }, { total: 75, percentage: 15 }, { total: 100, percentage: 22 }];
const tips = [];
const totals = [];

function getCalcTip(totalBill, percentage) {
    return totalBill * (percentage / 100)
}

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i], 20)
//     tips.push(tip)
//     totals.push(tip + bills[i])
// };

function getCalcTipsByArrayOfObjects(arr) {
    // arr.forEach(obj => {
    //     calcTip(obj.totalBill, obj.percentage)
    // })
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i]
        const workedHard = getCalcTip(obj.total, obj.percentage);
        // arr[i]===obj
        obj.tip = workedHard
    }
    return arr
};

console.log(getCalcTipsByArrayOfObjects(bills))

// Variable Arrow Function 

const getHelloWorld = (() => {
    return ('Hello world!')
});

console.log(getHelloWorld())

function getWater() {
    return 'Water'
};

console.log(getWater())