// A Practical guide to Algorithms with Javascript (FE Masters)


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