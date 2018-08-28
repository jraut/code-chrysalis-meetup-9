const assert = require('assert')
const algo = require('./1')

assert.deepEqual(algo('ELITE'), '37173')
assert.deepEqual(algo('Code Chrysalis'), 'C0de C4rysa1is')
assert.deepEqual(algo('ZEHITOMO'), '23H170m0')
