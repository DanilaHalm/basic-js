const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  let result = 0;
  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++){
    result += matrix[0][i]
    for (let u = 1; u < matrix.length; u++){
      if( matrix[u-1][i] === 0){
        result = result;
      }
      else{ 
        result += matrix[u][i] ;
      }
    }
  }
  return result
}
module.exports = {
  getMatrixElementsSum
};
