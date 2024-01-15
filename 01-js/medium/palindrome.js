/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.replace(/[^a-zA-Z ]/g,'').toLowerCase();
  const newStr = str.split('').reverse().join('').toLowerCase();
  if (newStr == str){
    return true;
  }
  return false;
}
console.log(isPalindrome('Able, was I ere I saw Elba!'));
module.exports = isPalindrome;
