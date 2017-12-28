/*jshint esversion: 6 */
(function () {
  'use strict';
  const start = Date.now();

  function* multiply(factor1, factor2) {
    let palindromeNumbers = 0;

    while (true) {
      const product = factor1 * factor2;
      if (isSymmetric(product) && palindromeNumbers < product) {
        palindromeNumbers = product;
      }
      if (factor1 <= 100) {
        factor1 = 999;
        factor2--;
      } else if (factor2 <= 100) {
        yield true;
        return palindromeNumbers;
      } else {
        factor1--;
      }
    }
  }

  const isSymmetric = n => {
    const asString = n.toString();
    return asString === asString.split("")
      .reverse()
      .join("");
  };

  const getAllPalindromeNumbers = multiply(999, 999);

  const findMaxPalindromeNumber = () => {
    return getAllPalindromeNumbers.next()
      .value ? getAllPalindromeNumbers.next()
      .value : findMaxPalindromeNumber();
  }

  const solution = findMaxPalindromeNumber();
  console.log("solution:\t", solution);
  console.log("time passed:\t", Date.now() - start);
})();
