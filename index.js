const head = require("./head");
const tail = require("./tail");
const middle = require("./middle");
const countLetter = require("./countLetters");
const countOnly = require("./countOnly");
const flatten = require("./flatten");
const findKey = require("./findKey");
const findKeyByValue = require("./findKeyByValue");
const map = require("./map");
const letterPositions = require("./letterPositions");
const takeUntil = require("./takeUntil");
const without = require("./without");
const eqArrays = require("./eqArrays");
const eqObjects = require("./eqObjects");

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  countLetter: countLetter,
  countOnly: countOnly,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  map: map,
  letterPositions: letterPositions,
  without: without,
  takeUntil: takeUntil,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
};
