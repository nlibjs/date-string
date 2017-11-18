# @nlib/date

[![Build Status](https://travis-ci.org/nlibjs/date.svg?branch=master)](https://travis-ci.org/nlibjs/date)
[![Build status](https://ci.appveyor.com/api/projects/status/ml0yqv0qn2y16o24/branch/master?svg=true)](https://ci.appveyor.com/project/kei-ito/date/branch/master)
[![codecov](https://codecov.io/gh/nlibjs/date/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/date)
[![dependencies Status](https://david-dm.org/nlibjs/date/status.svg)](https://david-dm.org/nlibjs/date)
[![devDependencies Status](https://david-dm.org/nlibjs/date/dev-status.svg)](https://david-dm.org/nlibjs/date?type=dev)

Converts an integer to a human readable format.

## Install

```
npm install @nlib/date
```

## Usage

```javascript
const console = require('console');
const date = require('@nlib/date');
const d = new Date(2012, 3, 4, 5, 6, 7);
console.log(date('[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]', d));
// 2012-04-04 05:06:07
console.log(date('[YYYY]-[MMM]-[MMMM]-[D] [ddd] [dddd] [h]:[m]:[s]', d));
// 2012-Apr-April-4 Wed Wednesday 5:6:7
```

## Javascript API

date(*format*: String, ...*args*]) → String

- *format*: A string to format the given date.
- *args*: is passed to construct a date object.

## LICENSE

MIT
