const countOnly = require("../countOnly");
const assert = require("chai").assert;

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
  Salima: true,
});

describe("#countOnly", () => {
  it("returns 1 for Jason", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns 2 for Salima", () => {
    assert.strictEqual(result1["Salima"], 2);
  });
});
