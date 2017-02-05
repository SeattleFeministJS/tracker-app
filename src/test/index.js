'use strict';

const assert = require('chai').assert;

describe('default test', function() {
  let val = 'Hello World'

  it('should run a passing test', () => {
    assert.equal(val, 'Hello World', 'Test values should be equal')
  })
})
