//A practical guide to Algorithms with Javascript

/* Recursion in 4 Steps

1. Identify base cases.
2. Identify recursive cases
3. Return where appropriate
4. Write procedures for each
case that brings you closer to the base case(s)

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

console.log(computeFactorial());

// Task: rewrite this function so that it uses a loop rather than recursion

function joinElements(array, joinString) {
    let resultSoFar = "";

    for (let i = 0; i <= array.length - 1; i++){
        resultSoFar += array[i] + joinString;
    }

    return resultSoFar + array[array.length - 1];
}

console.log(joinElements(['s','cr', 't cod', ' :) :)'], 'e'));


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