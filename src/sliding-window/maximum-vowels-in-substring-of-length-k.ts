/*

Given a string s and an integer k, return the maximum number of vowel letters in any substring
of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

*/

export default function maxVowels(s: string, k: number): number {
  let max = 0;
  const vowels: string[] = ["a", "e", "i", "o", "u"];
  let current: number = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.includes(s[i])) max++;
  }

  if (max === k) return max;
  current = max;

  for (let i = 1; i <= s.length - k; i++) {
    if (vowels.includes(s[i - 1])) current--;
    if (vowels.includes(s[i + k - 1])) current++;
    if (current === k) return current;
    max = Math.max(current, max);
  }

  return max;
}

/*

Example 1:
Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.


Example 2:
Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.


Example 3:
Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

*/
