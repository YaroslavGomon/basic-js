const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {
    str = 'null'
  }
  str = `${str}`;
  let addit, sep, addSep;
  options?.addition ? (addit = `${options.addition}`) : (addit = '');
  if (options.addition === false) {
    addit = options.addition.toString();
  }
  if (options.addition === null) {
    addit = 'null'
  }
  options?.separator ? (sep = options.separator) : (sep = '+');
  options?.additionSeparator
    ? (addSep = options.additionSeparator)
    : (addSep = '|');

  for (
    let i = 0;
    i < (options?.additionRepeatTimes ? options.additionRepeatTimes : 0);
    i++
  ) {
    if (i !== options.additionRepeatTimes - 1) {
      str = str + addit + addSep;
    } else {
      str = str + addit;
    }
  }

  if (options?.addition && !options?.additionRepeatTimes) {
    str = str + addit;
  }

  let res = '';
  for (let i = 0; i < (options?.repeatTimes ? options.repeatTimes : 1); i++) {
    if (options?.repeatTimes) {
      if (i !== options.repeatTimes - 1) {
        res = res + str + sep;
      } else {
        res = res + str;
      }
    } else {
      res = str;
    }
  }
  return res;
}
// throw new NotImplementedError('Not implemented');
// remove line with error and write your code here

module.exports = {
  repeater,
};
