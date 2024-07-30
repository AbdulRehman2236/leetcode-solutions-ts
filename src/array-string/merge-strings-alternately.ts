export default function mergeAlternately(word1: string, word2: string): string {
  let word1Length = word1.length;
  let word2Length = word2.length;
  let word = "";
  let longestWord = Math.max(word1Length, word2Length);

  for (let i = 0; i < longestWord; i++) {
    if (i < word1Length) word += word1[i];
    if (i < word2Length) word += word2[i];
  }
  return word;
}

/*
Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r
Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s
Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

*/
