const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0
  for(let i = 0 ; i < String(n).length ; i++) {
    let number = String(n).replace(String(n)[i],'')
    result < number ? result = number : result
  }
  return +result
}

module.exports = {
  deleteDigit
};
