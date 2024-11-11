/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344046#overview

coderByte:
https://www.youtube.com/watch?v=TKrMgCCwNGQ&list=PLxQ8cCJ6LyOYCas1Ln-L8kCBquxw20ljC&index=5

*/

// Ways to time your code.
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);

function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

let time1 = performance.now();
addUpTo2(1000000000);
let time2 = performance.now();
console.log(
  `Time elapsed on recursive function: ${(time2 - time1) / 1000} seconds.`
);

// BIG O

// 0(n)
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
  return `Logged at least 5 times for n = ${n}`;
}

console.log(`log at least five : ${logAtLeast5(4)}`);

function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
  return `Logged at least 5 times for n = ${n}`;
}

console.log(`log at least five : ${logAtLeast5(8)}`);

// O(1)
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
  return `Logged at most 5 times for n = ${n}`;
}

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

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~ Frequency Counter Pattern ~~~~~~~~~~~~~~~~~~~~~~"
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~ CharCount ~~~~~~~~~~~~~~~~~~~~~~");

function charCount(str) {
  //make object to return at end
  let result = {};
  // loop over string for each character
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // if the char is a number/letter AND is a key in object, add on to count
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }

    return result;
  }
}

console.log(
  `The character count of this string w/charCount is :`,
  charCount("Pizza")
);

function charCount2(str) {
  let obj = {};
  let regex = /[a-z0-9]/;
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (regex.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  return obj;
}

console.log(
  `The character count of this string w/charCount2 is :`,
  charCount2("Pizza")
);

function charCount3(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
}

console.log(
  `The character count of this string w/charCount3 is :`,
  charCount3("Hello")
);

/*
FREQUENCY COUNTERS (Pattern):
This Pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
*/

// naive soln
console.log("~~~~~~~~~~~~~~~~~~~~~~~ Frequency Pattern ~~~~~~~~~~~~~~~~~~~~~~");

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }

  return true;
}

console.log(
  `The same naive soln for arr1 & arr2 :`,
  same([1, 2, 3], [1, 4, 9])
);

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  return true;
}

console.log(
  `The same2 refactored soln for arr1 & arr2 :`,
  same2([1, 2, 3, 4, 5], [1, 4, 9, 16, 25])
);

/*
ANAGRAM
Given two strings, write a function to determine if the
second string is an anagram of the first.  An anagram is a word,
phrase, or name formed by arranging the letters of another, such as cinema from iceman.

Time Complexity : O(N)

*/

console.log("~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM ~~~~~~~~~~~~~~~~~~~~~~");

const validAnagram = (a, b) => {
  // Check if strings have the same length
  if (a.length !== b.length) return false;
  // Initialize frequency counters for both strings
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Populate frequencyCounter1 with character counts from a
  for (let val of a) {
    val = val.toLowerCase(); // Convert to lowercase for case insensitivity
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // Increment count or initialize to 1
  }

  // Populate frequencyCounter1 with character counts from b
  for (let val of b) {
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

console.log('is this a valid aganagram ? : ("","")', validAnagram("", ""));
console.log(
  'is this a valid aganagram ?: ("aaz","zza")',
  validAnagram("aaz", "zza")
);
console.log(
  'is this a valid aganagram ?: ("anagram","nagaram")',
  validAnagram("anagram", "nagaram")
);
console.log(
  'is this a valid aganagram ?: ("rat","cat")',
  validAnagram("rat", "cat")
);
console.log(
  'is this a valid aganagram ?: ("awesome","awesom")',
  validAnagram("awesome", "awesom")
);
console.log(
  'is this a valid aganagram ?: ("qwerty","qeywrt")',
  validAnagram("qwerty", "qeywrt")
);
console.log(
  'is this a valid aganagram ?: ("texttwisttime","timetwisttext")',
  validAnagram("texttwisttime", "timetwisttext")
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM 2 ~~~~~~~~~~~~~~~~~~~~~~");

const validAnagram2 = (first, second) => {
  // Check if strings have the same length
  if (first.length !== second.length) return false;
  // Initialize frequency counters for both strings
  let lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // cant find letter or letter is zero then its not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  // If all checks pass, the strings are anagrams
  return true;
};

console.log('is this a valid aganagram2 ? : ("","")', validAnagram2("", ""));
console.log(
  'is this a valid aganagram2 ?: ("aaz","zza")',
  validAnagram2("aaz", "zza")
);
console.log(
  'is this a valid aganagram2 ?: ("anagram","nagaram")',
  validAnagram2("anagram", "nagaram")
);
console.log(
  'is this a valid aganagram2 ?: ("rat","cat")',
  validAnagram2("rat", "cat")
);
console.log(
  'is this a valid aganagram2 ?: ("awesome","awesom")',
  validAnagram2("awesome", "awesom")
);
console.log(
  'is this a valid aganagram2 ?: ("qwerty","qeywrt")',
  validAnagram2("qwerty", "qeywrt")
);
console.log(
  'is this a valid aganagram2 ?: ("texttwisttime","timetwisttext")',
  validAnagram2("texttwisttime", "timetwisttext")
);

console.log("~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers ~~~~~~~~~~~~~~~~~~~~~~");

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
};

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, -3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); //undefined
console.log(sumZero([-5, 1, 2, 3, 4, 5])); // [-5, 5]

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

console.log("countUnquiqueValues:", countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(
  "countUnquiqueValues:",
  countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log("countUnquiqueValues:", countUniqueValues([])); // 0
console.log("countUnquiqueValues:", countUniqueValues([-2, -1, -1, 0, 1])); // 2

const countUniqueValues2 = (array) => {
  let uniqueValues = new Set(array);
  return uniqueValues.size;
};

console.log("countUniqueValues2:", countUniqueValues2([1, 1, 1, 1, 1, 2])); // 2

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
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([1, 1, 1, 1, 1, 2])
); // 2
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([1, 2, 3, 4, 5])
); // 5
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([1, 2, 2, 2, 3, 4, 4])
); // 4
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([1, 1, 1, 1, 1, 2])
); // 2
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
); // 7
console.log("countUnquiqueValuesWPointers:", countUniqueValuesWPointers([])); // 0
console.log(
  "countUnquiqueValuesWPointers:",
  countUniqueValuesWPointers([-2, -1, -1, 0, 1])
); // 4

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers: findPair ~~~~~~~~~~~~~~~~~~~~~~"
);

function findPair(arr, targetSum) {
  let leftPointer = 0,
    rightPointer = arr.length - 1,
    pair = null;

  while (leftPointer != rightPointer) {
    pairSum = arr[leftPointer] + arr[rightPointer];
    if (pairSum === targetSum) {
      pair = [arr[leftPointer], arr[rightPointer]];
      break;
    } else if (pairSum < targetSum) {
      leftPointer++;
    } else if (pairSum > targetSum) {
      rightPointer--;
    }
  }

  return pair;
}

console.log(findPair([1, 2, 3, 4, 5], 7)); // [2, 5]
console.log(findPair([1, 6, 8, 9, 10], 14)); // [6, 8]
console.log(findPair([1, 3, 4, 6, 8, 10], 12)); // [4, 8]
console.log(findPair([1, 2, 3, 4, 5], 10)); // null

console.log(
  "~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers: Triplets Sum To Zero ~~~~~~~~~~~~~~~~~~~~~~"
);
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
  }

  return triplets;
}

function searchPair(arr, targetSum, leftPointer, triplets) {
  let rightPointer = arr.length - 1;

  while (leftPointer < rightPointer) {
    const currentSum = arr[leftPointer] + arr[rightPointer];
    // we found a triplet
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[leftPointer], arr[rightPointer]]);
      leftPointer++;
      rightPointer--;
      // move the pointer up until we get a new integer that is different
      while (
        leftPointer < rightPointer &&
        arr[leftPointer] === arr[leftPointer - 1]
      ) {
        leftPointer++;
      }
      while (
        leftPointer < rightPointer &&
        arr[leftPointer] === arr[leftPointer + 1]
      ) {
        rightPointer--;
      }
    } else if (targetSum > currentSum) {
      leftPointer++;
    } else if (targetSum < currentSum) {
      rightPointer--;
    }
  }
}

console.log(tripletsToZero([-3, 0, 1, 2, -1, 1, -2]));
console.log(tripletsToZero([-5, 2, -1, -2, 3]));

console.log(
  "~~~~~~~~~~~~~~ Two Pointers Approach: Smallest SubArray To Sort Array ~~~~~~~~~~~~~~~~"
);
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
  while (
    leftPointer < arr.length - 1 &&
    arr[leftPointer] <= arr[leftPointer + 1]
  ) {
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

console.log(findMinimumWindow([1, 3, 2, 0, -1, 7, 10])); // 5
console.log(findMinimumWindow([1, 2, 5, 7, 3, 10, 11, 12])); // 3
console.log(findMinimumWindow([1, 2, 3])); // 0
console.log(findMinimumWindow([4, 3, 2, 1])); // 4
console.log(findMinimumWindow([12, 7, 8, 1, 2, 0, 10, 11])); // 8

console.log(
  "~~~~~~~~~~~~~~ Two Pointers Approach: MinimumWindow2 ~~~~~~~~~~~~~~~~"
);

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
  const sortedCopy = [...arr].sort((a, b) => a - b); // Create a sorted copy of the array

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

console.log(
  "~~~~~~~~~~~~~~ Two Pointers Approach: Slow/Fast Pointers ~~~~~~~~~~~~~~~~"
);
console.log("~~~~~~~~~~~~~~ Tortoise & Hare ~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~ Does LinkedList Have A Cycle? ~~~~~~~~~~~~~~~~");
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
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function hasCycle(head) {
  let slowPointer = head,
    fastPointer = head;

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

console.log("Test Case 1 LinkedList hasCycle: ", hasCycle(head1));

// Test Case 2
const nodeF = new Node("f");
const nodeE = new Node("e", nodeF);
const nodeD = new Node("d", nodeE);
const nodeC = new Node("c", nodeD);
const nodeB = new Node("b", nodeC);
const headA = new Node("a", nodeB);

// add cycle
nodeF.next = nodeB;

console.log("Test Case 2 LinkedList hasCycle: ", hasCycle(headA));

// Test Case 3
const nodeYellow = new Node("yellow");
const nodeBlue = new Node("blue", nodeYellow);
const nodeRed = new Node("red", nodeBlue);
const nodePurple = new Node("purple", nodeRed);
const headOrange = new Node("orange", nodePurple);

console.log("Test Case 3 LinkedList hasCycle: ", hasCycle(headOrange));

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

console.log("~~~~~~~~~~~~~~ Integer and Sum of Its Squares ~~~~~~~~~~~~~~~~");

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

function findUltimateOne(num) {
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
}

function findSquareSum(num) {
  let sum = 0;

  while (num > 0) {
    digit = num % 10; // isolate the last digit in num
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(
  "first find the sum of the squares of the digits in Num = 23",
  findSquareSum(23)
);
console.log("findUltimateOne of 23", findUltimateOne(23)); // true

console.log(
  "first find the sum of the squares ofsquare of the digits in Num = 12",
  findSquareSum(12)
);
console.log("findUltimateOne of 12", findUltimateOne(12)); // false

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

console.log("~~~~~~~~~~~~~~ Sliding Window ~~~~~~~~~~~~~~~~");
console.log("~~~~~~~~~~~~~~ Max Sub Array Sum ~~~~~~~~~~~~~");

/*
******************** Max Sub Array Sum ******************
Write a function called maxSubArraySum whiich accepts an array of integers
and a number called n.  The function should calculate the maximum sum of n consecutive elements
in the array.
*/

const maxSubArraySum = (array, n) => {
  if (array.length === 0) return null;

  let maxSum = 0;
  let windowSum = 0;

  //calculate the sum of the first window
  for (let i = 0; i < n; i++) {
    windowSum += array[i];
  }

  // Set the maxSum to the initial window sum
  maxSum = windowSum;

  // Slide the window one element at a time
  for (let i = n; i < array.length; i++) {
    windowSum += array[i] - array[i - n]; // slide the window
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
};

console.log("maxSubArray: ", maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 13
console.log(maxSubArraySum([], 4)); // null

console.log("~~~~~~~~~~~~~~ Divide & Conquer ~~~~~~~~~~~~~~~~");

/*
*************** Divide & Conquer ***************

This Pattern involves dividing a dataset into smaller chunks and then repeating
a process with a subset of data.

This pattern can tremendously decreate time complexity
*/

/*
Example:
GIven a sorted array of integers, write a function called search
that accepts a value and returns the index where the value passed to the function
is located.  If the value is not found, return -1

*/
console.log("~~~~~~~~~~~~~~ Search for Index of Value ~~~~~~~~~~~~~~~~");

const search = (arr, index) => {
  return arr.indexOf(index);
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1

const search2 = (arr, index) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === index) {
      return i;
    }
  }
  return -1; // not found
};

console.log(search2([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search2([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search2([1, 2, 3, 4, 5, 6], 11)); // -1

/*
Write a function called sameFrequency. Given two positive integers, 
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)
*/

const sameFrequency = (a, b) => {
  a = a.toString();
  b = b.toString();

  // Check if strings have the same length
  if (a.length !== b.length) return false;
  // Initialize frequency counters for both strings
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // Populate frequencyCounter1 with character counts from a
  for (let val of a) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1; // Increment count or initialize to 1
  }

  // Populate frequencyCounter1 with character counts from b
  for (let val of b) {
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

console.log("Frequency Counter for 182, 281 :", sameFrequency(182, 281)); // true
console.log("Frequency Counter for 34, 14 :", sameFrequency(34, 14)); // false
console.log(
  "Frequency Counter for 3589578, 5879385 :",
  sameFrequency(3589578, 5879385)
); //true

/*
********** Problem *********
Frequency Counter / Multiple Pointers - areThereDuplicates
Implement a function called, areThereDuplicates which accepts a variable
number of arguments, and checks whether there are any duplicates among the arguments passed in.  
You can solve this using the frequency counter pattern OR the multiple pointers pattern.

*/

const areThereDuplicates = (...args) => {
  if (args.length === 0) return false;

  args.sort((a, b) => b - a);

  let i = 0; //tracks unique elements

  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
  }
  return false;
};

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true

function areThereDuplicatesWSet() {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicatesWSet(1, 2, 3)); // false
console.log(areThereDuplicatesWSet(1, 2, 2)); // true
console.log(areThereDuplicatesWSet("a", "b", "c", "a")); // true

// areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates3() {
  // Initialize an empty object to track occurrences
  let collection = {};

  // Loop through all the arguments provided to the function
  for (let val in arguments) {
    // Increment the count for each argument, or set to 1 if it doesn't exist
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  // Loop through the keys in the collection
  for (let key in collection) {
    // Check if any value occurs more than once
    if (collection[key] > 1) return true; // Duplicates found
  }

  // Return false if no duplicates are found
  return false;
}

// Example usage
console.log(areThereDuplicates3(1, 2, 3)); // false
console.log(areThereDuplicates3(1, 2, 2)); // true
console.log(areThereDuplicates3("a", "b", "c", "a")); // true

console.log("~~~~~~~~~~~~~~~ Average Pair ~~~~~~~~~~~~~~~");

const averagePair = (arr, targetAvg) => {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let average = (arr[left] + arr[right]) / 2;

    if (average === targetAvg) {
      return true;
    } else if (average > targetAvg) {
      right = right - 1;
    } else if (average < targetAvg) {
      left = left + 1;
    }
  }

  return false;
};

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

console.log("~~~~~~~~~~~~~~~ isSubsequence ~~~~~~~~~~~~~~~");

const isSubsequence = (a, b) => {
  let pointA = 0; // Initialize pointer for string a
  let pointB = 0; // Initialize pointer for string b

  // Loop through string b until we reach the end
  while (pointB < b.length) {
    // Check if characters at current pointers match
    if (a.charAt(pointA) === b.charAt(pointB)) {
      pointA++; // Move pointerA to next character in a
    }
    pointB++; // Always move pointerB to next character in b

    // If all characters in a have been found in b in sequence
    if (pointA === a.length) {
      return true; // a is a subsequence of b
    }
  }

  // If we exit the loop without finding the subsequence
  return false; // a is not a subsequence of b
};

console.log(
  "isSubsequence of hello & hello World",
  isSubsequence("hello", "hello world")
); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)

/*
nitialization: Two pointers pointA and pointB are set at the beginning of their respective strings.

Main Loop: Runs through the second string b.

Matching Characters: If the characters at pointA and pointB match, increment pointA to move to the next character in a.

Always Move PointerB: Increment pointB to move through b.

Subsequence Check: If pointA equals the length of a, all characters in a have been found in b in sequence, so return true.

Completion: If the loop completes without confirming a subsequence, return false.

*/

// Iterative Soln

function isSubsequence2(str1, str2) {
  let i = 0; // Pointer for str1
  let j = 0; // Pointer for str2

  // If str1 is an empty string, it's trivially a subsequence of str2
  if (!str1) return true;

  // Loop through str2
  while (j < str2.length) {
    // If characters match, move the pointer for str1
    if (str2[j] === str1[i]) i++;

    // If all characters in str1 are found in sequence, return true
    if (i === str1.length) return true;

    // Move the pointer for str2
    j++;
  }

  // If the loop completes without finding the subsequence, return false
  return false;
}

// Example usage
console.log(isSubsequence2("hello", "hello world")); // true
console.log(isSubsequence2("sing", "sting")); // true
console.log(isSubsequence2("abc", "abracadabra")); // true
console.log(isSubsequence2("abc", "acb")); // false (order matters)

console.log("~~~~~~~~~~~~~~~ minSubArrayLen ~~~~~~~~~~~~~~~");
/*
Sliding Window - minSubArrayLen
Write a function called minSubArrayLen which accepts two parameters - 
an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum 
is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
Examples:

minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
Time Complexity - O(n)

Space Complexity - O(1)
*/

const minSubArrayLen = (array, n) => {
  // If the array is empty, return 0
  if (array.length === 0) return 0;

  // Initialize pointers and variables to track sum and minimum length
  let start = 0;
  let sum = 0;
  let minLen = Infinity;

  // Loop through the array
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // Add current element to the sum

    // While the sum is greater than or equal to the target
    while (sum >= n) {
      // Update the minimum length of the subarray
      minLen = Math.min(minLen, i - start + 1);
      sum -= array[start]; // Subtract the start element from the sum
      start++; // Move the start pointer to the right
    }
  }

  // Return the minimum length if found, else 0
  return minLen !== Infinity ? minLen : 0;
};

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen(([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52))); // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

console.log("~~~~~~~~~~~~~~~ findLongestSubstring ~~~~~~~~~~~~~~~");

const findLongestSubstring = (str) => {
  let longest = 0; // Track the length of the longest substring
  let seen = {}; // Store the last seen positions of characters
  let start = 0; // Start index of the current substring

  for (let i = 0; i < str.length; i++) {
    let char = str[i]; // Current character

    // If we have seen the character before
    if (seen[char]) {
      // Update the start position to be the maximum of current start and the last seen position of the character
      start = Math.max(start, seen[char]);
      // console.log(`Character ${char} seen before. Updating start to ${start}`);
    }

    // Calculate the length of the current substring and update longest
    longest = Math.max(longest, i - start + 1);
    //console.log(`Updated longest to ${longest}. Current substring: ${str.substring(start, i + 1)}`);

    // Store the next position of the current character (i + 1 to avoid double counting)
    seen[char] = i + 1;
    //console.log(`Updating last seen position of character ${char} to ${i + 1}`);
  }

  return longest; // Return the length of the longest substring
};

// Example usage with logs
console.log(findLongestSubstring("abcabcbb")); // Example: 3 ("abc")
console.log(findLongestSubstring("hello world")); //
console.log(findLongestSubstring("abcabcbb")); // Example: 3 ("abc")
console.log(findLongestSubstring("bbbbb")); // 1 ("b")
console.log(findLongestSubstring("pwwkew")); // 3 ("wke")
console.log(findLongestSubstring("")); // 0 (empty string)
console.log(findLongestSubstring("dvdf")); // 3 ("vdf")

console.log("~~~~~~~~~~~~~~~ Recursion ~~~~~~~~~~~~~~~");
/**
 * 
 recursion is essentially a function calling itself. 
 It's a technique used in programming where a function calls itself 
 directly or indirectly to solve a problem. The key components of recursion are:

Base Case: This is the condition under which the recursive calls stop. 
It's crucial to prevent infinite loops.

Recursive Case: This is where the function calls itself with 
modified arguments, inching closer to the base case with each call.
 */
function factorial(n) {
  if (n === 0) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1); // Recursive call
}

console.log(factorial(5)); // Output: 120

function factorialIterative(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }

  return total;
}

console.log(factorialIterative(4));

console.log("~~~~~~~~~~~~~~~ collectOddValues ~~~~~~~~~~~~~~~");

const collectOddValues = (arr) => {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
};

console.log(collectOddValues([1, 2, 3, 4, 5]));

// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(b, e) {
  if (e == 0) return 1;

  return b * power(b, e - 1);
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(arr) {
  let total = 1;

  for (let i = 0; i < arr.length; i++) {
    total *= arr[i];
  }

  return total;
}

function productOfArray2(arr) {
  // Base case: when the array is empty, return 1
  if (arr.length === 0) {
    return 1;
  }
  // Recursive case: multiply the first element by the product of the rest of the array
  return arr[0] * productOfArray(arr.slice(1));
}

// Example usage
console.log(productOfArray2([1, 2, 3])); // Output: 6
console.log(productOfArray2([1, 2, 3, 10])); // Output: 60

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(n) {
  if (n === 0) return 0; // Base case: when n is 0, return 0
  return n + recursiveRange(n - 1); // Recursive case: sum of n + the sum of all numbers before n
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
  if (str.length === 0) return "";
  return reverse(str.slice(1)) + str.charAt(0);
}

/* 
You
use .slice?
Copilot
Absolutely! Using .slice() is a great approach to help break down the string into smaller parts for the recursive function. Here's how you can use .slice() in your recursive function:

Concept:
Base Case: If the string is empty (str.length === 0), return an empty string.

Recursive Case: Take the last character of the string, and concatenate it with the reversed version of the remaining substring.

Here’s how you can do it in pseudocode:

Base Case: Check if the string is empty.

Recursive Case: Slice the string to isolate the last character and the rest of the string.

Using .slice():
str.slice(1): This gives you the string without the first character.

str.charAt(0): This gives you the first character of the string.

Putting it all together:

javascript

Copy
function reverseString(str) {
    if (str.length === 0) return '';
    return reverseString(str.slice(1)) + str.charAt(0);
}
How it Works:
Base Case: When the string is empty, return an empty string.

Recursive Case: Call the function with the rest of the string (str.slice(1)) 
and append the first character (str.charAt(0)).

So for the string "hello":

reverseString("hello") -> reverseString("ello") + "h"

reverseString("ello") -> reverseString("llo") + "e"

reverseString("llo") -> reverseString("lo") + "l"

reverseString("lo") -> reverseString("o") + "l"

reverseString("o") -> reverseString("") + "o"

Base case: return ""

When combined back:

"o" + "" = "o"

"l" + "o" = "lo"

"l" + "lo" = "llo"

"e" + "llo" = "ello"

"h" + "ello" = "olleh"

*/

function isPalindrome(str) {
  if (str.length === 0) return true; // Empty string is considered a palindrome

  let reverseString = (str) => {
    if (str.length === 0) return "";
    return reverseString(str.slice(1)) + str.charAt(0);
  };

  const reversedStr = reverseString(str);
  return str === reversedStr;
}

// Example usage
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello")); // Output: false

/*
someRecursive
Write a recursive function called someRecursive which accepts an array and a 
callback. The function returns true if a single value in the array returns true 
when passed to the callback. Otherwise it returns false.

*/

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false
console.log("~~~~~~~~~~~~~~~~~~~~~ someRecursive ~~~~~~~~~~~~~~");

function someRecursive(arr, cb) {
  // Base case: if the array is empty
  if (arr.length === 0) return false;

  // Check the first element with the callback
  if (cb(arr[0])) return true;

  // Otherwise, recurse with the rest of the array
  return someRecursive(arr.slice(1), cb);
}

const isOdd = (val) => val % 2 !== 0;

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 6, 8, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

console.log("~~~~~~~~~~~~~~~~~~~~~ flatten Array ~~~~~~~~~~~~~~");

function flatten(arr) {
  // add whatever parameters you deem necessary - good luck!
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

flatten([1, 2, 3, [4, 5]]); // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]); // [1, 2, 3, 4, 5]
flatten([[1], [2], [3]]); // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]); // [1,2,3

//with method
function flatten2(arr) {
  // add whatever parameters you deem necessary - good luck!
  return arr.flat();
}

console.log(flatten2([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten2([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten2([[1], [2], [3]])); // [1,2,3]
console.log(flatten2([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

/*

capitalizeFirst
Write a recursive function called capitalizeFirst. 
Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
  // Base case: if the array is empty
  if (arr.length === 0) return [];

  // Capitalize the first letter of the first string
  const capitalized = arr[0].charAt(0).toUpperCase() + arr[0].slice(1);

  // Recursively call capitalizeFirst on the rest of the array
  return [capitalized, ...capitalizeFirst(arr.slice(1))];
}

/*
arr[0]: Entire first string.

arr[0].charAt(0).toUpperCase(): First character capitalized.

arr[0].slice(1): Rest of the string.

*/

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
console.log(capitalizeFirst(["sony", "tamron", "canon"]));

console.log("~~~~~~~~~~~~~~~~~~~~~ nestedEvenSum ~~~~~~~~~~~~~~");

/*
nestedEvenSum
Write a recursive function called nestedEvenSum. 
Return the sum of all even numbers in an object 
which may contain nested objects.

*/

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;

  for (const val in obj) {
    if (typeof obj[val] === "number" && obj[val] % 2 === 0) {
      // If it's an even number, add it to the sum
      sum += obj[val];
    } else if (typeof obj[val] === "object" && obj[val] !== null) {
      // If it's a nested object, make a recursive call
      sum += nestedEvenSum(obj[val]);
    }
  }

  return sum;
}

let obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

let obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10

console.log("~~~~~~~~~~~~~~~~~~~~~ capitalizeWords ~~~~~~~~~~~~~~");

/*
capitalizeWords

Write a recursive function called capitalizeWords. 
Given an array of words, return a new array containing each word capitalized.
*/

function capitalizedWords(arr) {
  // add whatever parameters you deem necessary - good luck!
  // Base case: if the array is empty
  if (arr.length === 0) return [];

  // Capitalize the first word of the arr
  const capitalized = arr[0].toUpperCase();

  // Recursively call capitalizeWords on the rest of the array
  return [capitalized, ...capitalizedWords(arr.slice(1))];
}

let words = ["i", "am", "learning", "recursion", "for", "a", "gig"];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

console.log("~~~~~~~~~~~~~~~~~~~~~ stringifyNumbers ~~~~~~~~~~~~~~");

/*
stringifyNumbers
Write a function called stringifyNumbers which takes in an object and finds 
all of the values which are numbers and converts them to strings. 
Recursion would be a great way to solve this!

The exercise intends for you to create a new object with the numbers converted to strings, 
and not modify the original. Keep the original object unchanged.

*/

const stringifyNumbers = (obj) => {
  let newObj = {};

  for (const val in obj) {
    if (typeof obj[val] === "number") {
      // Convert the number to a string and assign it to the new object
      newObj[val] = obj[val].toString();
    } else if (Array.isArray(obj[val])) {
      // If it's an array, create a new array and map over its elements
      newObj[val] = obj[val].map((item) =>
        typeof item === "number" ? item.toString() : item
      );
    } else if (typeof obj[val] === "object" && obj[val] !== null) {
      // If it's a nested object, make a recursive call and assign the result
      newObj[val] = stringifyNumbers(obj[val]);
    } else {
      // For other types, copy them as they are
      newObj[val] = obj[val];
    }
  }

  return newObj;
};

let objA = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};
let expextedOutput = {
  num: "1",
  test: [],
  data: {
    val: "4",
    info: {
      isRight: true,
      random: "66",
    },
  },
};

console.log(stringifyNumbers(objA));

console.log("~~~~~~~~~~~~~~~~~~~~~ collectStrings ~~~~~~~~~~~~~~");

/*
collectStrings
Write a function called collectStrings which accepts an object and 
returns an array of all the values in the object that have a typeof string

*/

const collectStrings = (obj) => {
  let newArr = [];

  for (const val in obj) {
    if (typeof obj[val] === "string") {
      newArr.push(obj[val]);
    } else if (typeof obj[val] === "object" && obj[val] !== null) {
      // If it's a nested object, make a recursive call and assign the result
      newArr.push(...collectStrings(obj[val]));
    }
  }

  return newArr;
};

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log("collectString function: ", collectStrings(obj)); // ["foo", "bar", "baz"])

console.log("~~~~~~~~~~~~~~~~~~~~~ Searching Algorithms ~~~~~~~~~~~~~~");
/*
LINEAR SEARCH
* This function accepts an array and a value
* Loop through the array and check if the current array element is equal to the value
* if it is, return the index at hich the element is found
* if the value is never found, return -1 

Linear Search Exercise

Write a function called linearSearch which accepts an array and a value, 
and returns the index at which the value exists. If the value does not exist in the array, return -1.

Don't use indexOf to implement this function!

O(N)
*/

console.log("~~~~~~~~~~~~~~~~~~~~~ linear Search ~~~~~~~~~~~~~~");

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 111, 53, 21, 5], 53));

console.log("~~~~~~~~~~~~~~~~~~~~~ binary Search ~~~~~~~~~~~~~~");
/*
* Binary search is a much faster form of search
* Rather than eliminating one element at a time, you can eliminate
hald of the remaining elements at a time.
* Binary searchh only works on sorted arrays!!!

Write a function called binarySearch which accepts a sorted array and a value and returns the 
index at which the value exists. Otherwise, return -1.

This algorithm should be more efficient than linearSearch - you can read how to implement it
 here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search 
 and here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

 0(log n)

*/

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (val === arr[mid]) {
      return mid; // Return the index of the found value
    } else if (val < arr[mid]) {
      right = mid - 1; // Move left
    } else {
      left = mid + 1; // Move right
    }
  }

  return -1; // Value not found
};

binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
console.log(
  binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )
); // 2
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  95
); // 16
binarySearch(
  [
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
    99,
  ],
  100
); // -1

console.log("~~~~~~~~~~~~~~~~~~~~~ naive String Search ~~~~~~~~~~~~~~");

/*
Loop over the long string
Loop over the short string
if the characters dont match, break out of the inner loop
if the characters do match, keep going
if you complete the iner loop and find a match,
increment the count of matches
return the count.

*/

const naiveSearch = (long, short) => {
  let count = 0; // Initialize a counter to keep track of matches found

  // Loop through each character in the `long` string
  for (let i = 0; i < long.length; i++) {
    // For each character in `long`, start a nested loop through `short`
    for (let j = 0; j < short.length; j++) {
      // Check if characters at `short[j]` and `long[i + j]` are the same
      if (short[j] !== long[i + j]) {
        // If not, break out of the inner loop as this is not a match
        break;
      }

      // If we've reached the end of `short` (i.e., found all characters in sequence)
      if (j === short.length - 1) {
        count++; // Increment the match counter
      }
    }
  }

  return count; // Return the total number of times `short` appears in `long`
};

console.log("naiveSearch: ", naiveSearch("lorie loled", "lo"));

console.log("~~~~~~~~~~~~~~~~~~~~~ Bubble Sort ~~~~~~~~~~~~~~");

/*
BubbleSort Pseudocode

* Start looping from with a variable called i the end of the array
towards the beggining.

* Start an inner loop with a variable called j from the beggining
until i - 1.

* if arr[j] is greater than arr[j + 1], swap those two values!

* Return the sorted array.

0(N^2)
if data is nearly sorted it can be linear 0(N)

time complexity: O(N^2)
space complexity: O(1)

*/

const bubbleSort = (arr) => {
  // Outer loop: iterate from the last element down to the first
  // This controls the number of passes through the array
  for (let i = arr.length - 1; i > 0; i--) {
    // Inner loop: iterate from the start of the array up to the current 'i'
    // This compares adjacent elements and swaps them if they are in the wrong order
    for (let j = 0; j < i; j++) {
      // Start from index 0 to i
      // If the current element is greater than the next element
      if (arr[j] > arr[j + 1]) {
        // Swap the two elements
        let temp = arr[j]; // Store the current element in a temporary variable
        arr[j] = arr[j + 1]; // Move the next element to the current position
        arr[j + 1] = temp; // Place the temporary variable (the original current element) in the next position
      }
    }
  }
  // After all passes, the array is sorted
  return arr; // Return the sorted array
};

console.log(bubbleSort([5, 3, 8, 1, 2])); // Expected output: [1, 2, 3, 5, 8]
console.log(bubbleSort([1, 2, 3, 4, 5])); // Expected output: [1, 2, 3, 4, 5]
console.log(bubbleSort([2, 2, 2, 2, 2])); // Expected output: [2, 2, 2, 2, 2]
console.log(bubbleSort([-3, -1, -4, 0, -2])); // Expected output: [-4, -3, -2, -1, 0]
console.log(bubbleSort([10, -1, 0, 3, 5])); // Expected output: [-1, 0, 3, 5, 10]

console.log("~~~~~~~~~~~~~~~~~~~~~ Selection Sort ~~~~~~~~~~~~~~");

/*
Selection Sort
similart to bubble sort but instead of first
placing large values into sorted position, it places small
values into sorted position

Pseudo Code -------->
* Store the first element as the smallest value you seen so far.

* Compare this item to the next item in the array until you find a smaller number.

* if a smaller number is found, designate that smaller number to be the new minimum and continue
until the end of the array.

* if the minimum is not the value (index) you initially began with, swap the two values.

* Repeat this with the next element until the array is sorted.

time complexity: O(N^2)
space complexity: O(1)

*/

const selectionSort = (arr) => {
  // Outer loop: iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index 'i' has the lowest value
    let lowest = i;

    // Inner loop: find the lowest value in the unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If we find a value smaller than the current 'lowest', update 'lowest' to this index
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // Only swap if the lowest value is different from the current index 'i'
    if (lowest !== i) {
      let temp = arr[i]; // Temporarily store the value at index 'i'
      arr[i] = arr[lowest]; // Move the lowest value found to index 'i'
      arr[lowest] = temp; // Place the original value of index 'i' in the lowest's original spot
    }

    // Log the array after each pass for clarity
    console.log(`After pass ${i + 1}:`, arr);
  }

  // Return the sorted array after all passes
  return arr;
};

// Test case
console.log("Final sorted array:", selectionSort([29, 10, 14, 37, 13]));

//W ES2016 swapping syntax

const selectionSort2 = (arr) => {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);
  // Outer loop: iterate over each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Assume the current index 'i' has the lowest value
    let lowest = i;

    // Inner loop: find the lowest value in the unsorted portion of the array
    for (let j = i + 1; j < arr.length; j++) {
      // If we find a value smaller than the current 'lowest', update 'lowest' to this index
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    // Only swap if the lowest value is different from the current index 'i'
    if (lowest !== i) swap(arr, i, lowest);

    // Log the array after each pass for clarity
    console.log(`After pass ${i + 1}:`, arr);
  }

  // Return the sorted array after all passes
  return arr;
};

console.log("Final sorted array w SS 2:", selectionSort2([29, 10, 14, 37, 13]));

console.log("~~~~~~~~~~~~~~~~~~~~~ Insertion Sort ~~~~~~~~~~~~~~");

/*
Explanation
Outer Loop (i): We start at the second element (i = 1) since we consider the first element already "sorted."
Inner Loop (j): Moves backwards through the sorted portion of the array. Each element that’s larger than currentVal is shifted one position to the right to make room for currentVal.
Inserting currentVal: After the for loop completes, j points to the position before the correct insertion spot for currentVal. So, arr[j + 1] is set to currentVal.
Scope of j: j is declared with var, which allows it to be accessible after the for loop block and avoids the "undefined" error.
This version should sort the array in-place. The algorithm has a time complexity of 
𝑂(𝑛^2) in the worst case but is efficient for nearly sorted arrays.

time complexity: O(N^2)
space complexity: O(1)

*/

const insertionSort = (arr) => {
  // Outer loop starts from the second element as the first element is considered "sorted"
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // Store the current value to be placed in the sorted portion

    // Inner loop (using `var j` for function scope) moves backwards through the sorted portion
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]; // Shift elements that are larger than `currentVal` one position to the right
    }

    // Place `currentVal` in the correct position after shifting
    arr[j + 1] = currentVal;
  }

  return arr; // Return the sorted array
};

console.log("Sorted array w Insertion Sort:", insertionSort([2, 1, 9, 76, 4]));

const insertionSort2 = (arr) => {
  // Outer loop starts from the second element as the first element is considered "sorted"
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]; // Store the current value
    let j = i - 1; // Start with the last sorted element

    // Inner loop shifts elements to the right until the correct position is found
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j]; // Shift the element at 'j' to the right
      j--; // Move left in the sorted portion
    }

    // Place currentVal in its correct position after shifting
    arr[j + 1] = currentVal;

    // Log the array to see each pass
    console.log(`After pass ${i}:`, arr);
  }

  return arr; // Return the sorted array
};

console.log(
  "Sorted array w Insertion Sort 2:",
  insertionSort2([2, 1, 9, 76, 4])
);

console.log("~~~~~~~~~~~~~~~~~~~~~ Merge Sort ~~~~~~~~~~~~~~");
/*
Merging Arrays

* In orderto implement merge sort, its useful to first implement a function
responsible for merging two sorted arrays.

* Given two arrays which are sorted, this helper function should create a new array which is also sorted
and consists of all the elements in the two input arrays.

* This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

PseudoCode:
* Create an empty array take a look at the smallest values in each input array

* While there are still values we havent looked at....
    * If the value in the first array is smaller than the value in
      the second array, push the value tin the first array into our results and move
      on to the next value in the first array.

    * If the value in the first array is larger than the value in the second array, push the value in the second array
      into our results and move on to the next value in the second array.

    * Once we exhaust one array, push in all the remaining values from the other array.
*/

// Helper function that merges two sorted arrays
const merge = (array1, array2) => {
  let result = []; // Array to store the merged result
  let i = 0; // Pointer for array1
  let j = 0; // Pointer for array2

  // Compare elements from both arrays and add the smaller one to `result`
  while (i < array1.length && j < array2.length) {
    if (array2[j] > array1[i]) {
      result.push(array1[i]); // Add array1's element if it's smaller
      i++; // Move pointer i forward
    } else {
      result.push(array2[j]); // Add array2's element if it's smaller
      j++; // Move pointer j forward
    }
  }

  // Add any remaining elements from array1 (if any)
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  // Add any remaining elements from array2 (if any)
  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }

  return result; // Return the sorted, merged array
};

// Recursive function that implements merge sort
const mergeSort = (arr) => {
  // Base case: if array has 1 or fewer elements, it’s already sorted
  if (arr.length <= 1) return arr;

  // Calculate the midpoint of the array
  let mid = Math.floor(arr.length / 2);

  // Recursively sort the left half
  let left = mergeSort(arr.slice(0, mid));

  // Recursively sort the right half
  let right = mergeSort(arr.slice(mid));

  // Merge the sorted halves
  return merge(left, right);
};

console.log("MergeSort : ", mergeSort([1, 10, 50, 2, 14, 99, 100]));
console.log("MergeSort : ", mergeSort([10, 24, 76, 73, 72, 1, 9]));

console.log("~~~~~~~~~~~~~~~~~~~~~ Quick Sort ~~~~~~~~~~~~~~");

// Helper function to perform partitioning around the pivot
const pivot = (arr, start = 0, end = arr.length - 1) => {
  // Swap function to exchange elements in the array
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]; // Swap the values at idx1 and idx2
  };

  // The pivot is chosen as the first element in the array (start)
  let pivot = arr[start];
  let swapIdx = start; // Initialize swapIdx to be the same as the pivot position

  // Iterate through the array from start + 1 to end
  for (let i = start + 1; i <= end; i++) {
    // If the current element is smaller than the pivot, we increment swapIdx
    // and swap the element at index i with the element at swapIdx
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i); // Swap the elements
    }
  }

  // After the loop, we swap the pivot element with the element at swapIdx
  // This places the pivot in its correct sorted position
  swap(arr, start, swapIdx);

  // Return the pivot index, which is now in the correct position
  return swapIdx;
};

// Main quicksort function
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  // Base case: if the array has more than one element (left < right)
  if (left < right) {
    // Perform partitioning and get the index where the pivot should go
    let pivotIndex = pivot(arr, left, right);

    // Recursively sort the left portion of the array (before the pivot)
    quickSort(arr, left, pivotIndex - 1);

    // Recursively sort the right portion of the array (after the pivot)
    quickSort(arr, pivotIndex + 1, right);
  }

  // Return the sorted array after the recursive sorting
  return arr;
};

/*
pivot function:

This function is responsible for partitioning the array around a pivot element. It moves elements
smaller than the pivot to the left side and larger ones to the right side.
The pivot is always chosen as the first element in the current subarray (arr[start]).
After partitioning, it places the pivot in its correct position and returns the pivot index.


quickSort function:

This is the main recursive function for sorting the array.
It checks if the array portion has more than one element (i.e., left < right).
It calls the pivot function to find the correct position for the pivot and recursively sorts
both the left and right sides of the pivot.
The recursion continues until each subarray has one or zero elements, at which point 
the array is sorted.

Time Complexity O(N^2)
Space Complexity O(log n)

*/

console.log("quickSort :", quickSort([4, 6, 9, 1, 2, 5]));
console.log("quickSort :", quickSort([100, -3, 2, 4, 6, 1, 2, 5, 3, 23]));

console.log("~~~~~~~~~~~~~~~~~~~~~ Radix Sort ~~~~~~~~~~~~~~");

/*
RADIX SORT
****** PseudoCode *******
* Define a function that defines a list of numbers
* Figure out how many digits the largest number has
* Loop from k = 0 up to this largest number of digits
* for each itertion of the loop:
    * Create buckets for each digit (0 to 9)
    * Place each number in the correspoding bucket based on its kth digit
* Replace our existing array with values in our buckets, starting with 0 and going up to 0
* return list at the end!

Time Complexity: O(n*k)
Space Complexity: O(n + k)

*/

// Helper function to get the digit at a specific place value
const getDigit = (num, i) => {
  // Extracts the digit at the ith position from the right
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

// Helper function to count the number of digits in a number
const digitCount = (num) => {
  // Special case for zero (0 has one digit)
  if (num === 0) return 1;
  // Calculates the number of digits by taking log10 and adding 1
  return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Function to find the maximum number of digits in an array of numbers
const mostDigits = (nums) => {
  let maxDigits = 0;
  // Loops through each number to find the maximum digit length
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
};

// Main radix sort function
const radixSort = (nums) => {
  // Determine the maximum number of digits in the array
  let maxDigitCount = mostDigits(nums);

  // Iterate through each digit position (from least significant to most significant)
  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 through 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Place each number in the appropriate bucket based on the current digit
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k); // Get the kth digit of the number
      digitBuckets[digit].push(nums[i]); // Place number in the corresponding bucket
    }

    // Concatenate all buckets back into the nums array
    nums = [].concat(...digitBuckets);
  }

  // Return the sorted array after all digit positions have been processed
  return nums;
};

console.log("RadixSort", radixSort([23, 567, 89, 12224224, 90]));

console.log("~~~~~~~~~~~~~~~~~~~~~ JS Classes ~~~~~~~~~~~~~~");

/*
*  Classes are blueprints that when created make objexts known as instances

*  Classes are created with the new keyword.

*  The constructor function is a special function that gets run when 
   the class is instantiated

* Instance methods can de added to classes similar to methods in objects

*  Class methods can be added using the static keyword

*/

// declaration
/*
class Student {
    constructor(firstName, lastName, year) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
    }
};
*/

// Expression; the class is anonymous but assigned to a variable
const Student2 = class {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
};

// Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
  }

  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName}`;
  }

  addScore() {
    this.scores.push(score);
    return this.scores;
  }

  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b;
    });
    return sum / this.scores.length;
  }
}

let firstStudent = new Student("Marco", "Guzman", 1);
let secondStudent = new Student("Joe", "Mama", 2);

console.log("~~~~~~~~~~~~~~~~~~~~~ LinkedList ~~~~~~~~~~~~~~");

/*
*********** LINKED LISTS *********

* A data structure that contains a head, tail and length property.

* Linked Lists consis of nodes, and each node has a value and a pointer to another node 
or null

Head                Tail  
(4)--->(6)--->(8)--->(2)-->null
  next    next   next

Comparisons with Arrays

         *** Lists ***
         * Do not have indexes
         * Connected via nodes with a next pointer
         * Random access is not allowed
         
        *** Arrays ***
        * Indexed in order
        * Insertion and deletion can be expesive
        * Can quickly be aacessed at a specific index
    
Big O:
Access: O(N)
Search: O(N)
Insert: O(1)
Delete: O(1)
*/

class NodeLL {
  constructor(val) {
    this.val = val; // Store the value of the node
    this.next = null; // The next property points to the next node in the list
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // Start with no head node
    this.tail = null; // Start with no tail node
    this.length = 0; // Track the length of the list
  }

  // Adds a new node with value `val` to the end of the list
  push(val) {
    let newNode = new Node(val); // Create a new node
    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set new node as head
      this.tail = this.head; // Set the same node as tail
    } else {
      // If the list is not empty
      this.tail.next = newNode; // Link the current tail to the new node
      this.tail = newNode; // Update tail to be the new node
    }
    this.length++; // Increment the length of the list
    return this; // Return the entire list for chaining
  }

  // Removes the last node from the list
  pop() {
    if (!this.head) return undefined; // If the list is empty, return undefined
    let current = this.head; // Start from the head
    let newTail = current; // Track the node before the current tail
    while (current.next) {
      // Traverse until the end of the list
      newTail = current; // Move newTail to current node
      current = current.next; // Move to the next node
    }
    this.tail = newTail; // Set the new tail
    this.tail.next = null; // Remove the last node
    this.length--; // Decrement the length of the list
    if (this.length === 0) {
      // If the list is empty after the pop
      this.head = null; // Set head to null
      this.tail = null; // Set tail to null
    }
    return current; // Return the removed node
  }

  // Removes the first node (head) from the list
  shift() {
    if (!this.head) return undefined; // If the list is empty, return undefined
    let currentHead = this.head; // Store the current head
    this.head = currentHead.next; // Move head to the next node
    this.length--; // Decrement the length of the list
    if (this.length === 0) {
      // If the list is now empty
      this.tail = null; // Set tail to null
    }
    return currentHead; // Return the removed node
  }

  // Adds a new node with value `val` at the start of the list
  unshift(val) {
    let newNode = new Node(val); // Create a new node
    if (!this.head) {
      // If the list is empty
      this.head = newNode; // Set new node as head
      this.tail = this.head; // Set new node as tail
    } else {
      // If list is not empty
      newNode.next = this.head; // Link new node to current head
      this.head = newNode; // Update head to be the new node
    }
    this.length++; // Increment the length of the list
    return this; // Return the list for chaining
  }

  // Retrieves the node at the specified index in the list
  get(index) {
    // If index is out of bounds (negative or greater than or equal to list length), return null
    if (index < 0 || index >= this.length) return null;

    let counter = 0; // Initialize a counter to track our position
    let current = this.head; // Start from the head of the list

    // Traverse the list until we reach the specified index
    while (counter !== index) {
      current = current.next; // Move to the next node
      counter++; // Increment the counter
    }

    // Return the node at the specified index
    return current;
  }

  // Inserts a new node with the given value at the specified index in the list
  insert(index, val) {
    // If the index is out of bounds, return false
    if (index < 0 || index > this.length) return false;

    // If inserting at the end, use push and return true (converted from boolean)
    if (index === this.length) return !!this.push(val);

    // If inserting at the beginning, use unshift and return true (converted from boolean)
    if (index === 0) return !!this.unshift(val);

    // Create a new node with the given value
    let newNode = new Node(val);

    // Get the node right before the desired index using the get method
    let prev = this.get(index - 1);

    // Store the current next node in a temporary variable
    let temp = prev.next;

    // Link the previous node to the new node
    prev.next = newNode;

    // Link the new node to the next node (temp)
    newNode.next = temp;

    // Increase the list length since a new node was added
    this.length++;

    // Return true to indicate success
    return true;
  }

  // Removes the node at the specified index in the list
  remove(index) {
    // If the index is out of bounds, return undefined
    if (index < 0 || index >= this.length) return undefined;

    // If removing the first node, use shift to remove and return it
    if (index === 0) return this.shift();

    // If removing the last node, use pop to remove and return it
    if (index === this.length - 1) return this.pop();

    // For any other index, get the node just before the one to be removed
    let previousNode = this.get(index - 1);

    // Store the node to be removed
    let removed = previousNode.next;

    // Update the previous node’s next pointer to skip the removed node
    previousNode.next = removed.next;

    // Decrease the list length since a node was removed
    this.length--;

    // Return the removed node
    return removed;
  }

  // Reverses the linked list in place
  reverse() {
    // Start with the current head node
    let node = this.head;

    // Swap head and tail pointers
    this.head = this.tail;
    this.tail = node;

    let next; // Placeholder for the next node in the list
    let prev = null; // Initialize previous node as null (new tail’s next pointer)

    // Loop through each node in the list
    for (let i = 0; i < this.length; i++) {
      // Save the next node temporarily
      next = node.next;

      // Reverse the 'next' pointer to point to the previous node
      node.next = prev;

      // Move `prev` and `node` one step forward
      prev = node; // `prev` now points to the current node
      node = next; // `node` advances to the original next node
    }

    // Return the reversed list
    return this;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

let first = new NodeLL("Hi");
first.next = new NodeLL("There");
first.next.next = new NodeLL("how");
first.next.next.next = new NodeLL("are");
first.next.next.next.next = new NodeLL("you");
console.log(first);

let list = new SinglyLinkedList();
list.push("Hello");
list.push("GOODBYE");
list.push(100);
list.push(200);
list.push(250);
list.push(350);
list.print();
//console.log(print);

console.log("~~~~~~~~~~~~~~~~~~~~~ Doubly Linked List ~~~~~~~~~~~~~~");

/*
Big O:
Access: O(N)
Search: O(N)
Insert: O(1)
Delete: O(1)
*/


class DoublyNode {
  constructor(val) {
    this.val = val; // Store the value of the node
    this.next = null; // The next property points to the next node in the list
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Adds a new node with the given value to the end of the list
  push(val) {
    // Create a new node with the given value
    let newNode = new DoublyNode(val);

    // If the list is empty (length is 0)
    if (this.length === 0) {
      // Set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the new node to the end of the list
      this.tail.next = newNode; // Set the current tail's next to the new node
      newNode.prev = this.tail; // Set the new node's previous to the current tail
      this.tail = newNode; // Update the tail to be the new node
    }

    // Increment the length of the list
    this.length++;

    // Return the updated list for method chaining
    return this;
  }

  // Removes the last node from the list and returns it
  pop() {
    // If the list is empty, return undefined
    if (!this.head) return undefined;

    // Store the current tail in a variable to return later
    let poppedNode = this.tail;

    // If there's only one node in the list
    if (this.length === 1) {
      // Set both head and tail to null (the list becomes empty)
      this.head = null;
      this.tail = null;
    } else {
      // Move the tail pointer to the previous node
      this.tail = poppedNode.prev;

      // Set the new tail's next pointer to null, detaching the last node
      this.tail.next = null;

      // Clear the popped node's prev pointer to fully detach it
      poppedNode.prev = null;
    }

    // Decrease the length of the list by 1
    this.length--;

    // Return the removed node
    return poppedNode;
  }

  // Removes the first node (head) from the list and returns it
  shift() {
    // If the list is empty, return undefined
    if (this.length === 0) return undefined;

    // Store the current head in a variable to return later
    let oldHead = this.head;

    // If there is only one node in the list
    if (this.length === 1) {
      // Set both head and tail to null, making the list empty
      this.head = null;
      this.tail = null;
    } else {
      // Move the head pointer to the next node
      this.head = oldHead.next;

      // Set the new head's previous pointer to null
      this.head.prev = null;

      // Clear the old head's next pointer to fully detach it
      oldHead.next = null;
    }

    // Decrease the length of the list by 1
    this.length--;

    // Return the removed node (the old head)
    return oldHead;
  }

  // Adds a new node with the given value to the beginning of the list
  unshift(val) {
    // Create a new node with the specified value
    var newNode = new DoublyNode(val);

    // If the list is empty (length is 0)
    if (this.length === 0) {
      // Set both head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Link the current head node to the new node
      this.head.prev = newNode; // Set the current head's prev pointer to the new node
      newNode.next = this.head; // Set the new node's next pointer to the current head
      this.head = newNode; // Update the head to the new node
    }

    // Increment the list length by 1
    this.length++;

    // Return the updated list for chaining if needed
    return this;
  }

  // Retrieves the node at the specified index in the list
  get(index) {
    // If index is out of bounds, return null
    if (index < 0 || index >= this.length) return null;

    // Variables to track the current node and position count
    let count, current;

    // Optimize traversal by starting from the head or tail
    if (index <= this.length / 2) {
      // If index is in the first half, start from the head
      count = 0;
      current = this.head;
      // Traverse forwards until reaching the desired index
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      // If index is in the second half, start from the tail
      count = this.length - 1;
      current = this.tail;
      // Traverse backwards until reaching the desired index
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }

    // Return the node at the specified index
    return current;
  }

  // Inserts a new node at the specified index in the list
  insert(index, val) {
    // If the index is invalid (negative or greater than/equal to the list length), return false
    if (index < 0 || index >= this.length) return false;

    // Special case: if inserting at the beginning, use unshift() to add the node
    if (index === 0) return this.unshift(val);

    // Special case: if inserting at the end, use push() to add the node
    if (index === this.length) return this.push(val);

    // Create a new node with the specified value
    let newNode = new DoublyNode(val);

    // Get the node before the insertion point
    let beforeNode = this.get(index - 1);

    // Get the node after the insertion point
    let afterNode = beforeNode.next;

    // Adjust pointers to insert the new node in the correct position
    beforeNode.next = newNode; // Link beforeNode to newNode
    newNode.prev = beforeNode; // Link newNode to beforeNode
    newNode.next = afterNode; // Link newNode to afterNode
    afterNode.prev = newNode; // Link afterNode to newNode

    // Increase the list length
    this.length++;

    // Return true to indicate successful insertion
    return true;
  }

  // Removes a node at the specified index in the list
  remove(index) {
    // If the index is invalid (negative or greater than/equal to the list length), return undefined
    if (index < 0 || index >= this.length) return undefined;

    // Special case: if removing the first node, use shift() to remove it
    if (index === 0) return this.shift();

    // Special case: if removing the last node, use pop() to remove it
    if (index === this.length - 1) return this.pop();

    // Get the node to be removed using the provided index
    let removedNode = this.get(index);

    // Get the node before and after the node to be removed
    let beforeNode = removedNode.prev;
    let afterNode = removedNode.next;

    // Re-link the neighboring nodes to bypass the removed node
    beforeNode.next = afterNode; // Link beforeNode to afterNode
    afterNode.prev = beforeNode; // Link afterNode to beforeNode

    // Clean up the removed node's references
    removedNode.next = null; // Set the next pointer of the removed node to null
    removedNode.prev = null; // Set the prev pointer of the removed node to null

    // Decrease the list length by 1
    this.length--;

    // Return the removed node
    return removedNode;
  }
}

let Doublylist = new DoublyLinkedList();
Doublylist.push("Harry");
Doublylist.push("Ron");
Doublylist.push("Hermione");

// Removes "Harry" from the list
Doublylist.shift();
console.log(Doublylist);


console.log("~~~~~~~~~~~~~~~~~~~~~ Stack ~~~~~~~~~~~~~~");
/*
Big O
Insertion: O(1)
Removal: O(1)
Searching: O(N)
Access: O(N)

Stacks are a lIFO data structure where the last value in is always the first one out.

stacks are used to handle function invocation (the call stack) for operations like undo/redo and for 
routing (remember pages you have visited and go back/forward) and much more!

They are not built in date structure in JS but are simple to implement.

*/



class StackNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
};

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val) {
        // Create a new node with the given value
        let newNode = new StackNode(val);
        
        // If the stack is empty (no head node), set both head and tail to the new node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // If the stack has nodes, set the new node's next to point to the current head
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp; // Link the new node to the previous head, placing it on top
        }
        
        // Increment the size of the stack and return the new size
        return ++this.size;
    }
    pop() {
        // If the stack is empty, return null
        if (!this.head) return null;
        
        // Store the current head in a temporary variable
        let temp = this.head;
        
        // If there is only one node (head and tail are the same), set tail to null
        if (this.head === this.tail) {
            this.tail = null;
        }
        
        // Move the head pointer to the next node (removing the current top)
        this.head = this.head.next;
        
        // Decrease the size of the stack
        this.size--;
        
        // Return the value of the removed node
        return temp.value;
    }
};

// Test the Stack with some data
let stack = new Stack();

// Test data
stack.push(10); // Add 10 to the stack
stack.push(20); // Add 20 to the stack
stack.push(30); // Add 30 to the stack
console.log(stack.pop()); // Should print 30
console.log(stack.pop()); // Should print 20
console.log(stack.pop()); // Should print 10
console.log(stack.pop()); // Should print null (stack is now empty)

// You can also check the size after each operation, if desired
stack.push(40);
console.log(stack.size); // Should print 1 (only one item, 40, in the stack)

