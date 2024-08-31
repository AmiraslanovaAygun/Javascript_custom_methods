// JAVASCRIPT METHODS

let array = [10, 2, 80, -10, -20, 52, -11, 25, -6, 38];
console.log(array);

// filter method

function filter(arr, checkedFunction) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (checkedFunction(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

let lastArray = filter(array, function (number) {
  return number % 10 == 0 && number < 0;
});

console.log(`Filter Method : ${lastArray}`);

//Every method

function every(arr, checkedFunction) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkedFunction(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  if (arr.length == newArr.length) {
    return true;
  } else return false;
}

let boolEvery = every(array, function (number) {
  return number > 0;
});

console.log(`Every Method : ${boolEvery}`);

//Some method

function some(arr, checkedFunction) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkedFunction(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  if (newArr.length != 0) {
    return true;
  } else return false;
}

let boolSome = some(array, function (number) {
  return number > 100;
});

console.log(`Some Method : ${boolSome}`);

//Reduce method

function reduce(arr, checkedFunction) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = checkedFunction(sum, arr[i]);
  }
  return sum;
}

let reduceResult = reduce(array, function (acc, curVal) {
  return acc + curVal;
});

console.log(`Reduce Method : ${reduceResult}`);

//Find method

function find(arr, checkedFunction) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (checkedFunction(arr[i])) {
      newArr.push(arr[i]);
      break;
    }
  }

  return newArr[0];
}

let findResult = find(array, function (number) {
  return number < 0;
});

console.log(`Find Method : ${findResult}`);

//Include method

function include(arr, checkedFunction) {
  for (let i = 0; i < arr.length; i++) {
    if (checkedFunction(arr[i])) {
      return true;
    } else return false;
  }
}

let includeResult = include(array, function (number) {
  return number == 10;
});

console.log(`Include Method : ${includeResult}`);

//Sort method

function sort(arr) {
  let newArr = [];

  while (arr.length > 0) {
    let minElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (minElement > arr[i]) {
        minElement = arr[i];
      }
    }
    newArr.push(minElement);
    let str = arr.splice(arr.indexOf(minElement), 1);
  }

  return newArr;
}

let sortResult = sort(array);

console.log(`Sort Method : ${sortResult}`);
