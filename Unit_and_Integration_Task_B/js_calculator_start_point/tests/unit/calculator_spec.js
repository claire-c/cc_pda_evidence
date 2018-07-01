var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add', function() {
    calculator.previousTotal = 5;
    calculator.add(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 10);
  });

  it('it should subtract', function() {
    calculator.previousTotal = 10;
    calculator.subtract(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  });

  it('it should divide', function() {
    calculator.previousTotal = 20;
    calculator.divide(10);
    const actual = calculator.runningTotal;
    assert.equal(actual, 2);
  });

  it('it should multiply', function() {
    calculator.previousTotal = 2;
    calculator.multiply(5);
    const actual = calculator.runningTotal;
    assert.equal(actual, 10);
  });

  it('it should click numbers', function() {
    calculator.numberClick(6);
    const actual = calculator.runningTotal;
    assert.equal(actual, 6)
  });

  it('it should clear', function() {
    calculator.numberClick(7);
    calculator.clearClick();
    const actual = calculator.runningTotal;
    assert.equal(actual, 0)
  });

  it('it should click operators', function() {
    calculator.operatorClick('+');
    const actual = calculator.previousOperator;
    assert.equal(actual, '+')
  });

  it('it should multiply 3*5 and get 15', function() {
    calculator.numberClick(3);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    assert.equal(actual, 15);
  });

  it('it should divide 21/7 and get 3', function() {
    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.numberClick(7);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    assert.equal(actual, 3);
  });

  it('it should add 1+4 and get 5', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    assert.equal(actual, 5);
  });

  it('it should substract 7-4 and get 3', function() {
    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.numberClick(4);
    calculator.operatorClick('=');
    const actual = calculator.previousTotal;
    assert.equal(actual, 3);
  });

  it('it should concatenate multiple number clicks ', function() {
    calculator.numberClick(1);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    calculator.numberClick(0);
    const actual = calculator.runningTotal;
    assert.equal(actual, 10000);
  });

  it('it should chain multiple operations together', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 5);
  });

  it('it should clear the running total without affecting the calculation', function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=');
    const actual = calculator.runningTotal;
    assert.equal(actual, 2);
  });


});
