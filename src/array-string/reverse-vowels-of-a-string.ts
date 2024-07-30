/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, 
more than once.
*/

export default function reverseVowels(s: string): string {
  let vowels = "aeiouAEIOU";
  let left: number = 0;
  let right: number = s.length - 1;
  let arrayString = [...s];

  while (left < right) {
    if (!vowels.includes(arrayString[left])) left++;
    else if (vowels.includes(arrayString[left]) && vowels.includes(arrayString[right])) {
      [arrayString[left], arrayString[right]] = [arrayString[right], arrayString[left]];
      left++;
      right--;
    } else right--;
  }

  return arrayString.join("");
}

/*
Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

*/
