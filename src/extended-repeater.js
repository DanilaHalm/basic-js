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
  let result = '';
  result = result + String(str)
  if (options.addition || (String(options.addition) === 'false' ) || (String(options.addition) === 'null')){
    result = result + options.addition
    if(options.additionRepeatTimes){
      result = result + ((options.additionSeparator || '|') + options.addition).repeat(options.additionRepeatTimes-1)
    }
  }
  
  if(options.repeatTimes){
    result = result + ((options.separator || '+') + result).repeat(options.repeatTimes-1)
  }
  return result
}

module.exports = {
  repeater
};
