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
  let sum = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        sum.push(matrix[i][j]);
      } else {
        if (matrix[i - 1][j] !== 0) {
          sum.push(matrix[i][j]);
        }
      }
    }
  }
  return sum.reduce((acc, val) => acc + val, 0);
}

module.exports = {
  getMatrixElementsSum,
};
