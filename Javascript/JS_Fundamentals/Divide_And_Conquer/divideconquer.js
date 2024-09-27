// FE Masters A Practical Guide to Algorithms with Javascript
// https://frontendmasters.com/courses/practical-algorithms

// Task: implement linear search

function linearSearch(list, item) {
    let index = -1;

    for(let i = 0; i < list.length; i++) {
        if(list[i] === item){
            index = i; //index of 90 = 3
        }
    }

    return index;
};

console.log(linearSearch([2,6,7,90,103], 90));

//bgando solution
function linearSearch2(list, item) {
    let index = -1;

    list.forEach((listItem, i) => {
        if(listItem === item){
            index = i; //index of 6 = 1
        }
    });

    return index;
};

console.log(linearSearch([2,6,7,90,103,400,105], 6));

// Binary search
function binarySearch(list, item) {

    let min = 0;
    let max = list.length - 1;
    let guess;

    while (min <= max) {
        guess = Math.floor((min + max) / 2);

        if (list[guess] === item) {
            return guess;
        }
        else {
            if (list[guess] < item) {
                min = guess + 1 //check the next #
                
            }
            else {
                max = guess - 1; // check the previous #
            }
        }
    }
    return -1;
}

console.log(linearSearch([2,6,7,90,103], 90));

/*
Divide and Conquer

Recursive calls to a subset of a problem

0. Recognize base case

1. Divide: Break problem down during each call

2. Conquer: Do work on each subset.

3. Combine: Solutions
*/

/*
Pseudocode: Merge Sort

mergeSort(list)
base case: if list.length < 2; return
break the list into halves L & R
Lsorted = mergeSort(L)
Rsorted = mergeSort(R)
return merge (Lsorted, Rsorted)
*/

function mergeSort(list) {
    if(list.length === 1) return list;

    const middle = Math.floor(list.length/2)

    const left = list.slice(0, middle) // items on the left side
    const right = list.slice(middle) //items on the right side
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge (sortedLeft, sortedRight);
};

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;

    while (indexLeft < left.length && indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft])
            indexLeft++;
        } else {
            result.push(right[indexRight])
            indexRight++
        }
    }

    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

const list = [2,5,1,3,7,2,3,8,6,3]
console.log('MergeSort:',mergeSort(list))


//Bubble Sort Basic Implementation...terrible with a list that is reversed in order..ok with a sorted list

// Sample of arrays to sort
let arrayRandom = [9,2,5,6,4,3,7,10,1,8];
let arrayOrdered = [1,2,3,4,5,6,7,8,9,10];
let arrayReversed = [10,9,8,7,6,5,4,3,2,1];

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function bubbleSortBasic(array) {
    let countOuter = 0;
    let countInner = 0;
    let countSwap = 0;

    for(let i = 0; i < array.length; i++) {
        countOuter++;
        for(let j = 1; j < array.length; j++) {
            countInner++;
            if(array[j - 1] > array[j]) {
                countSwap++;
                swap(array, j - 1, j);
            }
        }
    }
    console.log('Outer:',countOuter,'Inner:', countInner, 'swap:', countSwap);
    return array;
}

console.log('\n ~~ basic: arrayRandom ~~~');
bubbleSortBasic(arrayRandom.slice());

console.log('\n ~~ basic: arrayOrdered ~~~');
bubbleSortBasic(arrayOrdered.slice());

console.log('\n ~~ basic: arrayReversed ~~~');
bubbleSortBasic(arrayReversed.slice());

// Otimized Bubble Sort
function bubbleSort(array) {
    let countOuter = 0;
    let countInner = 0;
    let countSwap = 0;

    let swapped;
    do {
        countOuter++;
        swapped = false;
        for(let i = 0; i < array.length; i++){
            countInner++;
            if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
                countSwap++;
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while(swapped);

    console.log('Outer:',countOuter,'Inner:', countInner, 'swap:', countSwap);
    return array;
}

console.log('\n ~~~~ Optimized Bubble Sort ~~~~~~')
console.log('\n ~~ Optimized: arrayRandom ~~~');
bubbleSort(arrayRandom.slice());

console.log('\n ~~ Optimized: arrayOrdered ~~~');
bubbleSort(arrayOrdered.slice());

console.log('\n ~~ Optimized: arrayReversed ~~~');
bubbleSort(arrayReversed.slice());


//Make coin change (Greedy Algorithm)
/*
Write a function, makeChange, that returns an integer that represents
the least number of coins that add up to an amount where the amount is always
divisible by 5

P.S does work with values like but not most optimal:
coin values: 1,6,10
input: 12
*/

console.log('~~~~~~~ MAKE CHANGE ALGORITHM ~~~~~~~~')

const makeChange = (coins, amount) => {
    coins.sort((a, b) => b - a);
    let coinTotal = 0;
    let i = 0;
    while(amount > 0) {
        if(coins[i] <= amount) {
            amount -= coins[i];
            coinTotal++;
        }else {
            i++;
        }
    }
    return coinTotal;
}

console.log('Make change divisible by 5',makeChange([5,10,25], 50)); // 25,25
console.log('Make change',makeChange([1,5,10], 12)); //10, 1, 1

/* (Brute Force)Write a function, makeChange, that returns an integer that represents the least number of 
//coins that add up to the amount,n. */
console.log('~~~~~~~ BRUTE FORCE MAKE CHANGE ALGORITHM ~~~~~~~~')

let recursionCounter = 0;
const coins = [10, 6, 1];

const makeChangeBF = (value, i) => {
    recursionCounter++;
    console.log(`${recursionCounter}: calling ${value} at ${i}`);
    if (value === 0) return 0;
    let minCoins;
    coins.forEach((coin)=> {
        if (value - coin >= 0) {
            let currMinCoins = makeChange(value - coin);
            if(minCoins === undefined || currMinCoins < minCoins) {
                minCoins = currMinCoins;
            }
        }
    });
    return minCoins + 1;
}

console.log('Make Change Brute Force:',makeChangeBF(10));