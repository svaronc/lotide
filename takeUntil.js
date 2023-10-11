const takeUntil = function (array, callback) {
  let result = [];
  for (const arr of array) {
    let condition = callback(arr);
    if (!condition) {
      result.push(arr);
    } else {
      return result;
    }
  }
  return result;
};

module.exports = takeUntil;
