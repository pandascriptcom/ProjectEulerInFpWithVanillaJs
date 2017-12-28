/*jshint esversion: 6*/
(function () {
  'use strict';
  const isDivisibleBy = [12, 14, 15, 16, 18, 20, 46189];
  const isEvenlyDivisible = n => (res, x) => res && n % x === 0;

  const findNumber = (n, isDivisibleBy) => isDivisibleBy.reduce(
    isEvenlyDivisible(n), true) ? n : findNumber(n + 46189);

  const evenlyDivisibleNumbers = findNumber(46189, isDivisibleBy);

  console.log("evenlyDivisibleNumbers ", evenlyDivisibleNumbers);
})();
