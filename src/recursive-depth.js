const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, count = 1) {
    let copy = arr.slice();
    if (copy.some(val => Array.isArray(val))) {
      copy = copy.flat();
      return this.calculateDepth(copy, count + 1);
    } else {
      return count;
    }
  }

  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  DepthCalculator,
};
