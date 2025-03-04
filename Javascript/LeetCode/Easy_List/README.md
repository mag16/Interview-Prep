## ARRAY Methods in JavaScript ##

1. Creating and Modifying Arrays
	•	Array Constructor: ``` let arr = new Array(size) ```
Creates an array with a specified size.

2.	•	Array Constructor: ```let arr = new Array(size) ```
Creates an array with a specified size.

3.	•	Array Literal: ``` let arr = [1, 2, 3] ```
Creates an array with the specified elements.

4.	•	Array.from():
Creates a new array from an array-like or iterable object.
Example: Array.from('hello') → ``` ['h', 'e', 'l', 'l', 'o']```.

5.	•	Array.fill():
Fills all elements in an array from a start index to an end index with a specific value.
Example: arr.fill(0) → ```[0, 0, 0]```.

6.	•	Array.push():
Adds one or more elements to the end of an array and returns the new length.
Example: arr.push(4) → ```[1, 2, 3, 4]```.

7.	•	Array.pop():
Removes the last element from an array and returns that element.
Example: arr.pop() → ```[1, 2]```.

8.	•	Array.unshift():
Adds one or more elements to the front of an array and returns the new length.
Example: arr.unshift(0) → ``` [0, 1, 2, 3]```.

9.	•	Array.shift():
Removes the first element from an array and returns that element.
Example: arr.shift() → ```[2, 3]```.

10.	•	Array.splice():
Adds/removes items to/from an array at a specific index.
Example: arr.splice(1, 2) → Removes two elements starting at index 1.

11.	•	Array.concat():
Merges two or more arrays into a new array.
Example: arr.concat([4, 5]) → ```[1, 2, 3, 4, 5]```.

### Searching and Iterating ###

2. Searching and Iterating
	•	Array.forEach():
Executes a provided function once for each array element.
Example: ```arr.forEach(item => console.log(item))```.

	•	Array.map():
Creates a new array populated with the results of calling a function on every element in the original array.
Example: ``` arr.map(item => item * 2) → [2, 4, 6]```.

	•	Array.filter():
Creates a new array with all elements that pass the test implemented by the provided function.
Example: ```arr.filter(item => item > 1) → [2, 3]```.

	•	Array.reduce():
Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.
Example: ```arr.reduce((acc, curr) => acc + curr, 0) → 6```.

	•	Array.find():
Returns the value of the first element in the array that satisfies the provided testing function.
Example: ```arr.find(item => item > 1) → 2```.

	•	Array.indexOf():
Returns the first index at which a given element can be found in the array, or -1 if not present.
Example: ```arr.indexOf(2) → 1```.

	•	Array.includes():
Determines whether an array contains a certain element.
Example: ```arr.includes(2) → true```.

	•	Array.some():
Tests whether at least one element in the array passes the test implemented by the provided function.
Example: ``` arr.some(item => item > 1) → true ```.

	•	Array.every():
Tests whether all elements in the array pass the test implemented by the provided function.
Example: ``` arr.every(item => item > 0) → true ```.

	•	Array.sort():
Sorts the elements of the array in place and returns the sorted array.
Example: ``` arr.sort() → [1, 2, 3] ```.

### Transforming Arrays ###
	•	Array.slice():
Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).
Example: ```arr.slice(1, 3) → [2, 3]```.

	•	Array.reverse():
Reverses the elements of an array in place.
Example: ``` arr.reverse() → [3, 2, 1]```.

	•	Array.join():
Joins all elements of an array into a single string, separated by a specified delimiter.
Example: ```arr.join('-') → '1-2-3'```.

	•	Array.flat():
Flattens nested arrays into a single-level array.
Example: ``` arr.flat() → [1, 2, 3, 4] (if arr = [1, [2, 3], [4]])```.

	•	Array.flatMap():
First maps each element using a mapping function, then flattens the result into a new array.
Example: ``` arr.flatMap(x => [x, x * 2]) → [1, 2, 2, 4, 3, 6] ```.

### Other Useful Methods ###

	•	Array.fill():
Fills all elements in an array from a start index to an end index with a specific value.
Example: ``` arr.fill(0) → [0, 0, 0] ```.

	•	Array.copyWithin():
Shallow copies a portion of an array to another location within the same array.
Example: ```arr.copyWithin(0, 2) → [3, 4, 5]```.

	•	Array.findIndex():
Returns the index of the first element that satisfies the provided testing function.
Example: ``` arr.findIndex(item => item > 2) → 2```.

	•	Array.sort():
Sorts the array. For numerical values, you may need to pass a compare function to get a proper numeric sort.
Example: ```arr.sort((a, b) => a - b) → [1, 2, 3] ```.

### Array Methods Summary by Category ###
	•	Adding/Removing Elements: push(), pop(), shift(), unshift(), splice(), concat()
	•	Searching and Iterating: forEach(), map(), filter(), reduce(), find(), indexOf(), includes(), some(), every()
	•	Transforming Arrays: slice(), reverse(), sort(), flat(), flatMap(), join()
	•	Other: fill(), copyWithin(), findIndex()



# JavaScript Array Methods for Coding Interviews

A comprehensive list of JavaScript array methods and techniques to improve your coding interview prep.

## Array Methods

### Creating and Modifying Arrays
- **Array Constructor**: `let arr = new Array(size)`
- **Array Literal**: `let arr = [1, 2, 3]`
- **Array.from()**: `Array.from('hello')` → `['h', 'e', 'l', 'l', 'o']`
- **Array.fill()**: `arr.fill(0)` → `[0, 0, 0]`
- **Array.push()**: `arr.push(4)` → `[1, 2, 3, 4]`

### Searching and Iterating
- **Array.forEach()**: Executes a provided function once for each element.
- **Array.map()**: Creates a new array with the results of calling a function on every element.
- **Array.filter()**: Creates a new array with all elements that pass the test.
- **Array.reduce()**: Applies a function against an accumulator and each element.

## Resources
- [LeetCode - Array Problems](https://leetcode.com/tag/array/)
- [GeeksforGeeks - Arrays](https://www.geeksforgeeks.org/array-data-structure/)
- [Cracking the Coding Interview](https://www.amazon.com/Cracking-Coding-Interview-Programming-Questions/dp/0984782850)