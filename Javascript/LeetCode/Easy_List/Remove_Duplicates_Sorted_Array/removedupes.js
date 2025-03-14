/*  Remove duplicates from sorted array

https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. 
The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).

*/

let removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;

    let uniqueIndex = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++;
            nums[uniqueIndex] = nums[i];
        }
    }
    // Resize the array to the new length
    nums.length = uniqueIndex + 1;

    return `k = ${nums.length}`;
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])) // 5

/*
* Start with uniqueIndex at 0 (pointing to the first element).

* Traverse through the array with i starting from 1.

* Whenever you find a new unique element (i.e., nums[i] !== nums[uniqueIndex]), 
  move uniqueIndex forward and overwrite nums[uniqueIndex] with nums[i].

* At the end, uniqueIndex + 1 gives you the number of unique elements.

*/

let removeDuplicates2 = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Pointer for unique elements

    for (let j = 1; j < nums.length; j++){
        if(nums[i] !== nums[j]) {
            i++; //move the pointer forward
            nums[i] = nums[j]; // Place the unique element
        }
    }
    return `count = ${i + 1}`;
};

console.log(removeDuplicates2([0,0,1,1,1,2,2,3,3,4])) // 5