/*
https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/learn/lecture/8344046#overview

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