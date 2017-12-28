/*jshint esversion: 6 */
(function () {

  'use strict';
  const start = new Date();
  const isSymmetric = n => {
    const asString = n.toString();
    return asString === asString.split("")
      .reverse()
      .join("");
  };
  const range = num => Array.from(new Array(num), (_, i) => num - i);
  const from999To100 = range(999)
    .filter(x => x >= 100);

  //https://stackoverflow.com/questions/12303989/cartesian-product-of-multiple-arrays-in-javascript/36234242#36234242
  const cartesianProduct = arr => arr.reduce(
    (a, b) => a.map(
      x => b.map(
        y => x.concat(y)))
    .reduce((a, b) => a.concat(b), []), [
      []
    ]);

  const combinations = cartesianProduct([
    from999To100, from999To100
  ]);
  const solution = combinations.map(x => x[0] * x[1])
    .filter(isSymmetric)
    .reduce((acc, x) => acc < x ? x : acc, 0);
  console.log("solution ", solution);
  console.log(new Date() - start);
})();
