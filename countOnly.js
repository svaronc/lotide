// Function that compares two values and returns a message indicating if they are equal or not
// Function that counts occurrences of specific items in an array
const countOnly = function (allItems, itemsToCount) {
  let result = {};
  for (const item of allItems) {
    if (itemsToCount[item]) {
      if (result[item]) {
        result[item] += 1; // Increment the count if the item is found in the itemsToCount object
      } else {
        result[item] = 1; // Initialize the count if it's the first occurrence of the item
      }
    }
  }
  return result;
};

module.exports = countOnly;
