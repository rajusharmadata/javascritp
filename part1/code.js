/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

let str1 = "raju";
let str2 = "";

function Anagram(str1,str2) {

  if (str1.length === str2.length && str1 != str2) {
    return true;
  }
  return false;
}

console.log(Anagram(str1, str2));

