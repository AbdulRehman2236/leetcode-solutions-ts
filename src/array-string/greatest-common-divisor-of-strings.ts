export default function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  let minLength = Math.min(str1.length, str2.length);
  for (let i = minLength; i > 0; i--) {
    if (str1.length % i === 0 && str2.length % i === 0)
      return str1.substring(0, i);
  }
  return "";
}

/*
Example 1:

Input: str1 = "ABCABC", str2 = "ABC"
Output: "ABC"
Example 2:

Input: str1 = "ABABAB", str2 = "ABAB"
Output: "AB"
Example 3:

Input: str1 = "LEET", str2 = "CODE"
Output: ""
*/
