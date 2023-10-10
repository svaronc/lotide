const assertEqual = require('./assertEqual');

const head = function (array) {
  console.log(array[0]);
  return array[0];
};

module.exports = head;