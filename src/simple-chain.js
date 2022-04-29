const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`(${value !== undefined ? ` ${value} ` : ' '})`);
    return this;
  },
  removeLink(position) {
    if (position <= this.chain.length && position > 0 && typeof(position) === 'number' && Math.round(position) === position) {
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!")
    }
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let res = this.chain.join('~~');
    this.chain = [];
    return res;
  }
};

// getLength() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// addLink(/* value */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// removeLink(/* position */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// reverseChain() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// },
// finishChain() {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

module.exports = {
  chainMaker
};
