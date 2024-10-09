/*
Websites referrenced:
*Geeksforgeeks
https://www.geeksforgeeks.org/two-pointers-technique/

* Basedash
https://www.basedash.com/blog/the-two-pointers-technique-in-javascript

*/

//Problems you can use the two pointer technique:



console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ FindSumPair ~~~~~~~~~~~~~~~~~~~~~~~~');

//Opposite direction movement
//only works with sorted arrays so sort the array first if not sorted
function findSumPair(arr,sum) {
    arr.sort((a, b) => a - b);
    let left = 0; // pointer 1
    let right = arr.length - 1; // pointer 2

    while (left < right) {
        const currentSum = arr[left] + arr[right];
        if (currentSum === sum) {
            return [left, right];
        } else if (currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }

    return null;
}

console.log(findSumPair([2,3,4,5,2,14,5], 19));
console.log(findSumPair([2,3,4,5,2,14,5], 16));
console.log(findSumPair([2,3,4,5,2,14,5], 7));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Max Consecutive Count ~~~~~~~~~~~~~~~~~~~');

// Same direction pointer.  Sliding window approach

function maxConsecutiveSum(arr, k) {
    let maxSum = 0; // to store the maximum sum of k consecutive elements.
    let tempSum = 0; // to store the current sum of the sliding window.
    let start = 0; // to mark the start of the window.

    // Sliding window loop  end = end of the window
    for (let end = 0; end < arr.length; end++) {
        tempSum += arr[end]; // tempSum += arr[end]: Add the current element to tempSum.
        if (end >= k - 1) { // Once the window reaches size k:
            maxSum = Math.max(maxSum, tempSum); // Update maxSum if tempSum is larger, returns largest value
            tempSum -= arr[start] // subtract the element at the start of the window from tempSum (to slide the window)
            start++; //Move the start of the window forward
        }
    }

    return maxSum;
}

console.log(maxConsecutiveSum([1, 2, 3, 4, 5, 6, 7], 3));
