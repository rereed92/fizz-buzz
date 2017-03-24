const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

const fizzbuzz = require('./fizzbuzz.js');

describe('Fizz Buzz', function() {

    // Setup
    it('should have a function called fizzbuzz', function() {
        let f = fizzbuzz.main;
        assert.isFunction(f);
    });

    // Parameters
    it('should throw an error if the start and end parameters are not numbers', function() {
        expect(function() {
            fizzbuzz.main('a', 'b');
        }).to.throw('The start and end parameters need to be numbers');
    });

    it('should throw an error if either the start or end parameters are not numbers', function() {
        expect(function() {
            fizzbuzz.main('a', 10);
        }).to.throw('The start and end parameters need to be numbers');
    });

    it('should not throw an error if the start or end parameters are numbers', function() {
        expect(function() {
            fizzbuzz.main(0, 10);
        }).to.not.throw('The start and end parameters need to be numbers');
    });

    // Structure
    it('should return an Array which is the length of the difference from the end to start parameters', function() {
        let results = fizzbuzz.main(1, 11);
        expect(results.length).to.be.equal(10);
    });

    // FizzBuzz
    it('should return a string of Fizz if the value is a multiple of 3', function() {
        let result = fizzbuzz.fizzbuzz(3);
        expect(result).to.be.equal('Fizz');
    });

    it('should return a string of Buzz if the value is a multiple of 5', function() {
        let result = fizzbuzz.fizzbuzz(5);
        expect(result).to.be.equal('Buzz');
    });

    it('should return a string of FizzBuzz if the value is a multiple of 3 and 5', function() {
        let result = fizzbuzz.fizzbuzz(15);
        expect(result).to.be.equal('FizzBuzz');
    });

    it('should return the same number value if the value is not a multiple of 3 or 5', function() {
        let result = fizzbuzz.fizzbuzz(2);
        expect(result).to.be.equal(2);
    });

});