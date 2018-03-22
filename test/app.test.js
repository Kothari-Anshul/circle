var obj = require('../index.js');
var chai = require('chai');
var assert = chai.assert;

describe('Equality of numbers ', function(){
	it('should be sum of the given parameters', function(){
		assert.equal(obj.sum(7,8), 15);
		
	});
	it('should return mutiplication of the given numbers', function(){
		assert.equal(obj.multiply(2,2), 8);
	});
});

