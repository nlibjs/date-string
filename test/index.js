const assert = require('assert');
const test = require('@nlib/test');
const date = require('..');

test('@nlib/date', (test) => {

	test('Year', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[YYYY]', '2012'],
			['[YY]', '12'],
			['[Y]', '2012'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Month', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[MMMM]', 'April'],
			['[MMM]', 'Apr'],
			['[MM]', '04'],
			['[M]', '4'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Date', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[DD]', '04'],
			['[D]', '4'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Hours', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[hh]', '05'],
			['[h]', '5'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Minutes', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[mm]', '06'],
			['[m]', '6'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Seconds', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[ss]', '07'],
			['[s]', '7'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

	test('Days', (test) => {
		const args = [2012, 3, 4, 5, 6, 7, 8];
		[
			['[dddd]', 'Wednesday'],
			['[ddd]', 'Wed'],
		]
		.forEach(([format, expected]) => {
			test(`date('${format}', ${args.join(', ')}) → '${expected}'`, () => {
				const actual = date(format, ...args);
				assert.equal(actual, expected);
			});
		});
	});

});
