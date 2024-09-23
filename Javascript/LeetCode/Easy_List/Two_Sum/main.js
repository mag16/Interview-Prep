/* TWO SUM
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
*/

let twoSum = function(nums, target) {
    let target_nums = [];
   
       for(let i = 0; i < nums.length;i++){
           for(let j = i + 1; j < nums.length; j++) {
               if(nums[i] + nums[j] === target) {
               target_nums.push(i, j)
               }
           }
        }
                                                                              // let result = target_sums;
   return target_nums;
};

// More optimized solution

let twoSumWhash = function(arr, target) {
    let hashNums = new Map();

    for(let i = 0; i < arr.length; i++) {
        let complement = target - arr[i];

        if(hashNums.has(complement)){
           // Return the indices of the complement and the current number
            return [hashNums.get(complement), i]; // Use get to retrieve the index of the complement
        } else {
            hashNums.set(arr[i], i); // Store the number with its index
        }
    }
}