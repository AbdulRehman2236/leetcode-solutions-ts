/*

Given an integer array num, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

*/

export default function moveZeroes(num: number[]): number[] {
  let length = num.length - 1;
  while (length >= 0) {
    if (num[length] === 0) {
      num.splice(length, 1);
      num.push(0);
    }
    length--;
  }
  return num;
}

/*

Example 1:

Input: num = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: num = [0]
Output: [0]

Input: num = [0, 0, 1]
Output: [1, 0, 0]

*/
