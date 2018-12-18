'use strict';

const faker = require('../node_modules/faker');

var randomNumber = faker.random.number;

const greet = require('../lib/greet');

describe('greet module', () => {
  it('requires a string', () => {
    let expected = null;
    let greeting = randomNumber();
    let result = greet(greeting);
    expect(result).toEqual(expected);
  });

  it('returns Hello World', () => {
    let expected = 'Hello World';
    let greeting = 'World';
    let result = greet(greeting);
    expect(result).toEqual(expected);
  });
});