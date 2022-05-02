const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = []
  let many = Array.from(new Set(names))
  let obj = {}
  for(let i = 0; i < many.length; i++) {
    let f = many[i]
    obj[f] = 0
  }
  for(let i = 0; i < names.length; i++) {
    if(result.find(a => a === names[i])) {
      let rep = names[i] + `(${obj[names[i]]})`
      result.push(rep)
      obj[names[i]] += 1
      obj[rep] ? obj[rep] += 1 : obj[rep] = 1
    }
    else {
      result.push(names[i])
      obj[names[i]] += 1
    }
  }
  return result
}

module.exports = {
  renameFiles
};
