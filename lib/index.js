const TemplateString = require('@nlib/template-string');

class DateFormatter extends TemplateString {

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
				return DateFormatter.monthNames[d.getMonth()].slice(0, 3);
			},
			MMMM(d) {
				return DateFormatter.monthNames[d.getMonth()];
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
				return DateFormatter.dayNames[d.getDay()].slice(0, 3);
			},
			dddd(d) {
				return DateFormatter.dayNames[d.getDay()];
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

	constructor(format = DateFormatter.format, replacer = {}) {
		const generate = super(
			format,
			Object.assign(
				DateFormatter.replacer,
				replacer
			)
		);
		return (...args) => {
			return generate(new Date(...args));
		};
	}

}

module.exports = DateFormatter;
