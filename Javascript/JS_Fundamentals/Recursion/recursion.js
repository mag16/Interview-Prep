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

console.log('~~~~~~~~~~~~~~~~~~~~~~~~ Greatest Common Divisor ~~~~~~~~~~~~~~~')
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