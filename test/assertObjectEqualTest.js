const assertObjectEqual = require('../assertObjectEqual');

console.log('testing assertion:',
  assertObjectEqual(
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] },
    { name: "sebastian", lasteName: "varon", hobbys: ["soccer", "Tennis"] }
  )
);
console.log('testing assertion:',
  assertObjectEqual(
    { name: "Juan jose", lasteName: "varon" },
    { name: "sebastian", lasteName: "varon" }
  )
);