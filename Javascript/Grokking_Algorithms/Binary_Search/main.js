

function binarySearch(list, item){

    let low = 0;
    let high = list.length - 1;

    while (low <= high){
        let mid = Math.floor((low + high) / 2);// Ensure mid is an integer
        let guess = list[mid];
    
    if(guess === item){
        return mid;// Found the item

    }
    if(guess > item){
        high = mid - 1;// Search the left half
    } else {
        low = mid + 1; // Search the right half
    }
}

    return null; // Item not found
}

console.log(binarySearch([1,3,5,7,9],7));

/* 
Time Complexity Analysis
Dividing the Search Space:

In Each Iteration: Binary search works by repeatedly dividing the search space in half. Each time it compares the target value to the middle element and decides whether to continue searching in the left half or the right half of the remaining elements.
Number of Iterations: Since the search space is halved with each step, the number of iterations required to narrow down the search space to a single element is proportional to the logarithm (base 2) of the number of elements. This is because the size of the search space reduces exponentially.

Mathematically, the number of iterations k needed to reduce the search space to 1 element is given by:

𝑘=log2n
​
where n is the number of elements.

Worst-Case Time Complexity:

Best Case: The best-case time complexity occurs when the middle element is equal to the target on the first comparison. This is 
𝑂(1), but this is not typically what is considered for analyzing time complexity.

Average and Worst Case: In the average and worst cases, you may need to search through the entire height of the search space tree. Since the height of this tree is 
log2𝑛 the time complexity is 
𝑂(log𝑛).

Space Complexity
Space Complexity: The space complexity of the binary search algorithm is 
𝑂(1)if implemented iteratively. This is because binary search only requires a
constant amount of additional space for variables (like low, high, mid, and guess).


Summary
Time Complexity: 
𝑂(log𝑛)

Space Complexity: 
𝑂(1)

Binary search is efficient for large datasets because it quickly reduces the number of elements to be checked. 
However, it requires that the array is sorted before performing the search. 
If the array is not sorted, binary search will not work correctly.


*/