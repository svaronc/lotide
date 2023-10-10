
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

module.exports = middle;