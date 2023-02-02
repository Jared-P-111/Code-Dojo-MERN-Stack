// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/

const str1 = 'abcabcbb';
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = 'bbbbb';
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = 'pwwkew';
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = 'dvadf';
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
function lengthOfLongestSubString(str) {
  let myHash = {};
  let myArr = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (!myHash.hasOwnProperty(str[i])) {
      myHash[str[i]] = 1;
      count += 1;
    } else {
      myHash = {};
      myArr.push(count);
      count = 0;
    }
  }

  let currCount = 0;
  for (let i = 0; i < myArr.length; i++) {
    if (myArr[i] > currCount) {
      currCount = myArr[i];
    }
  }
  return currCount;
}

console.log(lengthOfLongestSubString(str1));
console.log(lengthOfLongestSubString(str2));
console.log(lengthOfLongestSubString(str3));
console.log(lengthOfLongestSubString(str4));
