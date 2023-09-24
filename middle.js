const assertArrayEqual = function (array1, array2) {
  let message = "";
  if (eqArrays(array1, array2)) {
    message = `✅✅✅ Assertion Passed: ${array1} === ${array2}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${array1} !== ${array2}`;
  }
  return message;
};
const eqArrays = function (arr1, arr2) {
  //checking if the length is the same
  if (arr1.length !== arr2.length) {
    return false;
  }
  // loop each item to compare if the are the same
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const middle = function (array) {
  let result = [];
  let index = Math.floor(array.length / 2);
  let index2 = Math.floor(array.length / 2 - 1);
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    result.push(array[index]);
  } else {
    result.unshift(array[index]);
    result.unshift(array[index2]);
  }
  return result;
};

console.log(middle([1]));
console.log(middle([1, 2]));
console.log(middle([1, 2, 3]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

console.log(assertArrayEqual(middle([1, 2, 3]), [2]));
console.log(assertArrayEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]));
console.log(assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]));

