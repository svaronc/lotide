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

module.exports = flatten;
