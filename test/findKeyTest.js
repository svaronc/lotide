const findKey = require('../findKey');
const assert = require('chai').assert;

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
describe("#findKey", () => {
  it("returns 'noma' when the object key stars is == 2 in the object sample ", () => {
    assert.strictEqual(test, "noma");
  });
  it("returns 'Akelarre' when the object key stars is == 2 in the object sample ", () => {
    assert.strictEqual(test2, "Akelarre");
  });
});

