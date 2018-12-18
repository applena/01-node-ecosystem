'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr=[]) {
  if( !arr.length ){return 0};
  let total = 0;
  for(let i = 0; i < arr.length; i++){
    if( typeof arr[i] !== "number") { return null; };
    total = arr[i] + total;
  } 
  return total;
};

arithmetic.subtract = function (arr=[]) {
  if( !arr.length ){return 0};
  let difference = 0;
  for(let i=0; i < arr.length; i++){
    if( typeof arr[i] !== "number") { return null; }
    difference = arr[i] - difference;
  }
  return difference;
};

arithmetic.multiply = function (arr) {
  if( !arr || !arr.length){return 0};
  let product = 0;
  for(let i=0; i<arr.length; i++){
    if( typeof arr[i] !== "number") { return null; }
    product = arr[i] * product;
  }
  return product;
};

arithmetic.divide = function (arr) {
  if( !arr || !arr.length){return 0};
  let quotient = 0;
  for (let i=0; i < arr.length; i++){
    if( typeof arr[i] !== "number") { return null; }
    if( arr[i] === 0 ){ return null; }
    quotient = quotient*(1/arr[i]);
  }
  return quotient;
};
