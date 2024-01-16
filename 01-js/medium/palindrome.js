/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const cleanedExp = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
  const revStr = cleanedExp.split('').reverse().join('').toLowerCase();
  console.log(revStr);
  console.log(cleanedExp);
  return cleanedExp === revStr;
}
console.log(isPalindrome('race car'));
module.exports = isPalindrome;
