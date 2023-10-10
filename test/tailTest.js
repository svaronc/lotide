const tail = require("../tail");
const assert = require("chai").assert;

describe("#tail", () => {
  it("should return [Lighthouse, Labs] for [Hello, Ligthouse, Labs]", () => {
    assert.deepEqual(tail(["Hello", "Ligthouse", "Labs"]), [
      "Ligthouse",
      "Labs",
    ]);
  });
  it("should return [2,3,4] for [1,2,3,4]", () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  });
});

