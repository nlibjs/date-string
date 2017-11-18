function date(format = date.format, ...args) {
	const d = new Date(...args);
	return format
	.replace(/\[([^[\]]+)\]/g, (match, key) => {
		const replacer = date.replacer[key];
		return replacer ? replacer(d) : key;
	});
}

date.format = '[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]';
date.replacer = {
	Y(d) {
		return `${d.getFullYear()}`;
	},
	YY(d) {
		return `0${d.getFullYear()}`.slice(-2);
	},
	YYYY(d) {
		return `000${d.getFullYear()}`.slice(-4);
	},
	M(d) {
		return `${d.getMonth() + 1}`;
	},
	MM(d) {
		return `0${d.getMonth() + 1}`.slice(-2);
	},
	MMM(d) {
		return date.monthNames[d.getMonth()].slice(0, 3);
	},
	MMMM(d) {
		return date.monthNames[d.getMonth()];
	},
	D(d) {
		return `${d.getDate()}`;
	},
	DD(d) {
		return `0${d.getDate()}`.slice(-2);
	},
	h(d) {
		return `${d.getHours()}`;
	},
	hh(d) {
		return `0${d.getHours()}`.slice(-2);
	},
	m(d) {
		return `${d.getMinutes()}`;
	},
	mm(d) {
		return `0${d.getMinutes()}`.slice(-2);
	},
	s(d) {
		return `${d.getSeconds()}`;
	},
	ss(d) {
		return `0${d.getSeconds()}`.slice(-2);
	},
	ddd(d) {
		return date.dayNames[d.getDay()].slice(0, 3);
	},
	dddd(d) {
		return date.dayNames[d.getDay()];
	},
};
date.monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];
date.dayNames = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

module.exports = date;
