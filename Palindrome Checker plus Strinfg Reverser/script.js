//  5. Palindrome Checker + String Reverser Toolkit
//  Covers: split/reverse/join

//  reverseString(str) using split/reverse/join
//  isPalindrome(str) — reverse it and compare (handle case + spaces if you want a challenge)
//  Bonus: countVowels(str) using split and array methods

const hello = "hello";

function reverseString(str) {
  return console.log(str);
}
function isPalindrome(str) {
  let palindrome = str.toLowerCase().split("").reverse().join("");
  if (str === palindrome) {
    return console.log(`${str} is a palindrome`);
  } else {
    return console.log(`${str} is NOT a palindrome`);
  }
}

reverseString(hello);
isPalindrome("nun");
