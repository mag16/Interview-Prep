/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344046#overview

coderByte:
https://www.youtube.com/watch?v=TKrMgCCwNGQ&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=5

*/

// Ways to time your code.
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i ++){
        total += i;
    }
    return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`)

function addUpTo2(n) {
    return n * (n + 1) / 2;
}

let time1 = performance.now();
addUpTo2(1000000000);
let time2 = performance.now();
console.log(`Time elapsed on recursive function: ${(time2 - time1) / 1000} seconds.`)


// BIG O

// 0(n)
function logAtLeast5(n) {
    for (let i = 1; i<= Math.max(5,n); i++) {
        console.log(i);
    }
    return `Logged at least 5 times for n = ${n}`;
};

console.log(`log at least five : ${logAtLeast5(4)}`);

function logAtLeast5(n) {
    for (let i = 1; i<= Math.max(5,n); i++) {
        console.log(i);
    }
    return `Logged at least 5 times for n = ${n}`;
};

console.log(`log at least five : ${logAtLeast5(8)}`);


// O(1)
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
    return `Logged at most 5 times for n = ${n}`;
};

console.log(`log at most five : ${logAtMost5(3)}`);

/*
BigO Array Operations
- Push - O(1)
- Pop - O(1)
- Shift - O(N)
- Unshift - O(N)
- Concat - O(N)
- Slice - O(N)
- Splice - O(N)
- Sort - O(N Log N)
- forEach/map/filter - O(N)

*/

// Solve or simplify section

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Frequency Counter Pattern ~~~~~~~~~~~~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~ CharCount ~~~~~~~~~~~~~~~~~~~~~~');

function charCount(str) {
    //make object to return at end
    let result = {};
    // loop over string for each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add on to count
        if(result[char] > 0){
            result[char]++;
        }
        else {
            result[char] = 1;
        };

        return result;
    }
};

console.log(`The character count of this string w/charCount is :`, charCount("Pizza"));

function charCount2(str) {
    let obj = {};
    let regex = /[a-z0-9]/;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (regex.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }

    return obj;
};

console.log(`The character count of this string w/charCount2 is :`, charCount2("Pizza"));

function charCount3(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
             
    }

    return obj;
};

console.log(`The character count of this string w/charCount3 is :`, charCount3("Hello"));

/*
FREQUENCY COUNTERS (Pattern):
This Pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
*/

// naive soln
console.log('~~~~~~~~~~~~~~~~~~~~~~~ Frequency Pattern ~~~~~~~~~~~~~~~~~~~~~~');


function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1);
    }

    return true
};

console.log(`The same naive soln for arr1 & arr2 :`, same([1, 2, 3], [1, 4, 9]));

function same2(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    return true
}

console.log(`The same2 refactored soln for arr1 & arr2 :`, same2([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));

/*
ANAGRAM
Given two strings, write a function to determine if the
second string is an anagram of the first.  An anagram is a word,
phrase, or name formed by arranging the letters of another, such as cinema from iceman.

Time Complexity : O(N)

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM ~~~~~~~~~~~~~~~~~~~~~~');

const validAnagram = (a,b) => {
    // Check if strings have the same length
    if(a.length !== b.length) return false;
    // Initialize frequency counters for both strings
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // Populate frequencyCounter1 with character counts from a
    for (let val of a){
        val = val.toLowerCase();// Convert to lowercase for case insensitivity
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;// Increment count or initialize to 1
    }
    
    // Populate frequencyCounter1 with character counts from b
    for (let val of b){
        val = val.toLowerCase();
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

     // Compare character counts in frequencyCounter1 and frequencyCounter2
    for (let key in frequencyCounter1) {
        // Check if the key exists in frequencyCounter2
        if (!(key in frequencyCounter2)) {
            return false; // Return false if the key does not exist
        }
        // Compare counts for each character
        if (frequencyCounter2[key] !== frequencyCounter1[key]) {
            return false; // Return false if the counts do not match
        }
    }

    // If all checks pass, the strings are anagrams
    return true;
};

console.log('is this a valid aganagram ? : ("","")',validAnagram("",""));
console.log('is this a valid aganagram ?: ("aaz","zza")',validAnagram("aaz","zza"));
console.log('is this a valid aganagram ?: ("anagram","nagaram")',validAnagram("anagram","nagaram"));
console.log('is this a valid aganagram ?: ("rat","cat")',validAnagram("rat","cat"));
console.log('is this a valid aganagram ?: ("awesome","awesom")',validAnagram("awesome","awesom"));
console.log('is this a valid aganagram ?: ("qwerty","qeywrt")',validAnagram("qwerty","qeywrt"));
console.log('is this a valid aganagram ?: ("texttwisttime","timetwisttext")',validAnagram("texttwisttime","timetwisttext"));


console.log('~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM 2 ~~~~~~~~~~~~~~~~~~~~~~');

const validAnagram2 = (first,second) => {
    // Check if strings have the same length
    if(first.length !== second.length) return false;
    // Initialize frequency counters for both strings
    let lookup = {};
    
    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // cant find letter or letter is zero then its not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    // If all checks pass, the strings are anagrams
    return true;
};

console.log('is this a valid aganagram2 ? : ("","")',validAnagram2("",""));
console.log('is this a valid aganagram2 ?: ("aaz","zza")',validAnagram2("aaz","zza"));
console.log('is this a valid aganagram2 ?: ("anagram","nagaram")',validAnagram2("anagram","nagaram"));
console.log('is this a valid aganagram2 ?: ("rat","cat")',validAnagram2("rat","cat"));
console.log('is this a valid aganagram2 ?: ("awesome","awesom")',validAnagram2("awesome","awesom"));
console.log('is this a valid aganagram2 ?: ("qwerty","qeywrt")',validAnagram2("qwerty","qeywrt"));
console.log('is this a valid aganagram2 ?: ("texttwisttime","timetwisttext")',validAnagram2("texttwisttime","timetwisttext"));

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers ~~~~~~~~~~~~~~~~~~~~~~');

/*
Multiple Pointers
Creating pointers or values that correspond to an index or position
and move towards the beginning, end or middle based on a certain position

very efficient for solving problems with a minimal space complexity as well
*/

/*
SumZero
write a function called sumZero which accepts a sorted array of integers. 
The function should find the first pair where the sum is zero.  Return an array that includes
both values that sum to zero on undefined if a pair does not exist.

time 0(N)
space 0(1)
*/

const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    
    while (left < right) {
        let sum = arr[left] + arr[right];
        
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    
    return undefined; // If no pairs found
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])) // [-3, -3]
console.log(sumZero([-2, 0, 1, 3])) // undefined
console.log(sumZero([1, 2, 3])) //undefined
console.log(sumZero([-5, 1, 2, 3, 4, 5])) // [-5, 5]

/*
countUniqueValues
implement a function called countUniqueValues,
which accepts a sorted array and counts the unique values in an array.
There can be a negative numbers in the array, but it will always be sorted
*/

//no pointers here solved with methods.
const countUniqueValues = (array) => {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        if (array.indexOf(index) === i) {
            count++;
        }
    }
    return count;
};

console.log('countUnquiqueValues:',countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log('countUnquiqueValues:',countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log('countUnquiqueValues:',countUniqueValues([])); // 0
console.log('countUnquiqueValues:',countUniqueValues([-2, -1, -1, 0, 1])); // 2




const countUniqueValues2 = (array) => {
    let uniqueValues = new Set(array);
    return uniqueValues.size;
};

console.log('countUniqueValues2:', countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2

/*
1. Use two pointers that start from the beginning of the array.

2 .Increment the second pointer to find unique values.

3 .Update the first pointer when a unique value is found.

In this approach:

* Pointer i tracks unique elements.

* Pointer j scans through the array.

* When a new unique value is found at j, it's moved to the position at i + 1.
*/

const countUniqueValuesWPointers = (array) => {
    if (array.length === 0) return 0;
    
    let i = 0; //tracks unique elements
    
    for (let j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
        // console.log("i: ",i,"j: ",j)
    }
    
    return i + 1; // since i is index-based, add 1 for count
};

// Test cases
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([1, 1, 1, 1, 1, 2])); // 2
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([1, 2, 3, 4, 5])); // 5
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([1, 2, 2, 2, 3, 4, 4])); // 4
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([1, 1, 1, 1, 1, 2])); // 2
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([])); // 0
console.log('countUnquiqueValuesWPointers:',countUniqueValuesWPointers([-2, -1, -1, 0, 1])); // 4





console.log('~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers: findPair ~~~~~~~~~~~~~~~~~~~~~~');


function findPair(arr, targetSum) {
    let leftPointer = 0,
        rightPointer = arr.length - 1,
        pair = null;


    
        while (leftPointer != rightPointer){
            pairSum = arr[leftPointer] + arr[rightPointer];
            if (pairSum === targetSum) {
                pair = [arr[leftPointer], arr[rightPointer]];
                break;
            } else if (pairSum < targetSum) {
                leftPointer++
            } else if (pairSum > targetSum) {
                rightPointer--
            }

        }

        return pair;
};

console.log(findPair([1, 2, 3, 4, 5], 7)) // [2, 5]
console.log(findPair([1, 6, 8, 9, 10], 14)) // [6, 8]
console.log(findPair([1, 3, 4, 6, 8, 10], 12)) // [4, 8]
console.log(findPair([1, 2, 3, 4, 5], 10)) // null

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers: Triplets Sum To Zero ~~~~~~~~~~~~~~~~~~~~~~');
/*
**************  Triplets Sum to Zero  ***************
Given an array of unsorted numbers, find
all unique triplets in it that add up to zero

[-3, 0 ,1, 2, -1, 1, -2]  ====>
[[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]

Steps to solve:
1. Sort the array
2. Loop over the array
    a. Take the negative of the array[i] as a targetSum
    b. Look for the pair of to the targetSum
       using two pointers.

*/

function tripletsToZero(arr) {
    arr.sort((a, b) => a - b);

    const triplets = [];

    for (let i = 0; i < arr.length; i++) {
        let targetSum = -arr[i];

        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }

        searchPair(arr, targetSum, i + 1, triplets);
    };

    return triplets;
};

function searchPair(arr, targetSum, leftPointer, triplets) {
    let rightPointer = arr.length - 1;

    while (leftPointer < rightPointer){
        const currentSum = arr[leftPointer] + arr[rightPointer];
        // we found a triplet
        if (currentSum === targetSum){
            triplets.push([-targetSum, arr[leftPointer], arr[rightPointer]])
            leftPointer++;
            rightPointer--;
            // move the pointer up until we get a new integer that is different
            while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer - 1]) {
                leftPointer++
            }
            while (leftPointer < rightPointer && arr[leftPointer] === arr[leftPointer + 1]) {
                rightPointer--;
            } 
        } else if (targetSum > currentSum) {
            leftPointer++;
        } else if (targetSum < currentSum) {
            rightPointer--;
        }
    }
};

console.log(tripletsToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(tripletsToZero([-5, 2, -1, -2, 3]));

console.log('~~~~~~~~~~~~~~ Two Pointers Approach: Smallest SubArray To Sort Array ~~~~~~~~~~~~~~~~');
/*
******** Smallest SubArray To Sort Array ***********

Given an array of unsorted numbers, find the length of the smallest subarray
that when sorted will sort the whole array

[1, 3, 2, 0, -1, 7, 10] =========>  5 (you sort 1, 3, 2, 0, -1) =====> [-1, 0, 1, 2, 3, 7, 10]


1. Initialize leftPointer at the start of the array and rightPointer at the end
2. Walk leftPointer forward until you get to an element that is less than its prev.
3. Walk rightPointer backwards until you get to an element that is greater than its prev
4. Find the maximum and minimum of this subarray.
5. Extend the subarray from the beginning to include any number greater than the minimum of 
the subarray.
6. Extend the subarray from the end to include any number less thatn the maximum of the subarray

CoderByte Video:
https://www.youtube.com/watch?v=RPNrhAHuPoQ&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=6

*/

function findMinimumWindow(arr) {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;

    // Increment the leftPointer until an element is greater than its next
    while (leftPointer < arr.length - 1 && arr[leftPointer] <= arr[leftPointer + 1]) {
        leftPointer++;
    }

    // If array is already sorted
    if (leftPointer === arr.length - 1) return 0;

    // Decrement the rightPointer until an element is less than its previous
    while (rightPointer > 0 && arr[rightPointer] >= arr[rightPointer - 1]) {
        rightPointer--;
    }

    const subArr = arr.slice(leftPointer, rightPointer + 1);
    const subArrMin = Math.min(...subArr);
    const subArrMax = Math.max(...subArr);

    // Extend window to the left to include elements greater than subArrMin
    while (leftPointer > 0 && arr[leftPointer - 1] > subArrMin) {
        leftPointer--;
    }

    // Extend window to the right to include elements less than subArrMax
    while (rightPointer < arr.length - 1 && arr[rightPointer + 1] < subArrMax) {
        rightPointer++;
    }

    return rightPointer - leftPointer + 1;
}


console.log(findMinimumWindow([1, 3, 2, 0, -1, 7, 10]))  // 5
console.log(findMinimumWindow([1, 2, 5, 7, 3, 10, 11, 12])) // 3
console.log(findMinimumWindow([1, 2, 3])) // 0
console.log(findMinimumWindow([4, 3, 2, 1])) // 4
console.log(findMinimumWindow([12, 7, 8, 1, 2, 0, 10, 11])) // 8

console.log('~~~~~~~~~~~~~~ Two Pointers Approach: MinimumWindow2 ~~~~~~~~~~~~~~~~');

/*
Create a Sorted Copy:

const sortedCopy = [...arr].sort((a, b) => a - b);

Makes a sorted copy of the original array to compare with.

Left Pointer:

while (left < arr.length && arr[left] === sortedCopy[left]) { left++; }

Moves the left pointer to the first element that differs between the original and sorted arrays.

Right Pointer:

while (right > left && arr[right] === sortedCopy[right]) { right--; }

Moves the right pointer to the last element that differs between the original and sorted arrays.

Calculate Window Length:

return right - left + 1;

Returns the length of the window that needs sorting.


*/

function findMinimumWindow2(arr) {
    let left = 0;
    let right = arr.length - 1;
    const sortedCopy = [...arr].sort((a, b) => a - b);  // Create a sorted copy of the array

    // Increment the left pointer until the elements differ
    while (left < arr.length && arr[left] === sortedCopy[left]) {
        left++;
    }

    // Decrement the right pointer until the elements differ
    while (right > left && arr[right] === sortedCopy[right]) {
        right--;
    }

    // Return the length of the window
    return right - left + 1;
}


// Testing
console.log(findMinimumWindow2([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(findMinimumWindow2([1, 2, 5, 7, 3, 10, 11, 12])); // 3
console.log(findMinimumWindow2([1, 3, 2])); // 2
console.log(findMinimumWindow2([4, 3, 2, 1])); // 4
console.log(findMinimumWindow2([12, 7, 8, 1, 2, 0, 10, 11])); // 8

console.log('~~~~~~~~~~~~~~ Two Pointers Approach: Slow/Fast Pointers ~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~ Tortoise & Hare ~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~ Does LinkedList Have A Cycle? ~~~~~~~~~~~~~~~~');
/*
**********  Fast & Slow Pointers ************
The fast and slow pointers approach, AKA the
Hare & Tortoise algorithms, is a pointer algorithm
that uses two pointers which move through an array at 
different speeds.  This approach is especially useful when dealing
with cyclic LinkedLists or arrays.

By moving at different speeds, the algorithm proves that the two pointers
are bound to meet.  The fast pointer should catch the slow pointer once both
the pointers are in a cyclic loop.
*/

/*
############## PROBLEM ##############
Given the head of a Singly LinkedList, write
a function to determine if the LinkedList has a cycle in it
or not.

Singly LinkedList
* Every node contains some data and a pointer to the next
node
* Allows traversal of data only in one way

[../../Images/SlowFastPointers.png]

*/

class Node {
    constructor(value, next = null){
        this.value = value
        this.next = next
    }
}

function hasCycle(head){
    let slowPointer = head,
    fastPointer = head

    // while the fastPointer is still in the LinkedList
    while (fastPointer !== null && fastPointer.next !== null) {
        // 2x speed
        fastPointer = fastPointer.next.next;
        // 1x speed
        slowPointer = slowPointer.next;
        if (slowPointer === fastPointer) {
            return true; // cycle
        }
    }
    return false;
}

// Test Case 1
const node6 = new Node(6);
const node5 = new Node(5, node6);
const node4 = new Node(4, node5);
const node3 = new Node(3, node4);
const node2 = new Node(2, node3);
const head1 = new Node(1, node2);

// add the cycle
node6.next = node3;

console.log('Test Case 1 LinkedList hasCycle: ',hasCycle(head1));

// Test Case 2
const nodeF = new Node('f');
const nodeE = new Node('e', nodeF);
const nodeD = new Node('d', nodeE);
const nodeC = new Node('c', nodeD);
const nodeB = new Node('b', nodeC);
const headA = new Node('a', nodeB);

// add cycle
nodeF.next = nodeB;

console.log('Test Case 2 LinkedList hasCycle: ',hasCycle(headA));

// Test Case 3
const nodeYellow = new Node('yellow');
const nodeBlue = new Node('blue', nodeYellow);
const nodeRed = new Node('red', nodeBlue);
const nodePurple = new Node('purple', nodeRed);
const headOrange = new Node('orange', nodePurple);

console.log('Test Case 3 LinkedList hasCycle: ',hasCycle(headOrange));

/*
A cycle in a linked list occurs when a node’s next pointer points back 
to a previous node in the list, creating a loop. This means that traversing 
the list could lead you to infinitely revisit the same set of nodes.

Here’s a visualization:

No Cycle: 1 → 2 → 3 → null

Cycle: 1 → 2 → 3 ↘ ↖ ↙

In the second case, node 3 points back to node 2, creating a cycle.

Slow/Fast Pointer Technique
Slow Pointer: Moves one step at a time.

Fast Pointer: Moves two steps at a time.

If there’s a cycle, the fast pointer will eventually meet the slow pointer 
within the cycle. If there’s no cycle, the fast pointer will reach the end of the list.

*/

console.log('~~~~~~~~~~~~~~ Integer and Sum of Its Squares ~~~~~~~~~~~~~~~~');

/*
************ Problem *************
Given an integer, write a function to determine if after
repeatedly replacing it with an integer equal to the sum
of the square of all of its digits, leads us to the number 1

ex:
Input: 23
Output: true

1. 2^2 + 3^2 = 4 + 9 = 13
2. 1^2 + 3^2 = 1 + 0 = 10
3. 1^2 + 0^2 = 1 + 0 = 1

video:
https://www.youtube.com/watch?v=SJRaMCSgNWQ&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=8

*/

function findUltimateOne(num){
    let slowPointer = num;
    let fastPointer = num;
    /* is there a cycle?
    slowPointer === fastPointer
    return false;

    if there isnt a cycle?
    either slowPointer or fastPointer === 1
    */

    while (true) {
        slowPointer = findSquareSum(slowPointer);
        fastPointer = findSquareSum(findSquareSum(fastPointer));

        if (slowPointer === fastPointer) return false; // Cycle detected
        if (slowPointer === 1 || fastPointer === 1) {
            return true;
        }
    }
};

function findSquareSum(num) {
    let sum = 0;

    while (num > 0) {
        digit = num % 10; // isolate the last digit in num
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
}

console.log('first find the sum of the squares of the digits in Num = 23', findSquareSum(23));
console.log('findUltimateOne of 23',findUltimateOne(23)); // true

console.log('first find the sum of the squares ofsquare of the digits in Num = 12', findSquareSum(12));
console.log('findUltimateOne of 12',findUltimateOne(12)); // false

/*
The findUltimateOne function uses the slow/fast pointer technique to determine if repeatedly summing the squares of the digits of a number eventually leads to 1.

Here’s a breakdown:

1. Initialize Pointers:

* let slowPointer = num;

* let fastPointer = num;

* Both pointers start at the original number.

2. Cycle Detection:

* The function aims to detect a cycle (endless loop) or reach the value 1.

3 .While Loop:

* while (true) { ... }

* This infinite loop continues until either a cycle is detected or the number 1 is reached.

4. Move Pointers:

* slowPointer = findSquareSum(slowPointer);

* fastPointer = findSquareSum(findSquareSum(fastPointer));

* The slow pointer moves by calculating the square sum once.

* The fast pointer moves by calculating the square sum twice (advances two steps).

5. Cycle Check:

* if (slowPointer === fastPointer) return false;

* If slow and fast pointers meet, a cycle is detected, meaning the number will never reach 1.

6 .Reach 1 Check:

* if (slowPointer === 1 || fastPointer === 1) { return true; }

* If either pointer reaches 1, the function returns true, indicating success.

So essentially, it's checking if the process of summing the squares of digits will reach 1 (true) or fall into a loop (false).
*/

console.log('~~~~~~~~~~~~~~ Sliding Window ~~~~~~~~~~~~~~~~');
console.log('~~~~~~~~~~~~~~ Max Sub Array Sum ~~~~~~~~~~~~~~~~');

/*
******************** Max Sub Array Sum ******************
Write a function called maxSubArraySum whiich accepts an array of integers
and a number called n.  The function should calculate the maximum sum of n consecutive elements
in the array.
*/

console.log(maxSubArraySum([1,2,5,2,8,1,5], 2)) // 10
console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubArraySum([4,2,1,6], 1)) // 6
console.log(maxSubArraySum([4,2,1,6,2], 4)) // 13
console.log(maxSubArraySum([], 4)) // null


