/*jshint esversion: 6*/
const start = Date.now();

function largestPalindromeFromProductOf2ThreeDigitNums() {
  var largestPalindrome = 0;

  var product;
  var productString = '';
  var reverseNum = '';

  for (let i = 999; i > 99; i--) {
    for (let j = 999; j > 99; j--) {
      product = i * j;

      productString = product.toString();

      for (let k = 0; k < productString.length; k++) {
        reverseNum = productString[k] + reverseNum;
      }

      if (reverseNum === productString) { //this is a palindrome
        if (product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
      reverseNum = '';
    }
  }
  return largestPalindrome;
}

largestPalindromeFromProductOf2ThreeDigitNums();
console.log("time passed:\t", Date.now() - start);
