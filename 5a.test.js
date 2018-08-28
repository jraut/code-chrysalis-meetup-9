const assert = require('assert')


assert.deepEqual(algo(
[[ 1, 2, 3, 4, 5 ],
 [ 6, 7, 8, 9, 10 ],
 [ 'A', 'B', 'C', 'D', 'E' ],
 [ 'F', 'G', 'H', 'I', 'J' ]]),
[[ 'F', 'A', 6, 1 ],
 [ 'G', 'B', 7, 2 ],
 [ 'H', 'C', 8, 3 ],
 [ 'I', 'D', 9, 4 ]]
 [ 'J', 'E', 10, 5 ]])

assert.deepEqual(algo(
[[ 1, 2 ],
 [ 3, 4 ]],

[[ 3, 1 ],
 [ 4, 2 ]])
