const assertEqual = require("./assertEqual");

// function to find the value of certain key if the callback return true from the condition
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

const test = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 2
); // => "noma");
const test2 = findKey(
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 0 },
    elBulli: { stars: 3 },
    Ora: { stars: 1 },
    Akelarre: { stars: 2 },
  },
  (x) => x.stars === 2
);
console.log(test);

console.log(assertEqual(test, "noma"));
console.log(assertEqual(test, "Ora"));
console.log(assertEqual(test2, "Akelarre"));

module.exports = findKey;