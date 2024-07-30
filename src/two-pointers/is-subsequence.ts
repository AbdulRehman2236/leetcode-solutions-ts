/*

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting 
some (can be none) of the characters without disturbing the relative positions of the remaining 
characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

*/

export default function isSubsequence(s: string, t: string): boolean {
  let subStringPointer = 0;
  let subStringCounter = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] === s[subStringPointer]) {
      subStringPointer++;
      subStringCounter++;
    }
  }
  if (subStringCounter === s.length) return true;
  else return false;
}

/*

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false


*/
