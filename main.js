// ___________________________varian 1__________________________
let getNumFirst = Number(prompt("Enter first number"));
let getNumSecond = Number(prompt("Enter second number"));
let getNumThird = Number(prompt("Enter third number"));

let arrTotalNum = [getNumFirst, getNumSecond, getNumThird];

let sum = 0;

for (let i = 0; i < arrTotalNum.length; i++) {
  sum += arrTotalNum[i];
}

let middleValue = sum / arrTotalNum.length;

alert(`middle value = ${middleValue}`);

// ___________________________varian 2__________________________

// let getNumFirst = Number(prompt("Enter first number"));
// let getNumSecond = Number(prompt("Enter second number"));
// let getNumThird = Number(prompt("Enter third number"));

// let sum = getNumFirst + getNumSecond + getNumThird;

// let middleValue = sum / 3;

// alert(`middle value = ${middleValue}`);
