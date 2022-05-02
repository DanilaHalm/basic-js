const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let mineSweeper = Array.from(matrix,x => x = matrix[0].map(a=> a=0))
  let cCount = matrix[0].length;

  for (let i = 0; i < cCount; i++){
    for (let u = 0; u < matrix.length; u++){
      if (matrix[u][i] === true){
        mineSweeper[u-1] ? mineSweeper[i-1] ? mineSweeper[u-1][i-1] += 1 : false : false ;
        mineSweeper[u-1] ? mineSweeper[i-0] ? mineSweeper[u-1][i-0] += 1 : false : false ;
        mineSweeper[u-1] ? mineSweeper[i+1] ? mineSweeper[u-1][i+1] += 1 : false : false ;
        mineSweeper[u-0] ? mineSweeper[i-1] ? mineSweeper[u-0][i-1] += 1 : false : false ;
        mineSweeper[u-0] ? mineSweeper[i+1] ? mineSweeper[u-0][i+1] += 1 : false : false ;
        mineSweeper[u+1] ? mineSweeper[i-1] ? mineSweeper[u+1][i-1] += 1 : false : false ;
        mineSweeper[u+1] ? mineSweeper[i-0] ? mineSweeper[u+1][i-0] += 1 : false : false ;
        mineSweeper[u+1] ? mineSweeper[i+1] ? mineSweeper[u+1][i+1] += 1 : false : false ;
      }
    }
  }
  return mineSweeper
}

module.exports = {
  minesweeper
};
