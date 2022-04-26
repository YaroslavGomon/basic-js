const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  } else {
    if (Object.keys(date).includes('toString')) {
      throw new Error('Invalid date!');
    } else {
      if (date instanceof Date) {
        const month = date.getMonth() + 1;
        if (month >= 3 && month <= 5) {
          return 'spring';
        } else if (month >= 6 && month <= 8) {
          return 'summer';
        } else if (month >= 9 && month <= 11) {
          return 'autumn';
        } else {
          return 'winter';
        }
      } else {
        throw new Error('Invalid date!');
      }
    }
  }
}
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = {
  getSeason,
};
