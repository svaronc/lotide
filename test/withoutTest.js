const without = require("../without");
const assert = require("chai").assert;

const words = ["hello", "world", "lighthouse"];

describe("#without", () => {
  it("Returns [hello, world] from [hello, wolrd, lighthouse] when passing the value [lighthouse]", () => {
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });
  it("returns [2,3] from [1,2,3] when passing the value [1]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
