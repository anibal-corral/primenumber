var numberservice = require("../src/services/numberservice.js");
var chai = require("chai");
var expect = chai.expect;

describe("Testing for Technical Exam", function(){
it("Testing getPrimeNumbers method", function(){
  expect(numberservice.getPrimeNumbers(11)).to.eql([2,3,5,7,11]);
  expect(numberservice.getPrimeNumbers(-1)).to.eql([]);
  expect(numberservice.getPrimeNumbers(0)).to.eql([]);
  expect(numberservice.getPrimeNumbers(1)).to.eql([]);
})
});
