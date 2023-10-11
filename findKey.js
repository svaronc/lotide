const findKey = function (object, callback) {
  let result;
  for (let key in object) {
    let condition = callback(object[key]);
    if (condition) {
      result = key;
      return result;
    }
  }
};

module.exports = findKey;