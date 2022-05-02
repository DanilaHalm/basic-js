const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // let result = arr.sort((a,b) => {
  //   if((a === -1)|| b === -1) { return 0}
  //   return a - b 
  // })
  let filterNumber = arr.filter(a => a !== -1);
  filterNumber.sort((a,b) => a - b);
  let i = 0;
  let sorted = arr.map(item => item === -1 ? item : filterNumber[i++]);
  return sorted
}

module.exports = {
  sortByHeight
};
