/*jshint esversion: 6*/
(function () {
  'use strict';

  const range = f => num => Array.from(new Array(num), f);
  const quadRange = range((_, i) => i * i);
  const simpRange = range((_, i) => i);
  const sum = (acc, val) => acc + val;
  const sumOfQuads = quadRange(101)
    .reduce(sum);
  const quadsOfSum = simpRange(101)
    .reduce(sum) * simpRange(101)
    .reduce(sum);
  console.log("solution ", quadsOfSum - sumOfQuads);
})();
