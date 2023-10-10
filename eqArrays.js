
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

module.exports = eqArrays;