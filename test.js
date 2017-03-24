const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const fizzbuzz = require('./fizzbuzz.js');

describe('Fizz Buzz', function() {

    // Setup
    it('should have a function called fizzbuzz', function() {
        let f = fizzbuzz.fizzbuzz;
        assert.isFunction(f);
    });

    // Parameters
    it('should throw an error if the start and end parameters are not numbers', function() {
        expect(function() {
            fizzbuzz.fizzbuzz('a', 'b');
        }).to.throw('The start and end parameters need to be numbers');
    });

    it('should throw an error if either the start or end parameters are not numbers', function() {
        expect(function() {
            fizzbuzz.fizzbuzz('a', 10);
        }).to.throw('The start and end parameters need to be numbers');
    });

    it('should not throw an error if the start or end parameters are numbers', function() {
        expect(function() {
            fizzbuzz.fizzbuzz(0, 10);
        }).to.not.throw('The start and end parameters need to be numbers');
    });
});