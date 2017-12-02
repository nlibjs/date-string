const assert = require('assert');
const console = require('console');
const DateString = require('..');

const args = [2012, 3, 4, 5, 6, 7, 8];

[
	[undefined, '2012-04-04 05:06:07'],
	['[YYYY]', '2012'],
	['[YY]', '12'],
	['[Y]', '2012'],
	['[MMMM]', 'April'],
	['[MMM]', 'Apr'],
	['[MM]', '04'],
	['[M]', '4'],
	['[M]-[MM]-[MMM]-[MMMM]', '4-04-Apr-April'],
	['[DD]', '04'],
	['[D]', '4'],
	['[hh]', '05'],
	['[h]', '5'],
	['[mm]', '06'],
	['[m]', '6'],
	['[ss]', '07'],
	['[s]', '7'],
	['[dddd]', 'Wednesday'],
	['[ddd]', 'Wed'],
]
.forEach(([format, expected]) => {
	const date = new DateString(format);
	const actual = date(...args);
	assert.equal(actual, expected);
});

console.log('passed: DateString');
