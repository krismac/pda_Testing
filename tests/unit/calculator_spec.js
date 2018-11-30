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


//Unit Tests:
//it should be able to add numbers using calculator.add() - add 1 to 4 and get 5
it('should be able to add numbers', function () {
  calculator.previousTotal = 1;
  calculator.add(4);
  assert.strictEqual(calculator.runningTotal, 5);
})

//Unit Tests:
//it should be able to subtract numbers using calculator.subtract() subtract 4 from 7 and get 3
it('should be able to subtact numbers', function () {
  calculator.previousTotal = 7;
  calculator.subtract(4);
  assert.strictEqual(calculator.runningTotal, 3);
})

//it should be able to multiply numbers using calculator.multiply() - multiply 3 by 5 and get 15
  it('should be able to multiply numbers', function () {
    calculator.previousTotal = 5;
    calculator.multiply(3);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  //it should be able to divide a number using calculator.divide() - divide 21 by 7 and get 3
  it('should be able to divide a number', function () {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })


  //it should be able to use multiple numbers and operators using calculator.numberClick() - concatenate multiple number button clicks

  it('should be able to click multiple numbers', function () {
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.numberClick(3);
    calculator.numberClick(4);
    assert.strictEqual(calculator.runningTotal, 1234);
  })

//it should be able to use chain multiple operations together using calculator.numberClick()

  it('should be able to chain multiple operations', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('-');
    calculator.numberClick(1);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 2);
  })

//should be able to clear the running total without affecting the calculation using calculator.clearClick()
  it('should be able to clear the running total without affecting the calculation', function () {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.clearClick();
    calculator.numberClick(4);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 7);
  })

});
