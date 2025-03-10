//A practical guide to Algorithms with Javascript

/* Recursion in 4 Steps

1. Identify base cases.
2. Identify recursive cases
3. Return where appropriate
4. Write procedures for each
case that brings you closer to the base case(s)

~~~~~~~~~~~~~~~~~~~~ Recursion Reads ~~~~~~~~~~~~~~~~~~~~~~~~~~
https://www.freecodecamp.org/news/recursion-is-not-hard-858a48830d83/?form=MG0AV3

https://web.mit.edu/6.005/www/fa15/classes/10-recursion/

https://www.topcoder.com/community/data-science/data-science-tutorials/an-introduction-to-recursion-part-2/

https://softwareengineering.stackexchange.com/questions/25052/in-plain-english-what-is-recursion

https://www.youtube.com/watch?v=IJDJ0kBx2LM&t=657s

https://programiz.pro/course/learn-recursion-with-python

Dynamic Programming YT w Coderbyte:
https://www.youtube.com/watch?v=oBt53YbR9Kk&t=10690s

*/

let callMyself = function() {
    if("case") {
        //base case
        return;
    } else {
        //recursive case
        callMyself();
    }

    return;
};

const loopNTimes = (n) => {
    console.log('n ===', n);
    if (n <= 1) {
        return 'complete'
    }
    return loopNTimes(n-1);
}


function computeFactorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        console.log(`result = ${result} * ${i} (${result * i})`);
        result *= i;
    }

    return result;
}

console.log('return computeFactorial: ',computeFactorial());

// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
    let resultSoFar = "";

    for (let i = 0; i <= array.length - 1; i++){
        resultSoFar += array[i] + joinString;
    }

    return resultSoFar + array[array.length - 1];
}

console.log(joinElements('JoinElements: ',['s','cr', 't cod', ' :) :)'], 'e'));


// memoized factorial function
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if (n in cache) {
            console.log('Fetching from cache',n);
            return cache[n];
        }
        else {
            console.log('Calculating result', n);
            let result = fn(n); //callback
            cache[n] = result;
            return result;
        }
    }
}

const factorial = memoize (
    (x) => {
        if (x === 0) {
            return 1;
        }
        else {
            return x * factorial(x - 1);
        }
    }
);

console.log(factorial(5)); // calculated
console.log(factorial(6)); // calculated for 6 and cached for 5.

const fibonacci = function(num) {
    if(num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

console.log('fibonacci sequence = ',fibonacci(6));

const reverseString = function(str) {
    if (str.length === 0) return '';

    return str[str.length - 1] + reverseString(str. substr(0 , str.length - 1))
}

console.log('Reverse a string : ',reverseString('hit me in the head'));

console.log('~~~~~~~~~~~~~~~~~ QUICKSORT ~~~~~~~~~~~~~~~~~~~~~');

const quickSort = function(arr, lo, hi) {
    if (lo === undefined) lo = 0;
    if (hi === undefined) hi = arr.length - 1;

    if (lo < hi) {
        // partition the array
        let p = partition(arr, lo, hi);
        console.log('partition from, ' + lo + ' to ' + hi + ' => partition ' + p);
        //sort subarrays
        quickSort(arr, lo, p - 1);
        quickSort(arr, p + 1, hi);
    }
     // for initial call, return a sorted array
    if (lo === 0 && hi === arr.length - 1) return arr;

};

const partition = function(arr, lo, hi) {
   // choose last element as pivot  
   let pivot = arr[hi];  // keep track of index to put pivot at
   let pivotLocation = lo; 

   // loop through subarray and if element <= pivot, place element before pivot  
   for (let i = lo; i < hi; i++) {    
       if (arr[i] <= pivot) {      
           swap(arr, pivotLocation, i);      
           pivotLocation++;    
       }  
   }  

   swap(arr, pivotLocation, hi);  
   return pivotLocation;
};

const swap = function(arr, index1, index2) {
    if (index1 === index2) return;
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;

    console.log('swapped ' + arr[index1] + ', ' + arr[index2] + '  in  ', arr); 
    return arr;
}

console.log('QuickSort : ', quickSort([1, 4, 3, 56, 9, 8, 7, 5]));

/*
TO DO:

Once these simple problems have been shown AND re-implemented in tutorials, you can give slightly more difficult (but very classic) exercises:

The Fibonacci numbers,
The Greatest Common Divisor,
The 8-Queens problem,
The Towers of Hanoi game,
And if you have a graphical environment (or can provide code stubs for it or for a terminal output or they can manage that already), things like:
Koch's Snow Flake Fractal,
Sierpinski's Triangle.
And for for practical examples, consider writing:
a tree traversal algorithm,
a simple mathematical expression parser,
a minesweeper game.

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~~ Greatest Common Divisor ~~~~~~~~~~~~~~~');

const GreatestCommonDivisor = function(a, b) {
    if (b == 0) {
        return a;
    }

    return `The Greatest Common Divisor between ${a} and ${b} is : ${GreatestCommonDivisor(b, a % b)}`;

}

console.log(GreatestCommonDivisor(8,12));
console.log(GreatestCommonDivisor(15,20));
console.log(GreatestCommonDivisor(16,24));
console.log(GreatestCommonDivisor(1180,482));
console.log(GreatestCommonDivisor(48,18));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~ Tower of Hanoi ~~~~~~~~~~~~~~~');

const towerOfHanoi = function(n, from_rod, to_rod, aux_rod) {
    if(n == 0) return;

    towerOfHanoi(n - 1, from_rod, aux_rod, to_rod);

    console.log("Move disk " + n + " from rod " + from_rod + " to rod " + to_rod + " <br/> =>");

    towerOfHanoi(n - 1, aux_rod, to_rod, from_rod);
}

let N = 3;
towerOfHanoi(N, "A", "C", "B");

/*
Dynamic Programming (Free Code Camp)

https://youtu.be/oBt53YbR9Kk

Dynamic Programming

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dynamic Programming ~~~~~~~~~~~~~~~~~~~~~~~~~~~');

const foo = (n) => {
    if(n <= 1) return n; // base case
    return foo(n - 1); // recursive call
};

const bar = (n) => {
    if (n <= 1) return n; // b
    return bar(n - 2); // recursive call
};

console.log('foo call: ',foo(8));
console.log('bar call: ',bar(8));

// Memoized Fibonacci sequence

const slowFib = (n) => {
    if (n <= 2) return 1;
    return slowFib(n - 1) + slowFib(n - 2);
};


// O(n)time / O(n) space
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n]; // if the key inside the object
    if (n <= 2) return 1; // base case
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);

    return memo[n];
};

console.log('memoized fibonacci for the 8th number in sequence: ',fib(8));
console.log('memoized fibonacci for the 6th number in sequence: ',fib(6));

// [./Images/gridTraveler.png]
// Grid traveler

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid Traveler ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
// 0(2^n+m) time complexity, 0(n + m) space complexity

const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1; // Base Case 1: If you're at a 1×1 grid, there's exactly one way to be there (you're already at the end).
    if (m === 0 || n === 0) return 0; // Base Case 2: If either dimension is 0, there's no grid to travel, so zero ways to travel.

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1); // This sums the number of ways to travel if you move down 𝑚 −1,𝑛) and if you move right (𝑚,𝑛−1).
};

console.log('slow Grid Traveler (1,1): ', gridTraveler(1,1));
console.log('slow Grid Traveler (2,3): ', gridTraveler(2,3));
console.log('slow Grid Traveler (3,2): ', gridTraveler(3,2));
console.log('slow Grid Traveler (3,3): ', gridTraveler(1,1));
// console.log('slow Grid Traveler, this one takes long (18,18): ', gridTraveler(18,18));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Memoized Grid Traveler ~~~~~~~~~~~~~~~~~~~~~~~~~');

// 0(m * n) time complexity, 0(n + m) space complexity
const gridTravelerMemoized = (m, n, memo = {}) => {
    const key = m + ',' + n; // separator needed to combining m and n with a comma creates a unique string identifier for each position on the grid. For example, 3,4 and 4,3 would be different keys. Without a separator, 34 and 43 would be mixed up and lead to incorrect results.
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1; // Base Case 1: If you're at a 1×1 grid, there's exactly one way to be there (you're already at the end).
    if (m === 0 || n === 0) return 0; // Base Case 2: If either dimension is 0, there's no grid to travel, so zero ways to travel.

    memo[key] = gridTravelerMemoized(m - 1, n, memo) + gridTravelerMemoized(m, n - 1, memo); // This sums the number of ways to travel if you move down 𝑚 − 1,𝑛) and if you move right (𝑚,𝑛−1).

    return memo[key];
};

console.log('memoized Grid Traveler (1,1): ', gridTravelerMemoized(1,1));
console.log('memoized Grid Traveler (2,3): ', gridTravelerMemoized(2,3));
console.log('memoized Grid Traveler (3,2): ', gridTravelerMemoized(3,2));
console.log('memoized Grid Traveler (3,3): ', gridTravelerMemoized(1,1));
console.log('memoized Grid Traveler, this one was taking long previously (18,18): ', gridTravelerMemoized(18,18));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Can Sum ~~~~~~~~~~~~~~~~~~~~~~~~~');
/* 
canSum
Write a function `canSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return a boolean indicating wheter or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non negative.

canSum(7, [2,3,4]) => true

[../Images/canSum.png]

m = target sum;
n = array length;

0(n^m) Time complexity
0(m) Space Complexity

*/

const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};

console.log('canSum for (7, [2, 3]) :', canSum(7,[2,3]));
console.log('Can Sum for(7, [5, 3, 4, 7]) :', canSum(7,[5,3,4,7]));
console.log('Can Sum for(7, [2, 4]) :', canSum(7,[2,4]));
console.log('Can Sum for(8, [2, 3, 5]) :', canSum(8, [2, 3, 5]));
 // console.log('Can Sum for(300, [7, 14]) :', canSum(300, [7, 14]));  too slow to compute

/*
m = target sum;
n = array length;

0(m * n) Time complexity
0(m) Space Complexity

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Memoized Can Sum ~~~~~~~~~~~~~~~~~~~~~~~~~');

 const memoCansum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (memoCansum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }
    memo[targetSum] = false;
    return false;
};

console.log('memoized Can Sum for (7, [2, 3]) :', memoCansum(7,[2,3]));
console.log('memoized Can Sum for(7, [5, 3, 4, 7]) :', memoCansum(7,[5,3,4,7]));
console.log('memoized Can Sum for(7, [2, 4]) :', memoCansum(7,[2,4]));
console.log('memoized Can Sum for(8, [2, 3, 5]) :', memoCansum(8, [2, 3, 5]));
console.log('memoized Can Sum for(300, [7, 14]) :', memoCansum(300, [7, 14]));


console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ How Sum ~~~~~~~~~~~~~~~~~~~~~~~~~');

/* 
howSum
Write a function `howSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements
that add up to exactly the targetSum.  

If there are no combination that adds up
to the targeSum, then return null.

if there are multiple combinations, return any single one

[../howSum.png]

m = target sum
n = numbers.length

time: O(n^m + m)
space: O(m)

*/

const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [ ...remainderResult, num ];
        }
    }

    return null;
};

console.log('howSum for 7, [2, 3]: ', howSum(7, [2, 3]));
console.log('howSum for 7, [5, 3, 4, 7]: ', howSum(7, [5, 3, 4, 7]));
console.log('howSum for 7, [2, 4]: ', howSum(7, [2, 4]));
console.log('howSum for 8, [2, 3, 5]: ', howSum(8, [2, 3, 5]));
// console.log('(takes a bit to compute) howSum for 300, [7, 14]: ', howSum( 300, [7, 14]));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Memoized How Sum ~~~~~~~~~~~~~~~~~~~~~~~~~');

/*  Memoized How Sum
m = target sum
n = numbers.length

time: O(n*m^2)
space: O(m^2)

*/

const MemohowSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = MemohowSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum]
        }
    }

    memo[targetSum] = null;
    return null;
};

console.log('MemohowSum for 7, [2, 3]: ', MemohowSum(7, [2, 3]));
console.log('MemohowSum for 7, [5, 3, 4, 7]: ', MemohowSum(7, [5, 3, 4, 7]));
console.log('MemohowSum for 7, [2, 4]: ', MemohowSum(7, [2, 4]));
console.log('MemohowSum for 8, [2, 3, 5]: ', MemohowSum(8, [2, 3, 5]));
console.log('(takes a bit to compute) howSum for 300, [7, 14]: ', MemohowSum( 300, [7, 14]));

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Best Sum ~~~~~~~~~~~~~~~~~~~~~~~~~');

/* 
bestSum
Write a function `bestSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers 
that add up to exactly the targetSum.  

if there is a tie for the shortest combination you may return any one of the shortest.

ex:  bestSum(8, [2, 3, 5]) --> [3, 5]
[2, 2, 2, 2]
[2, 3, 3]
[3, 5] ---> shortest combination


m = target sum
n = numbers.length

Brute Force Soln:
time: O(n^m + m)
space: O(m^2)


[../bestSum.png]
*/

const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
}

console.log('bestSum for 7, [5, 3, 4, 7]: ', bestSum(7, [5, 3, 4, 7])); //[7]
console.log('bestSum for 8, [2, 3, 5]: ', bestSum(8, [2, 3, 5])); //[3, 5]
console.log('bestSum for 8, [1, 4, 5]: ', bestSum(8, [1, 4, 5])); //[4, 4]
// console.log('bestSum for 100, [1, 2, 5, 25]: ', bestSum(100, [1, 2, 5, 25])); //[25, 25, 25, 25]


console.log('~~~~~~~~~~~~~~~~~~~~~~~ Memoized Best Sum ~~~~~~~~~~~~~~~~~~~~~');

/*
Memoized Soln:

m = target sum
n = numbers.length

time: O(m^2 * n)
space: O(m^2)


*/

const bestSumMemo = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo ) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSumMemo(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }
    
    memo[targetSum]= shortestCombination;
    return shortestCombination;
};

console.log('bestSumMemo for 7, [5, 3, 4, 7]: ', bestSumMemo(7, [5, 3, 4, 7])); //[7]
console.log('bestSumMemo for 8, [2, 3, 5]: ', bestSumMemo(8, [2, 3, 5])); //[3, 5]
console.log('bestSumMemo for 8, [1, 4, 5]: ', bestSumMemo(8, [1, 4, 5])); //[4, 4]
console.log('bestSumMemo for 100, [1, 2, 5, 25]: ', bestSumMemo(100, [1, 2, 5, 25])); //[25, 25, 25, 25]



console.log('~~~~~~~~~~~~~~~~~~~~~~~ CanConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');

/* 
canConstruct
Write a function `canConstruct(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return a boolean indicating wether or not the `target` can be constructed
by concatenating elements in the `wordBank` array

ex:  canConstruct(abcdef, [ab, abc, cd, def, abcd]) --> true

     canConstruct(skateboard, [ bo, rd, ate, sk, boar ]) --> false
                    ska + t + ?
                    sk + ate + boar + ?
                    ak + ate + bo + ?




m = target.length
n = wordbank.length

Brute Force Soln:
time: O(n^m * m)
space: O(m^2)

*/

const canConstruct = (target, wordBank) => {
    if (target === "") return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstruct(suffix, wordBank)) {
                return true;
            }
        }
    }

    return false;
};

console.log("canConstruct abcdef", ["ab", "abc", "cd", "def", "abcd"] , canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log("canConstruct skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log("canConstruct enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
//console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // false


console.log('~~~~~~~~~~~~~~~~~~~~~~~ Memoized CanConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');

/* 
Memoized CanConstruct

m = target.length
n = wordbank.length

Memoized Soln:
time: O(n * m^2)
space: O(m^2)


[../Images/Javascript/JS_Fundamentals/canConstructMemo.png]

*/

const canConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === "") return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if(canConstructMemo(suffix, wordBank, memo)) {
                memo[target] = true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
};

console.log("canConstructMemoized abcdef", ["ab", "abc", "cd", "def", "abcd"] , canConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log("canConstructMemoized skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , canConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log("canConstructMemoized enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], canConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // false


console.log('~~~~~~~~~~~~~~~~~~~~~~~ CountConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');

/* 
countConstruct
Write a function `countConstruct(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return the number of ways that the `target` can be constructed
by concatenating elements in the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

ex:  canConstruct(abcdef, [ab, abc, cd, def, abcd]) --> 1

     canConstruct(purple, [ purp, p, ur, le, purpl ]) --> 2
                    purp + le 
                    purpl + e 
                    




m = target.length
n = wordbank.length

Brute Force Soln:
time: O(n^m * m)
space: O(m^2)

[../../../Images/canConstructMemo.png]

*/

const countConstruct = (target, wordBank) => {
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;          
        }
    }
    
    return totalCount;
};


console.log("countConstruct purple", [ "purp", "p", "ur", "le", "purpl "], countConstruct("purple", [ "purp", "p", "ur", "le", "purpl"])); // 2
console.log("countConstruct abcdef", ["ab", "abc", "cd", "def", "abcd"] , countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("countConstruct skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log("countConstruct enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
//console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // 0



console.log('~~~~~~~~~~~~~~~~~~~~~~~ Memoized CountConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');

/*
m = target.length
n = wordbank.length

Brute Force Soln:
time: O(n*m^2)
space: O(m^2)

*/

const countConstructMemo = (target, wordBank, memo = {}) => {
    if(target in memo) return memo[target];
    if (target === "") return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstructMemo(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;          
        }
    }
    memo[target] = totalCount;
    return totalCount;
};


console.log("countConstructMemo purple", [ "purp", "p", "ur", "le", "purpl "], countConstructMemo("purple", [ "purp", "p", "ur", "le", "purpl"])); // 2
console.log("countConstructMemo abcdef", ["ab", "abc", "cd", "def", "abcd"] , countConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("countConstructMemo skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , countConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log("countConstructMemo enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], countConstructMemo("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstructMemo("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // 0


console.log('~~~~~~~~~~~~~~~~~~~~~~~ allConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');

/* 
allConstruct
Write a function `allConstruct(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return a 2D array containing all of the ways the the `target` can be constructed
by concatinating elements of the `wordBank` array.  Each element of the 2D array should represent one combination
that constructs the `target`

You may reuse elements of `wordBank` as many times as needed.

ex:  allConstruct(purple, [ purp, p, ur, le, purpl ]) --> 
                [    
                    [ purp + le ], 
                    [ purpl + e ]
                ]


ex: allConstruct(abcdef, [ ab, abc, cd, def, abcd, ef, c]) -->
                [
                    [ ab, cd, ef ],
                    [ ab, c, def ],
                    [ abc, def ],
                    [ abcd, ef ]
                ]



m = target.length
n = wordbank.length

Brute Force Soln:
time: O(n^m)
space: O(m)

*/

const allConstruct = (target, wordBank) => {
    if (target === "") return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push( ...targetWays);
        }
    }

    return result
};

console.log("allConstruct: purple", [ "purp", "p", "ur", "le", "purpl "], allConstruct("purple", [ "purp", "p", "ur", "le", "purpl"])); // 
console.log("allConstruct: abcdef", ["ab", "abc", "cd", "def", "abcd"] , allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 
console.log("allConstruct: skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Memoized allConstruct WordBank ~~~~~~~~~~~~~~~~~~~~~');
/*
m = target.length
n = wordbank.length

Memoized Soln:
time: O(n^m)
space: O(m)

*/

const allConstructMemo = (target, wordBank, memo = {}) => {
    if (target in memo) return memo[target];
    if (target === "") return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstructMemo(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way ]);
            result.push( ...targetWays);
        }
    }

    memo[target] = result; // Storing result in memo ensures you're caching the complete set of solutions, ready to be returned if you encounter the same target again.
    return result
};

console.log("allConstructMemo: purple", [ "purp", "p", "ur", "le", "purpl "], allConstructMemo("purple", [ "purp", "p", "ur", "le", "purpl"])); // 
console.log("allConstructMemo: abcdef", ["ab", "abc", "cd", "def", "abcd"] , allConstructMemo("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 
console.log("allConstructMemo: skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , allConstructMemo("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); 




console.log('~~~~~~~~~~~~~~~~~~~~~~~ TABULATION ~~~~~~~~~~~~~~~~~~~~~');




console.log('~~~~~~~~~~~ Fibonnacci Sequence w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
Fibonnacci Tabulation:
time: O(n)
space: O(n)
*/

const fibTabulation = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};

console.log('fibTabulation(6) :', fibTabulation(6));
console.log('fibTabulation(7) :', fibTabulation(7));
console.log('fibTabulation(8) :', fibTabulation(8));
console.log('fibTabulation(50) :', fibTabulation(50));



console.log('~~~~~~~~~~~ Grid Traveler w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
gridTraveler with Tabulation:

Tabulation Recipe:
* visualize the problem as a table
* size the table based on the inputs
* initialize the table with default values
* seed the trivial answer into the table
* iterate through the table
* fill further positions based on the current position

*/

const gridTravelerTabulation = (m,n) => {
    const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

    //console.log(table);
    table[1][1] = 1;

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++){
            const current = table [i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current; 
        }
    }

    return table[m][n];
};

console.log('gridTraveler Tabulation (1,1): ',gridTravelerTabulation(1,1));
console.log('gridTraveler Tabulation (2,3): ',gridTravelerTabulation(2,3));
console.log('gridTraveler Tabulation (3,2): ',gridTravelerTabulation(3,2));
console.log('gridTraveler Tabulation (3,3): ',gridTravelerTabulation(3,3));
console.log('gridTraveler Tabulation (18,18): ',gridTravelerTabulation(18,18));



console.log('~~~~~~~~~~~ canSum w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
canSum w Tabulation
Write a function `canSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return a boolean indicating wheter or not it
is possible to generate the targetSum using numbers from the array.

You may use an element of the array as many times as needed.

You may assume that all input numbers are non negative.

Time Complexity: O(m * n)

*/



const canSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= targetSum; i++){
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
};

console.log('canSum Tabulation for (7, [2, 3]) : ', canSumTab(7, [2, 3]));
console.log('canSum Tabulation for (7, [5, 3, 4, 7]) : ', canSumTab(7, [5, 3, 4, 7]));
console.log('canSum Tabulation for (7, [2, 4]) : ', canSumTab(7, [2, 4]));
console.log('canSum Tabulation for (8, [2, 3, 5]) : ', canSumTab(8, [2, 3, 5]));
console.log('canSum Tabulation for (300, [7, 14]) : ', canSumTab(300, [7, 14]));


console.log('~~~~~~~~~~~ howSum w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
howSum Tabulation
Write a function `howSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return an array containing any combination of elements
that add up to exactly the targetSum.  

If there are no combination that adds up
to the targeSum, then return null.

if there are multiple combinations, return any single one

Time Complexity: O(m^2 * n)

*/

const howSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++){
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num];
            }
        }
    }

    return table[targetSum];
};


console.log('howSum Tabulation for (7, [2, 3]) : ', howSumTab(7, [2, 3]));
console.log('howSum Tabulation for (7, [5, 3, 4, 7]) : ', howSumTab(7, [5, 3, 4, 7]));
console.log('howSum Tabulation for (7, [2, 4]) : ', howSumTab(7, [2, 4]));
console.log('howSum Tabulation for (8, [2, 3, 5]) : ', howSumTab(8, [2, 3, 5]));
console.log('howSum Tabulation for (300, [7, 14]) : ', howSumTab(300, [7, 14]));



console.log('~~~~~~~~~~~ bestSum w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
bestSum Tabulation

Write a function `bestSum(targetSum, numbers)` that takes in a 
targetSum and an array of numbers as arguments.

The function should return an array containing the shortest combination of numbers 
that add up to exactly the targetSum.  

if there is a tie for the shortest combination you may return any one of the shortest.

ex:  bestSum(8, [2, 3, 5]) --> [3, 5]
[2, 2, 2, 2]
[2, 3, 3]
[3, 5] ---> shortest combination


m = target sum
n = numbers.length

Time Complexity: O(m^2 * n)
Space Complexity: O(m^2)

*/

const bestSumTab = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++){
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [ ...table[i], num];
                // if this current combination is shorter than what is already stored
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[targetSum];
};


console.log('bestSum Tabulation for (7, [5, 3, 4, 7]) : ', bestSumTab(7, [5, 3, 4, 7]));
console.log('bestSum Tabulation for (8, [2, 3, 5]) : ', bestSumTab(8, [2, 3, 5]));
console.log('bestSum Tabulation for (8, [1, 4, 5]) : ', bestSumTab(8, [1, 4, 5]));
console.log('bestSum Tabulation for (100, [1, 2, 5, 25]) : ', bestSumTab(100, [1, 2, 5, 25]));


console.log('~~~~~~~~~~~ canConstruct w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
canConstruct w Tabulation

Write a function `canConstruct(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return a boolean indicating wether or not the `target` can be constructed
by concatenating elements in the `wordBank` array

ex:  canConstruct(abcdef, [ab, abc, cd, def, abcd]) --> true

     canConstruct(skateboard, [ bo, rd, ate, sk, boar ]) --> false
                    ska + t + ?
                    sk + ate + boar + ?
                    ak + ate + bo + ?




m = target.length
n = wordbank.length

Tabulation Soln:
time: O(m^2 * n)
space: O(m)

*/

const canConstructTab = (target, wordBank) => {
    const table = Array(target.length - 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++){
        if (table[i] === true) {
            for (let word of wordBank) {
                // if the word matches the characters starting at position i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
            
        }
    }

    return table[target.length];
};






console.log("canConstructTab abcdef", ["ab", "abc", "cd", "def", "abcd"] , canConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // true
console.log("canConstructTab skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , canConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // false
console.log("canConstructTab enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], canConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // true
console.log(canConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // false



console.log('~~~~~~~~~~~ countConstruct w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
countConstruct w/ Tabulation

Write a function `countConstruct(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return the number of ways that the `target` can be constructed
by concatenating elements in the `wordBank` array.

You may reuse elements of `wordBank` as many times as needed.

ex:  canConstruct(abcdef, [ab, abc, cd, def, abcd]) --> 1

     canConstruct(purple, [ purp, p, ur, le, purpl ]) --> 2
                    purp + le 
                    purpl + e 
                    




m = target.length
n = wordbank.length

time: O(n^m * m)
space: O(m^2)


*/

const countConstructTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++){
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            }
        }
    }

    return table[target.length];
};



console.log("countConstructTab purple", [ "purp", "p", "ur", "le", "purpl "], countConstructTab("purple", [ "purp", "p", "ur", "le", "purpl"])); // 2
console.log("countConstructTab abcdef", ["ab", "abc", "cd", "def", "abcd"] , countConstructTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); // 1
console.log("countConstructTab skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , countConstructTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])); // 0
console.log("countConstructTab enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"], countConstructTab("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])); // 4
console.log(countConstructTab("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eee", "eeee", "eeeee", "eeeeeeee"])); // 0




console.log('~~~~~~~~~~~ AllConstruc w/ Tabulation ~~~~~~~~~~~~~~~~');

/*
allConstruc Tabulation
Write a function `allConstrucTab(target, wordBank)` that accepts a 
target string and an array of strings.

The function should return a 2D array containing all of the ways the the `target` can be constructed
by concatinating elements of the `wordBank` array.  Each element of the 2D array should represent one combination
that constructs the `target`

You may reuse elements of `wordBank` as many times as needed.

ex:  allConstruct(purple, [ purp, p, ur, le, purpl ]) --> 
                [    
                    [ purp + le ], 
                    [ purpl + e ]
                ]


ex: allConstruct(abcdef, [ ab, abc, cd, def, abcd, ef, c]) -->
                [
                    [ ab, cd, ef ],
                    [ ab, c, def ],
                    [ abc, def ],
                    [ abcd, ef ]
                ]



m = target.length
n = wordbank.length

time: O(n^m)
space: O(n^m)

*/

const allConstrucTab = (target, wordBank) => {
    const table = Array(target.length + 1).fill().map(() => []);

    table[0] = [[]];

    for (let i = 0; i <= target.length; i++){
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombinations = table[i].map(subArray => [ ...subArray, word ]);
                table[i + word.length].push(...newCombinations)
            }
        }
    }

    return table[target.length];
};




console.log("allConstrucTab: purple", [ "purp", "p", "ur", "le", "purpl "], allConstrucTab("purple", [ "purp", "p", "ur", "le", "purpl"])); 

console.log("allConstrucTab: skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"] , allConstrucTab("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));

console.log("allConstrucTab: abcdef", ["ab", "abc", "cd", "def", "abcd"] , allConstrucTab("abcdef", ["ab", "abc", "cd", "def", "abcd"])); 