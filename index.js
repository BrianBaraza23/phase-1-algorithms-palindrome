function reverse(word){
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reverse the inputted string
  const reversedWord = reverse(word);

  return word === reversedWord;
}

/* 
  Add your pseudocode here

  1) Obtain the reversed version of the input string.
  2) If the reversed output is identical to the input string, then return true.
  3) Otherwise, return false.
  
*/

/*
  Add written explanation of your solution here
  The function begins by reversing the input word. Since JavaScript does not have a built-in reverse function for strings,
  the code splits the word into an array of individual characters. Then, it reverses the order of the characters in the array.
  Finally, it joins the characters back together to form a reversed string.

  After obtaining the reversed word, the function compares it with the original input word. 
  If the reversed word is identical to the input word, the function returns true, indicating that the word is a palindrome. 
  On the other hand, if the reversed word is different from the input word, the function returns false, indicating that the 
  word is not a palindrome.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {


  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;