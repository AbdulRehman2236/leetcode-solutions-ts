/*
Given an integer array num, return an array answer such that answer[i] is equal to the product of all 
the elements of num except num[i].

The product of any prefix or suffix of num is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

*/

export default function productExceptSelf(num: number[]): number[] {
  const prefix: number[] = [];
  const suffix: number[] = [];
  const result: number[] = [];

  for (let i = 0; i < num.length; i++) {
    if (i == 0) prefix[i] = 1;
    else prefix[i] = num[i - 1] * prefix[i - 1];
  }

  for (let j = num.length - 1; j >= 0; j--) {
    if (j === num.length - 1) suffix[j] = 1;
    else suffix[j] = num[j + 1] * suffix[j + 1];
  }

  for (let k = 0; k < num.length; k++) {
    result[k] = prefix[k] * suffix[k];
    result[k] = result[k] | 0;
  }

  return result;
}

/*

Example 1:

Input: num = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: num = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

*/
