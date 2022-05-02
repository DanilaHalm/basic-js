const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  result:[],
  getLength() {
    return this.result.length
  },
  addLink(value ) {
    
    this.result.push(`( ${value} )`)
  
    return this;
  },
  removeLink(position ) {
    if(isNaN(position) || position < 1 || position > this.result.length - 1){
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    if(position === 1){
      this.result = this.result.slice(position-1);
      
    }
    if(position === this.result.length){
      this.result = this.result.slice(0, this.result.length - 1);
    } else{
      let a = this.result.slice(0, position - 1)
      let b = this.result.slice(position)
      this.result = a.concat(b);
    }
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    let fin = this.result;
    this.result = [];
    return fin.join('~~');
  }
};

module.exports = {
  chainMaker
};
