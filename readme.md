# @nlib/date-string

[![Build Status](https://travis-ci.org/nlibjs/date-string.svg?branch=master)](https://travis-ci.org/nlibjs/date-string)
[![Build status](https://ci.appveyor.com/api/projects/status/p365it1utdiew2fm/branch/master?svg=true)](https://ci.appveyor.com/project/kei-ito/date-string/branch/master)
[![codecov](https://codecov.io/gh/nlibjs/date-string/branch/master/graph/badge.svg)](https://codecov.io/gh/nlibjs/date-string)
[![dependencies Status](https://david-dm.org/nlibjs/date-string/status.svg)](https://david-dm.org/nlibjs/date-string)
[![devDependencies Status](https://david-dm.org/nlibjs/date-string/dev-status.svg)](https://david-dm.org/nlibjs/date-string?type=dev)

Converts an integer to a human readable format.

## Install

```
npm install @nlib/date-string
```

## Usage

```javascript
const console = require('console');
const DateString = require('@nlib/date-string');
const d = new Date(2012, 3, 4, 5, 6, 7);
const date1 = new DateString('[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]');
console.log(date1(d));
// 2012-04-04 05:06:07
const date2 = new DateString('[YYYY]-[MMM]-[MMMM]-[D] [ddd] [dddd] [h]:[m]:[s]');
console.log(date2(d));
// 2012-Apr-April-4 Wed Wednesday 5:6:7
```

## Javascript API

new DateString(*format*: String) → *fn*(...*args*) → String

- *format*: A string to format the given date-string.
- *args*: is passed to construct a date-string object.

## LICENSE

MIT
