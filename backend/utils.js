
function mergeArrays(arrays) {
    return arrays.reduce((merged, arr) => merged.concat(arr), []);
  }
  
  function removeDuplicates(array) {
    return [...new Set(array)];
  }
  
  function sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
  
  module.exports = { mergeArrays, removeDuplicates, sortNumbers };
  