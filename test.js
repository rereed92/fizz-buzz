const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const fizzbuzz = require('./fizzbuzz.js');

describe('Fizz Buzz', function() {
    it('should have a function called fizzbuzz', function() {
        let f = fizzbuzz.fizzbuzz;
        assert.isFunction(f);
    });
});