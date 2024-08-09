/*

Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that
i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

*/

export default function increasingTriplet(nums: number[]): boolean {
  let firstMin: number = Infinity;
  let secondMin: number = Infinity;

  for (const num of nums) {
    if (num <= firstMin) firstMin = num;
    else if (num <= secondMin) secondMin = num;
    else return true;
  }
  return false;
}

/*

Example 1:
Input: nums = [1,2,3,4,5]
Output: true
Explanation: Any triplet where i < j < k is valid.


Example 2:
Input: nums = [5,4,3,2,1]
Output: false
Explanation: No triplet exists.


Example 3:
Input: nums = [2,1,5,0,4,6]
Output: true
Explanation: The triplet (3, 4, 5) is valid because
nums[3] == 0 < nums[4] == 4 < nums[5] == 6.


Example 4:
Input: nums = [20,100,10,12,5,13]
Output: true
Explanation: The triplet (2, 3, 5) is valid because
nums[2] == 10 < nums[3] == 12 < nums[5] == 13.

*/
