// Задание 1
function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  let avg = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
      if (arr[i] < min){
          min = arr[i];
      }
      if (arr[i] > max){
        max = arr[i];
      }
    }

avg = parseFloat((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}


// Задание 2
function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
let sum = 0;
for (let i=0; i < arr.length; i++) {
  sum += arr[i];
}
return sum;
}

console.log(summElementsWorker(10, 10, 11, 20, 10));

function differenceMaxMinWorker(...arr) {
  let array = [...arr];
  if (array.length === 0) {
    return 0
  }
  let max = Math.max(...array);
  let min = Math.min(...array);
  return max - min;
}
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10));

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    } else if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
  }
  let diff = sumEvenElement - sumOddElement;
  return diff;
}
console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17));
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35));

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let aver = sumEvenElement / countEvenElement;
  return aver;
}
console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); 

//Задача 3
function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const result = func(...arrOfArr[i]);
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    }
  }
  return maxWorkerResult;
}
