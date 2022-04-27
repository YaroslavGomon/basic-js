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
function transform(array) {
  if (Array.isArray(array)) {
    let copy = array.slice();
    for (let i of copy) {
      if (i === '--double-next' && copy.indexOf(i) !== copy.length - 1) {
        copy.splice(copy.indexOf(i), 1, copy[copy.indexOf(i) + 1]);
      } else if (i === '--double-next') {
        copy.splice(copy.indexOf(i), 1);
      }
      if (i === '--double-prev' && copy.indexOf(i) !== 0) {
        copy.splice(copy.indexOf(i), 1, copy[copy.indexOf(i) - 1]);
      } else if (i === '--double-prev') {
        copy.splice(copy.indexOf(i), 1);
      }
      if (i === '--discard-next' && copy.indexOf(i) !== copy.length - 1) {
        copy.splice(copy.indexOf(i), 2);
      } else if (i === '--discard-next') {
        copy.splice(copy.indexOf(i), 1);
      }
      if (i === '--discard-prev' && copy.indexOf(i) !== 0) {
        copy.splice(copy.indexOf(i) - 1, 2);
      } else if (i === '--discard-prev') {
        copy.splice(copy.indexOf(i), 1);
      }
    }
    return copy.filter(val => val !== '--double-next' && val !== '--double-prev' && val !== '--discard-prev' && val !== '--discard-next');
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = {
  transform,
};
