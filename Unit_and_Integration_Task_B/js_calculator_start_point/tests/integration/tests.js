var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it('should update displays previous result after pressing equals', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update displays previous result after pressing plus', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2');
  });

  it('should update displays previous result after pressing minus', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should update displays previous result after pressing multiply', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should update displays previous result after pressing divide', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number2')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should chain operations together', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number5')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('4');
  });

  it('should display negative numbers', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-1');
  });

  it('should display decimals', function() {
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.2');
  });

  it('should display "Error: INFINITY" when a result of Infinity appears', function() {
    running_total = element(by.css('#running_total'));
    for (var i = 0; i < 15; i++) {
      element(by.css('#number1')).click();
    };
    expect(running_total.getAttribute('value')).to.eventually.equal('Error: INFINITY');
  });

  it('should display infinity with very large numbers', function() {
    running_total = element(by.css('#running_total'));
    for (var i = 0; i < 15; i++) {
      element(by.css('#number1')).click();
    };
    expect(running_total.getAttribute('value')).to.eventually.equal('Error: INFINITY');
  });

  it('should display infinity when divided by zero', function(){
    running_total = element(by.css('#running_total'));
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Error: INFINITY');
  });


  // You should test for the following:
  // Do the number buttons work to update the display of the running total?
  // Do each of the arithmetical operations work to update the display with the result of the operation?
  // Can we chain multiple operations together?
  // Does it work as expected for a range of numbers? (positive, negative, decimals, large numbers)
  // What does the code do in exceptional circumstances?
  // If you divide by zero, what is the effect?
  // Can you write a test to describe what you'd prefer to happen under this circumstance, and then correct to code to make that test pass.






});
