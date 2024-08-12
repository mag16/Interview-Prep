// P.35 on Grokking Algorithms book

function findSmallest(arr) {
    let smallest = arr[0];
    let smallestIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
            smallestIndex = i;
        }
    }
    return smallestIndex;
}

function selectionSort(arr) {
    let newArr = [];
    
    // Continue until the original array is empty
    while (arr.length > 0) {
        let smallestIndex = findSmallest(arr);
        // Remove the smallest element from the original array and push it to newArr
        newArr.push(arr.splice(smallestIndex, 1)[0]);
    }

    return newArr;
}

console.log(selectionSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])); // Should output a sorted array
console.log(selectionSort([10, 3, 7, 8, 4, 6])); // Should output a sorted array


/* 
array.splice(start, deleteCount, item1, item2, ...)

start: The index at which to start changing the array.
deleteCount: The number of elements to remove from the array.
item1, item2, ...: Items to add to the array, starting from the start index.

Key Points
Removing Elements:

If you want to remove elements from an array, you specify the start index and deleteCount.
For example, array.splice(2, 1) removes one element at index 2.

Adding Elements:

You can also add elements at a specific index without removing any.
For example, array.splice(2, 0, 'newItem') adds 'newItem' at index 2 without removing any elements.

Replacing Elements:

You can remove some elements and add new ones in their place.
For example, array.splice(2, 1, 'newItem') removes one element at index 2 and adds 'newItem' at that position.

Usage in Selection Sort
In the context of your selectionSort function:

let smallestIndex = findSmallest(arr);
newArr.push(arr.splice(smallestIndex, 1)[0]);

arr.splice(smallestIndex, 1):

smallestIndex: This is the index of the smallest element found in the array.
1: This tells splice to remove exactly one element at the index specified by smallestIndex.
This effectively removes the smallest element from the original array arr and returns an array containing that single removed element.

[0]:

splice returns an array of the removed elements. Since you are removing only one element, this array will have one item. The [0] accesses this single item from the returned array.
newArr.push(...):

This pushes the smallest element (which was removed from arr using splice) onto the newArr array.
Why splice Was Used
In-Place Removal: The splice method is ideal for removing an element at a specific index while modifying the original array
 in place. This fits well with the selection sort algorithm, which involves repeatedly finding and removing the smallest 
 element.

Efficiency: splice directly modifies the array and allows for efficient removal of elements without creating additional 
arrays, which helps in maintaining low space complexity.

Summary
The splice method was used in your selectionSort function to remove the smallest element from the 
array and immediately place it into the newArr. This method simplifies the process of removing elements 
from the original array and avoids the need for manually shifting elements, making the sorting operation
straightforward and efficient.

*/





/* 
Time Complexity
Worst-case Time Complexity: 
𝑂(𝑛^2)

Best-case Time Complexity: 
𝑂(𝑛^2)

Average-case Time Complexity: 
𝑂(𝑛^2)

Space Complexity: 
𝑂(1) (In-place sorting)

Selection sort is known for its simplicity but is inefficient on 
large lists compared to more advanced algorithms like quicksort, mergesort, or heapsort, 
which have better average-case time complexities. Its main advantage is its simplicity and minimal 
additional memory usage, which can be useful in environments with limited resources.

*/

function selection_sort(arr){
    for (let i = 0; i < arr.length; i++){

        let min = i;

        for (let j = i + 1; j < arr.length; j++){
            if (arr [j] < arr[min]){
                min = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }

    return arr;
}

console.log(selection_sort([5,4,3,2,1]));