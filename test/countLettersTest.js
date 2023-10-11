const countLetters = require("../countLetters");
const assert = require("chai").assert;

describe("#countLetters", () => {
  it("returns 1 for letter l in word lighthouse", () => {
    assert.strictEqual(countLetters("lighthouse").l, 1);
  });
  it("returns 2 for letter h in word lighthouse", () => {
    assert.strictEqual(countLetters("lighthouse").h, 2);
  });
});
