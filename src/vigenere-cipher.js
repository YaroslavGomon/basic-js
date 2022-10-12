const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direction) {
    this.direction = direction;
  }

  encrypt(message, key) {
    if (arguments[0] && arguments[1]) {
      let messageUppercase = message
        .split(' ')
        .map(val => val.toUpperCase())
        .join('');
      let keyFull = '';
      let res = [];

      while (keyFull.length !== messageUppercase.length) {
        keyFull +=
          key[
            keyFull.length >= key.length
              ? keyFull.length % key.length
              : keyFull.length
          ].toUpperCase();
      }

      for (let i = 0; i < keyFull.length; i++) {
        let letter;
        if (
          messageUppercase[i].charCodeAt(0) >= 65 &&
          messageUppercase[i].charCodeAt(0) <= 90
        ) {
          letter =
            (messageUppercase[i].charCodeAt(0) + keyFull[i].charCodeAt(0)) % 26;
          letter += 'A'.charCodeAt(0);
        } else {
          letter = messageUppercase[i].charCodeAt(0);
        }

        res.push(String.fromCharCode(letter));
      }

      for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
          res.splice(i, 0, ' ');
        }
      }

      return (this.direction || this.direction === undefined) ? res.join('') : res.reverse().join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message, key) {
    if (arguments[0] && arguments[1]) {
      let messageUppercase = message
        .split(' ')
        .map(val => val.toUpperCase())
        .join('');
      let keyFull = '';
      let res = [];

      while (keyFull.length !== messageUppercase.length) {
        keyFull +=
          key[
            keyFull.length >= key.length
              ? keyFull.length % key.length
              : keyFull.length
          ].toUpperCase();
      }

      for (let i = 0; i < keyFull.length; i++) {
        let letter;
        if (
          messageUppercase[i].charCodeAt(0) >= 65 &&
          messageUppercase[i].charCodeAt(0) <= 90
        ) {
          letter =
            (messageUppercase[i].charCodeAt(0) - keyFull[i].charCodeAt(0) + 26) % 26;
          letter += 'A'.charCodeAt(0);
        } else {
          letter = messageUppercase[i].charCodeAt(0);
        }

        res.push(String.fromCharCode(letter));
      }

      for (let i = 0; i < message.length; i++) {
        if (message[i] === ' ') {
          res.splice(i, 0, ' ');
        }
      }

      return (this.direction || this.direction === undefined) ? res.join('') : res.reverse().join('');
    } else {
      throw new Error('Incorrect arguments!');
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine,
};
