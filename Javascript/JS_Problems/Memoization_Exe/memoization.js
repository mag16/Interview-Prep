// A Practical guide to Algorithms with Javascript (FE Masters) w Bianca Gandolfo

//Note:  IN JS an object is just a hashtable.

function times10(n) {
    return n * 10;
}

const cache = {};

const memoTimes10 = (n) => {
    if(n in cache){
        console.log(`Fetching from cache:`, n);
        return cache[n];
    } else {
        console.log('Calculating result');
        let result = times10(n);
        cache[n] = result;
        return result;
    }
}

console.log('~~~~~~~~~~~~~~~~TASK 2~~~~~~~~~~~~~~');
console.log(`Task 2 calculated value:`, memoTimes10(9)); //calculated
console.log('Task 2 cached value:', memoTimes10(9)); //cached


/* Task3: Clean up your global scope by moving your cache inside your function
protip: Use a closre to return a function yuou can call later */

const memoizedClosureTimes10 = () => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = n * 10;
            cache[n] = result;
            return result;
        }
    };
};

const memoClosureTimes10 = memoizedClosureTimes10();

console.log('~~~~~~~~~~~~~~~~TASK 3~~~~~~~~~~~~~~');
console.log(`Task 3 calculated value:`, memoClosureTimes10(9)); //calculated
console.log('Task 2 cached value:', memoClosureTimes10(9)); //cached


const memoize = (cb) => {
    let cache = {};
    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache:', n);
            return cache[n];
        } else {
            console.log('Calculating result');
            let result = cb(n);
            cache[n] = result;
            return result;
        }
    };
};

const memoizedTimes10 = memoize(times10);

console.log('~~~~~~~~~~~~~~~~TASK 4~~~~~~~~~~~~~~');
console.log(`Task 4 calculated value:`, memoizedTimes10(9)); //calculated
console.log('Task 4 cached value:', memoizedTimes10(9)); //cached
