var Operations = require("../src/utils/operations.js")

var chai = require("chai");
var expect = chai.expect;

describe("Testing for Technical Exam", function(){
it("Testing isPrime method", function(){
  expect(Operations.isPrime(7)).to.be.equal(true);
  expect(Operations.isPrime(4)).to.be.equal(false);
})
});
