/*jshint esversion: 6 */
(function () {
  'use strict';
  const isSymmetric = n => {
    const asString = n.toString();
    return asString === asString.split("")
      .reverse()
      .join("");
  };
  const range = num => Array.from(new Array(num), (_, i) => num - i);
  const from999To100 = range(999)
    .filter(x => x >= 100);

  const multiply = (factor1, factor2) => {
    if (factor2.length === 1) {

    }
    return factor1.reduce((acc1, val1, index1) => {
      return factor2.reduce((acc2, val2, index2) => {

      }, []);
    }, []);
  };
  console.log(multiply(from999To100, from999To100));
})();
