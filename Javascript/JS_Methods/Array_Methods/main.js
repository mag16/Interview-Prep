// ECMAScript 2023 new array methods

/* 
whe using sort(),splice(), reverse(), they mutate the original array.
this can be an issue.

When using toSpliced(), toSorted(), toReversed(), we can
splice, sort and reverse an array without mutating the source array.

*/

const numbers = [3, 4, 1, 5, 2];

const splicedNumbers = numbers.toSpliced(1, 1); //[3,5,1,2]
const sortedNumbers = numbers.toSorted(); //[1,2,3,4,5]
const reversedNumbers = numbers.toReversed(); //[2,5,1,4,3]

// findLast() and lastIndexOf()

const fruits = ['apple', 'banana', 'orange', 'banana', 'kiwi'];

const lastIndex = fruits.lastIndexOf('banana'); //3

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130