'use strict';

module.exports = function greet(str){
  if(typeof str !== 'string'){return null}
  return "Hello " + str;
}


