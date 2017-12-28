/*jshint esversion: 6 */
(function () {
	'use strict';
	const range = num => Array.from(new Array(num), (_, i) => i);
	const divisibleBy = divisor => num => num % divisor === 0;
	const isEven = divisibleBy(2);
	const sum = (acc, val) => acc + val;

	function* takeWhile(p, a) {
		for (let x of a) {
			if (p(x)) yield x;
			else break;
		}
	}
	const test = takeWhile(i => i, [1, 2, 3, 4, 5]);

	console.log("4mil: ", 4e6);

	const fibonacciOf = n => {
		if (n === 0) {
			return 1;
		}
		if (n === 1) {
			return 2;
		}
		return fibonacciOf(n - 1) + fibonacciOf(n - 2);
	};
	const doUntil = maxVal => (fiboResult, i) => {
		const next = i + 1;
		return fiboResult >= maxVal ? i : doUntil(maxVal)(fibonacciOf(next), next);
	};
	const until4Mil = doUntil(4e6);
	const maxRange = until4Mil(0, 0);

	const solution = range(maxRange)
		.map(fibonacciOf)
		.filter(isEven)
		.reduce(sum);

	console.log("solution: \t", solution);
}());
