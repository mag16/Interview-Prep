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

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Dynamic Programming ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

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

// [../gridTraveler.png]
// Grid traveler

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~ Grid Traveler ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');

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

const gridTravelerMemoized = (m, n, memo = {}) => {
    const key = m + ',' + n; // separator needed to
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