const assertObjectEqual = require('../assertObjectEqual');

console.log(
  assertObjectEqual(
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] },
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] }
  )
);
console.log(
  assertObjectEqual(
    { name: "Juan jose", lasteName: "varon" },
    { name: "sebastian", lasteName: "varon" }
  )
);