/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function calculateFreq(str){
  let charFreq = {};
  for(let char of str){
   if(charFreq[char]){
     charFreq[char]++;
   }else{
     charFreq[char] = 1;
   }
  } 
  return charFreq;
}
function isAnagram(str1, str2) {
   str1 = str1.replace(/\s\g/,"").toLowerCase();
   str2 = str2.replace(/\s\g/,"").toLowerCase();

  if(str1.length !==  str2.length){
    return false;
  }
 const freq1 = calculateFreq(str1); // objects holding each char freq
 const freq2 = calculateFreq(str2);
 
  for(let char in freq1){
    if(freq1[char] !== freq2[char]){
      return false;
    }
  }
return true;

}

console.log(isAnagram("rasp","pars"));

module.exports = isAnagram;
