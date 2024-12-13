/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.

  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert both strings to lowercase to ensure case insensitivity
  const lowerWord1 = str1.toLowerCase();
  const lowerWord2 = str2.toLowerCase();

  // Step 1: Check if the lengths of the two strings are different
  // If the lengths are not equal, they cannot be anagrams
  if (lowerWord1.length !== lowerWord2.length) {
    return false;
  }

  // Step 2: Create an object to count the occurrences of each letter in the first string
  const letterCount = {};
  for (let letter of lowerWord1) {
    // Increment the count for each letter in lowerWord1
    letterCount[letter] = (letterCount[letter] || 0) + 1;
  }

  // Step 3: Verify if the second string has the same letters in the same frequency
  for (let letter of lowerWord2) {
    // If a letter in lowerWord2 is not found in letterCount or its count is zero, it's not an anagram
    if (!letterCount[letter]) {
      return false;
    }

    // Decrease the count for each matching letter
    letterCount[letter]--;
  }

  // If all letters match and counts are balanced, the words are anagrams
  return true;
}

// Example usage: Check if "ratt" and "star" are anagrams
console.log(isAnagram("ratt", "star")); // Output: false


