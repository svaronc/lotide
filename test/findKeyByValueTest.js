const findKeyByValue = require("../findKeyByValue");
const assert = require("chai").assert;

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("#findKeyByValue", () => {
  it("returns 'drama' for 'The wire' value in the bestTvShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for 'That 70s show' value in the bestTvShowsByGenre", () => {
    assert.strictEqual(
      findKeyByValue(bestTVShowsByGenre, "That 70s show"),
      undefined
    );
  });
});
