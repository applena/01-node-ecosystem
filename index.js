'use strict';

const greet = require('./lib/greet.js');
const math = require('./lib/arithmetic.js');
const faker = require('./node_modules/faker');

var randomName = faker.name.findName(); 
var randomNumber = faker.random.number();

console.log(greet('JOHN'));
console.log(math.add(randomNumber, randomNumber)); // 4
console.log(math.subtract(randomNumber, randomNumber)); // -2
