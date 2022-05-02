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
  constructor(value) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    if (value === false) {
        this.type = false
    }
    else {
        this.type = true
    }
  }
  encrypt(input,code) {
    if( !input || !code) throw new Error('Incorrect arguments!');
    let output = ''
      let codeword = code.repeat(Math.floor(input.length/code.length)) + code.slice(0,input.length % code.length)
      let counter = -1
     for(let i = 0; i < input.length; i++){
      if(this.alphabet.includes(input[i].toUpperCase())) { 
        let n = (((this.alphabet.indexOf(input[i].toUpperCase())+1 + this.alphabet.indexOf(codeword[++counter].toUpperCase())+1))% 26) - 2
        output += this.alphabet[n >= 0 ? n : n + 26] }
        else {
            output += input[i] 
        }         }
     return this.type ? output : output.split('').reverse().join('')
  }
  decrypt(input,code) {
    if( !input || !code) throw new Error('Incorrect arguments!');
    let output = ''
      let codeword = code.repeat(Math.floor(input.length/code.length)) + code.slice(0,input.length % code.length)
      let counter = -1
     for(let i = 0; i < input.length; i++){
      if(this.alphabet.includes(input[i].toUpperCase())) { 
        let n = (((this.alphabet.indexOf(input[i].toUpperCase())+1 - this.alphabet.indexOf(codeword[++counter].toUpperCase())+1 + 26)) % 26) - 2
        output += this.alphabet[n >= 0? n : n + 26] 
        
    }
    else { 
        output += input[i] 
        
    }         }
     return this.type ? output : output.split('').reverse().join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
