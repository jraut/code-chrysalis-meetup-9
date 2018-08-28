const assert = require('assert')


assert.deepEquals(algo("abcdabcd", "cd"), [2, 6])
assert.deepEquals(algo("abcccdabcdccd", "cc"), [2, 3, 10])
