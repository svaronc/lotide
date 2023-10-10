const assertEqual = require('./assertEqual');

const tail = function (array) {
  let newArray;
  if (array.length > 1) {
    newArray = array.slice(1);
  } else {
    newArray = [];
  }
  return newArray;
};

module.exports = tail;