/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  
    let count = 0;
    str = str.toLowerCase();
    for(let element of str){
      if(element =='a'||element == 'e' || element == 'i'|| element == 'o'||element == 'u' ){
        count++;
    }
    }
    return count;
}
let str = "naruto";
console.log(countVowels(str));
module.exports = countVowels;