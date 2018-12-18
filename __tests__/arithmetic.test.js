'use strict';

const faker = require('../node_modules/faker');

var randomName = faker.name.findName; 
var randomNumber = faker.random.number;



const arithmetic = require('../lib/arithmetic.js');

describe('addition module', () => {
  //requiring numbers
  it('requires numeric input', () => {
    let expected = null;
    let sum = arithmetic.add(randomName(), randomNumber());
    expect(sum).toEqual(expected);
  });

  it('defaults input to zero', () => {
    let randomNum = randomNumber();
    let expected = randomNum;
    let sum = arithmetic.add([randomNum]);
    expect(sum).toEqual(expected);
  });

  it('defaults input to zero when no numbers are sent', () => {
    let expected = 0;
    let sum = arithmetic.add();
    expect(sum).toEqual(expected);
  });

  //HAPPY PATH 
  it('can add all numbers', () => {
    let expected = 0;
    let randomNumArray = [];
    for(let i=0; i < 10; i++){
      let ranNum = randomNumber();
      randomNumArray.push(ranNum);
      expected = ranNum + expected;
    }
    let sum = arithmetic.add(randomNumArray);
    expect(sum).toEqual(expected);
  });
});

describe('subtraction module', () => {
  it('requires numeric input', () => {
    let expected = null;
    let difference = arithmetic.subtract(randomName(), randomNumber());
    expect(difference).toEqual(expected);
  });

  it('defaults input to zero', () => {
    let randomNum = randomNumber();
    let expected = randomNum;
    let difference = arithmetic.subtract([randomNum]);
    expect(difference).toEqual(expected);
  });

  it('defaults input to zero when no numbers are sent', () => {
    let expected = 0;
    let difference = arithmetic.subtract();
    expect(difference).toEqual(expected);
  });

  //HAPPY PATH 
  it('can subtract all numbers', () => {
    let expected = 0;
    let randomNumArray = [];
    for(let i=0; i < 10; i++){
      let ranNum = randomNumber();
      randomNumArray.push(ranNum);
      expected = ranNum - expected;
    }
    let difference = arithmetic.subtract(randomNumArray);
    expect(difference).toEqual(expected);
  });
});

describe('multiplication module', () => {
  it('requires numeric input', () => {
    let expected = null;
    let product = arithmetic.multiply(randomName(), randomNumber());
    expect(product).toEqual(expected);
  });

  it('defaults input to zero', () => {
    let randomNum = randomNumber();
    let expected = 0;
    let product = arithmetic.multiply([randomNum]);
    expect(product).toEqual(expected);
  });

  it('defaults input to zero when no numbers are sent', () => {
    let expected = 0;
    let product = arithmetic.multiply();
    expect(product).toEqual(expected);
  });

  //HAPPY PATH 
  it('can multiply all numbers', () => {
    let expected = 0;
    let randomNumArray = [];
    for(let i=0; i < 10; i++){
      let ranNum = randomNumber();
      randomNumArray.push(ranNum);
      expected = ranNum * expected;
    }
    let product = arithmetic.multiply(randomNumArray);
    expect(product).toEqual(expected);
  });
});

describe('division module', () => {
  it('requires numeric input', () => {
    let expected = null;
    let quotient = arithmetic.divide(randomName(), randomNumber());
    expect(quotient).toEqual(expected);
  });

  it('defaults input to zero', () => {
    let randomNum = randomNumber();
    let expected = 0;
    let quotient = arithmetic.divide([randomNum]);
    expect(quotient).toEqual(expected);
  });

  it('defaults input to zero when no numbers are sent', () => {
    let expected = 0;
    let quotient = arithmetic.divide();
    expect(quotient).toEqual(expected);
  });

  //HAPPY PATH 
  it('can divide all numbers', () => {
    let expected = 0;
    let randomNumArray = [];
    for(let i=0; i < 10; i++){
      let ranNum = randomNumber();
      randomNumArray.push(ranNum);
      expected = expected * (1/ranNum);
    }
    let quotient = arithmetic.divide(randomNumArray);
    expect(quotient).toEqual(expected);
  });
});

