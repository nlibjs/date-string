const {TemplateString} = require('@nlib/template-string');

module.exports = class DateString extends TemplateString {

	static get format() {
		return '[YYYY]-[MM]-[DD] [hh]:[mm]:[ss]';
	}

	static get replacer() {
		return {
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
				return DateString.monthNames[d.getMonth()].slice(0, 3);
			},
			MMMM(d) {
				return DateString.monthNames[d.getMonth()];
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
				return DateString.dayNames[d.getDay()].slice(0, 3);
			},
			dddd(d) {
				return DateString.dayNames[d.getDay()];
			},
		};
	}

	static get monthNames() {
		return [
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
	}

	static get dayNames() {
		return [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
		];
	}

	constructor(format = DateString.format, replacer = {}, parseOptions) {
		const generate = super(
			format,
			Object.assign(
				DateString.replacer,
				replacer
			),
			parseOptions
		);
		return (...args) => {
			return generate(new Date(...args));
		};
	}

};
