const map = require("../map");
const assert = require("chai").assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
const results2 = map(words, (word) => word.length);

describe("#map", () => {
  it("returns [g, c, t, m, t] for map(words, (word) => word[0]) using const words = [ground, control, to, major, tom]", () => {
    assert.deepEqual(results1, ["g", "c", "t", "m", "t"]);
  });
  it("returns [6, 7, 2, 5, 3] for map(words, (word) => word.length) using words = [ground, control, to, major, tom]", () => {
    assert.deepEqual(results2, [6, 7, 2, 5, 3]);
  });
});
