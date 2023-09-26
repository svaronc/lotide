// Function that compares two values and returns a message indicating if they are equal or not
const assertEqual = function (actual, expected) {
  let message = "";
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed:${actual} !== ${expected}`;
  }
  return message;
};

// Function that counts occurrences of specific items in an array
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (const item of allItems) {
    console.log(item); // Log the current item being processed
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1; // Increment the count if the item is found in the itemsToCount object
      } else {
        result[item] = 1; // Initialize the count if it's the first occurrence of the item
      }
    }
  }
  console.log(result); // Log the final result object containing item counts
  return result;
};

// An array of first names
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

// Call the countOnly function with the firstNames array and an object specifying which items to count
const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

// Log the results of assertions for specific items in the result1 object
console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));
