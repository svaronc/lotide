const letterPositions = require("../letterPositions");
const assert = require("chai").assert;

describe("#letterPosition", () => {
  it("returns [0,4] for letter s in 'Sebastians' string", () => {
    assert.deepEqual(letterPositions("sebastian").s, [0, 4]);
  });
  it("returns [5] for letter t in 'Sebastians' string", () => {
    assert.deepEqual(letterPositions("sebastian").t, [5]);
  });
});
