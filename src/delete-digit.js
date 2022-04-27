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
  const num = n.toString().split('').map(Number);
  let cur = num.slice();
  let max = 0;
  for (let i of num) {
    cur.splice(cur.indexOf(i), 1);
    cur = Number(cur.join(''));
    cur > max ? (max = cur) : max;
    cur = num.slice();
  }
  return max;
}

module.exports = {
  deleteDigit,
};
