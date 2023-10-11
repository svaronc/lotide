function without(array, valuesToRemove) {
  let newArr = array.filter((item) => !valuesToRemove.includes(item));
  console.log(`original array ${array}`);
  return newArr;
}

module.exports = without