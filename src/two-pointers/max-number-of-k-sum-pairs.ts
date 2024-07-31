/*

You are given an integer array nums and an integer k.
In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
Return the maximum number of operations you can perform on the array.


*/

export default function maxOperations(nums: number[], k: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  let operations: number = 0;

  nums.sort((a, b) => a - b);

  while (nums.length > 1) {
    let sum = nums[left] + nums[right];
    if (sum === k) {
      nums.splice(right, 1);
      nums.splice(left, 1);
      operations++;
    } else if (sum < k) nums.splice(left, 1);
    else if (sum > k) nums.pop();
    right = nums.length - 1;
  }

  return operations;
}

/*

Example 1:

Input: nums = [1,2,3,4], k = 5
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.
Example 2:

Input: nums = [3,1,3,4,3], k = 6
Output: 1
Explanation: Starting with nums = [3,1,3,4,3]:
- Remove the first two 3's, then nums = [1,4,3]
There are no more pairs that sum up to 6, hence a total of 1 operation.
 



*/
