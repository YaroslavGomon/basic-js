const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let copy = domains.slice();
  let res = [];
  copy = copy.map(val => val.split('.').reverse().join('.'));
  for (let i of copy) {
    if (i.lastIndexOf('.') !== i.indexOf('.')) {
      res.push(i);
      res.push(i.slice(0, i.lastIndexOf('.')));
    }
    if (i.lastIndexOf('.') === i.indexOf('.')) {
      res.push(i.slice());
    }
    res.push(i.slice(0, i.indexOf('.')));
  }

  res = res.map(val => (val = '.' + val)).sort();

  let data = {};
  let count = 1;
  for (let i = 0; i < res.length; i++) {
    if (res[i] === res[i + 1]) {
      count++;
    } else {
      data[res[i]] = count;
      count = 1;
    }
  }

  return data;
}
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = {
  getDNSStats,
};
