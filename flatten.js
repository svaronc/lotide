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

const flatten = function (array) {
  let resutl = [];
  for (const arr of array) {
    if (Array.isArray(arr) === true) {
      for (const value of arr) {
        resutl.push(value);
      }
    } else {
      resutl.push(arr);
    }
  }
  return resutl;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(
  assertArrayEqual(flatten([1, 2, [3, 4], 5, [6, 7]]), [1, 2, 3, 4, 5, 6, 7])
);
