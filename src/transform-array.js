const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  // throw new NotImplementedError('Not implemented')
  if(!Array.isArray(arr)){
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let result = [] ; 
  for (let i = 0; i < arr.length ; i++) {
    if (arr[i] === "--discard-prev") {
     arr[i-1] === result[result.length - 1] ? result = result.slice(0,result.length -1) : false
    }
    else if (arr[i] === "--discard-next") {
    arr[i+1] ? i++ : false
    }
    else if (arr[i] === "--double-prev") {
     ((arr[i-1] === result[result.length - 1])&&(arr[i-1] !== undefined)) ? result.push(result[result.length - 1]) : false
    }
    else if (arr[i] === "--double-next") {
     arr[i+1] ? result.push(arr[i+1]) : false
    }
    else {
      result.push(arr[i])
    }
  }
  return result
}

module.exports = {
  transform
};
