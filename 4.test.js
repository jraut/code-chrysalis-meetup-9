const assert = require('assert')

assert.deepEqual(algo(0), [1])
assert.deepEqual(algo(1), [1, 1])
assert.deepEqual(algo(2), [1, 2, 1])
assert.deepEqual(algo(8), [1, 8, 28, 56, 70, 56, 28, 8, 1])
