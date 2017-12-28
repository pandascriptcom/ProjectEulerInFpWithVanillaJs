/*jshint esversion: 6 */
(function () {
	'use strict';
	const LIMIT = 10;

	let sum = 0;
	for (let i = 0; i < LIMIT; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	console.log("imparitive: \t ", sum);

	const isDivisibleBy = i => number => i % number === 0;
	const selectedThat = criteria => (...numbers) => i => numbers.some(criteria(i));
	const getSumOf = conditionFor => (sum, _, i) => conditionFor(i) ? sum + i :
		sum;
	const solution = Array(LIMIT)
		.fill()
		.reduce(getSumOf(selectedThat(isDivisibleBy)(3, 5)), 0);
	console.log("functional: \t ", solution);

	const rangeFromZeroTo = num => Array.from(new Array(num), (_, index) => index);
	const sumUp = (acc, val) => acc + val;
	const divisibleBy = dividend => divisor => dividend % divisor === 0;
	const is = criteria => (...numbers) => i => numbers.some(criteria(i))
	const sol = rangeFromZeroTo(LIMIT)
		.filter(is(divisibleBy)(3, 5))
		.reduce(sumUp);

	console.log("solution fp 2: \t ", sol);

	const range = num => Array.from(new Array(num), (x, i) => i);

	const sum3 = (acc, val) => acc + val;
	const divisibleBy3 = divisor => num => num % divisor === 0;

	const divisibleByAny = (...divisors) => i =>
		divisors.map(divisibleBy3) // list of functions (divisibleBy(3) etc.)
		.map(f => f(i)) // list of booleans
		.some(x => x); // are any of those booleans true?

	// let's solve
	const solution3 = range(LIMIT)
		.filter(divisibleByAny(3, 5))
		.reduce(sum3);

	console.log("solution 3:\t ", solution3);

	const range4 = num => Array.from(new Array(num), (x, i) => i);

	const sum4 = (acc, val) => acc + val;
	const divisibleBy4 = divisor => num => num % divisor === 0;
	const divisibleByThreeAndFive = i => divisibleBy4(3)(i) || divisibleBy4(5)(i);
	// let's solve
	const solution4 = range4(LIMIT)
		.filter(divisibleByThreeAndFive)
		.reduce(sum4);

	console.log("solution 4:\t ", solution4);
}());
