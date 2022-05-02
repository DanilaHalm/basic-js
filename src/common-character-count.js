const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let ss1 = s1.split('')
    let ss2 = s2.split('')
let result = [];
  for( let i = 0; i < s1.length; i++){
    let a = ss1.filter(a => a === s1[i]) // aa
    let b = ss2.filter(a => a === s1[i]) // a
    if(a.length >= b.length){
        result.push(b.length) 
        ss2 = ss2.filter(a => a !== s1[i])
        ss1 = ss1.filter(a => a !== s1[i])
    } else {
        result.push(a.length)
        ss2 = ss2.filter(a => a !== s1[i])
        ss1 = ss1.filter(a => a !== s1[i])
    }
  }
  return result.length > 0 ? result.reduce((a,b)=>a+b) : 0
}


module.exports = {
  getCommonCharacterCount
};
