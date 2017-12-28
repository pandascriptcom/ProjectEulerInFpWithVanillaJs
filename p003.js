/*jshint esversion: 6 */
(function () {
  'use strict';
  const range = num => Array.from(new Array(num), (_, i) => i);
  const divisibleBy = divisor => num => num % divisor === 0;
  const sum = (acc, val) => acc + val;

  const integer = 600851475143;
  const intDivBy2 = integer / 2;
  console.log(intDivBy2);
  console.log(intDivBy2 * 2);

  const getPrime = n => {

  };
}());
