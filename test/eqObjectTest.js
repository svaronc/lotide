const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const eqObjects = require('../eqObjects');


// Test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false

console.log(
  assertEqual(
    eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
    true
  )
);
console.log(
  assertEqual(
    eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
    false
  )
);