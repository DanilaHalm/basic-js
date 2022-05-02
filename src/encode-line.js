const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('')
  let result = []
  let stack = []
  let count = 1
  for(let i = 0; i < arr.length; i++) {
    if(stack.includes(arr[i])) {
      count++
      result.pop()
      result.push(count+arr[i])
    }
    else {
      if(stack.length === 0) {
        stack.push(arr[i])
      } else {
        stack.pop()
        stack.push(arr[i])
      } 
      count = 1
      result.push(arr[i])
    }
    
    // result.push(count === 1 ? arr[i] : count + arr[i])
  }
  return result.join('')
}

module.exports = {
  encodeLine
};
