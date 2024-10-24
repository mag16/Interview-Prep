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

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Frequency Counter Pattern ~~~~~~~~~~~~~~~~~~~~~~');

console.log('~~~~~~~~~~~~~~~~~~~~~~~ CharCount ~~~~~~~~~~~~~~~~~~~~~~');

function charCount(str) {
    //make object to return at end
    let result = {};
    // loop over string for each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()
        // if the char is a number/letter AND is a key in object, add on to count
        if(result[char] > 0){
            result[char]++;
        }
        else {
            result[char] = 1;
        };

        return result;
    }
};

console.log(`The character count of this string w/charCount is :`, charCount("Pizza"));

function charCount2(str) {
    let obj = {};
    let regex = /[a-z0-9]/;
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase();
        if (regex.test(char)) {
            if(obj[char] > 0) {
                obj[char]++;
            } else {
                obj[char] = 1;
            };
        }
    }

    return obj;
};

console.log(`The character count of this string w/charCount2 is :`, charCount2("Pizza"));

function charCount3(str) {
    let obj = {};
    for (let char of str) {
        char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            obj[char] = ++obj[char] || 1;
        }
             
    }

    return obj;
};

console.log(`The character count of this string w/charCount3 is :`, charCount3("Hello"));

/*
FREQUENCY COUNTERS (Pattern):
This Pattern uses objects or sets to collect values/frequencies of values

This can often avoid the need for nested loops or O(N^2) operations with arrays/strings
*/

// naive soln
console.log('~~~~~~~~~~~~~~~~~~~~~~~ Frequency Pattern ~~~~~~~~~~~~~~~~~~~~~~');


function same(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }
    for(let i = 0; i < arr1.length; i++){
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1);
    }

    return true
};

console.log(`The same naive soln for arr1 & arr2 :`, same([1, 2, 3], [1, 4, 9]));

function same2(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for (let key in frequencyCounter1) {
        if(!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false;
        }
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    
    return true
}

console.log(`The same2 refactored soln for arr1 & arr2 :`, same2([1, 2, 3, 4, 5], [1, 4, 9, 16, 25]));

/*
ANAGRAM
Given two strings, write a function to determine if the
second string is an anagram of the first.  An anagram is a word,
phrase, or name formed by arranging the letters of another, such as cinema from iceman.

Time Complexity : O(N)

*/

console.log('~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM ~~~~~~~~~~~~~~~~~~~~~~');

const validAnagram = (a,b) => {
    // Check if strings have the same length
    if(a.length !== b.length) return false;
    // Initialize frequency counters for both strings
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    // Populate frequencyCounter1 with character counts from a
    for (let val of a){
        val = val.toLowerCase();// Convert to lowercase for case insensitivity
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;// Increment count or initialize to 1
    }
    
    // Populate frequencyCounter1 with character counts from b
    for (let val of b){
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

console.log('is this a valid aganagram ? : ("","")',validAnagram("",""));
console.log('is this a valid aganagram ?: ("aaz","zza")',validAnagram("aaz","zza"));
console.log('is this a valid aganagram ?: ("anagram","nagaram")',validAnagram("anagram","nagaram"));
console.log('is this a valid aganagram ?: ("rat","cat")',validAnagram("rat","cat"));
console.log('is this a valid aganagram ?: ("awesome","awesom")',validAnagram("awesome","awesom"));
console.log('is this a valid aganagram ?: ("qwerty","qeywrt")',validAnagram("qwerty","qeywrt"));
console.log('is this a valid aganagram ?: ("texttwisttime","timetwisttext")',validAnagram("texttwisttime","timetwisttext"));


console.log('~~~~~~~~~~~~~~~~~~~~~~~ ANAGRAM 2 ~~~~~~~~~~~~~~~~~~~~~~');

const validAnagram2 = (first,second) => {
    // Check if strings have the same length
    if(first.length !== second.length) return false;
    // Initialize frequency counters for both strings
    let lookup = {};
    
    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup);

    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // cant find letter or letter is zero then its not an anagram
        if (!lookup[letter]){
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    // If all checks pass, the strings are anagrams
    return true;
};

console.log('is this a valid aganagram2 ? : ("","")',validAnagram2("",""));
console.log('is this a valid aganagram2 ?: ("aaz","zza")',validAnagram2("aaz","zza"));
console.log('is this a valid aganagram2 ?: ("anagram","nagaram")',validAnagram2("anagram","nagaram"));
console.log('is this a valid aganagram2 ?: ("rat","cat")',validAnagram2("rat","cat"));
console.log('is this a valid aganagram2 ?: ("awesome","awesom")',validAnagram2("awesome","awesom"));
console.log('is this a valid aganagram2 ?: ("qwerty","qeywrt")',validAnagram2("qwerty","qeywrt"));
console.log('is this a valid aganagram2 ?: ("texttwisttime","timetwisttext")',validAnagram2("texttwisttime","timetwisttext"));

console.log('~~~~~~~~~~~~~~~~~~~~~~~ Multiple Pointers ~~~~~~~~~~~~~~~~~~~~~~');

