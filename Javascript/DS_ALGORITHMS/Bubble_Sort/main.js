
//Ascending order
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; ++i){
        for(let j = 0; j < arr.length - i - 1; ++j){
            if(arr[j] > arr[j + 1]){
                // Swap arr[j] with arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


console.log(bubbleSort([5, 3, 8, 4, 2]))

//Descending Order
function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] < arr[j + 1]){
                // Swap arr[j] with arr[j + 1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


/*  
The expression arr.length - 1 - i in the inner loop of the bubble sort algorithm serves two main purposes: preventing out-of-bounds access and optimizing the sorting process by reducing unnecessary comparisons.

1. Preventing Out-of-Bounds Access:
In a bubble sort, the inner loop compares each element arr[j] with the next element arr[j + 1]. To avoid accessing an index that is out of the array's bounds, the inner loop needs to stop before the last element.

If you run the loop until j < arr.length, then when j reaches arr.length - 1, the comparison arr[j] with arr[j + 1] would access arr[arr.length], which is out of bounds.
By using arr.length - 1, we ensure that j + 1 remains a valid index.

2. Optimizing the Sorting Process:
As the bubble sort algorithm progresses, the largest elements "bubble up" to the end of the array. After each complete iteration of the outer loop, the largest unsorted element is placed at the end of the array, in its final sorted position.

i tracks how many passes have been completed:
After one pass, the largest element is in the last position.
After two passes, the two largest elements are in their final positions, and so on.
By reducing the range of the inner loop (arr.length - 1 - i), you avoid rechecking these elements that are already sorted. This optimization slightly improves performance by reducing the number of comparisons.

How It Works:
Let's break down the loop structure:

Outer Loop (i): Tracks how many times the entire array has been iterated over.

Inner Loop (j < arr.length - 1 - i):

Compares each element with the next and performs a swap if needed.
By reducing the upper bound with - i, the loop skips over elements that are already sorted in previous passes.
Example:
Consider sorting the array [4, 3, 2, 1] using bubble sort.

First Pass (i = 0):

Inner loop runs from j = 0 to j = arr.length - 2 = 2.
Largest element 4 is moved to the last position.
Second Pass (i = 1):

Inner loop runs from j = 0 to j = arr.length - 2 - 1 = 1.
Next largest element 3 is moved to the second last position.
Third Pass (i = 2):

Inner loop runs from j = 0 to j = arr.length - 2 - 2 = 0.
The smallest two elements are now sorted.
Each subsequent pass shortens the range of the inner loop because the elements at the end of the array are already in their correct positions.

Summary:
arr.length - 1 - i ensures that the inner loop does not access out-of-bounds elements and skips over the parts of the array that are already sorted, making the sorting process more efficient.
*/

/* 
Time Complexity : O(n^2)
nested for loops



Space Complexity:O(1)

Why is the Space Complexity 
𝑂(1)?
In-Place Sorting: Bubble sort is an in-place sorting algorithm,
 meaning that it sorts the array without requiring any additional space proportional 
 to the input size. The sorting is done by swapping elements within the original array.

No Extra Space for Large Inputs: The algorithm only uses a few extra variables 
(like temp for swapping and loop counters i and j), and the amount of memory these variables 
use does not depend on the size of the input array n.

Summary:
Space Complexity: 
𝑂(1)
Reason: Bubble sort requires only a constant amount of extra space, regardless of the input size, 
making it an in-place sorting algorithm with very low space requirements.

*/