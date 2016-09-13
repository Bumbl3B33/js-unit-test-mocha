var chai = require('chai');
var assert = chai.assert;

var addition = require('../js/addition.js');

describe('test addition', function () {
    it('should add class into element', function () {
        assert.equal(addition.add(3, 4), 7);
    });
});
