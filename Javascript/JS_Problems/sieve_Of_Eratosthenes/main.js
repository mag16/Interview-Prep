
/* https://medium.com/cracking-the-coding-interview-in-ruby-python-and/the-sieve-of-eratosthenes-in-javascript-mastering-algorithms-7b20ee2cf08d

The Sieve of Eratosthenes In JavaScript

The Sieve of Eratosthenes, named after the ancient Greek mathematician Eratosthenes, 
is a time-tested algorithm to find all prime numbers up to a specified integer. 

*/
function sieveOfEratosthenes(limit) {
    // Step 1: Create an array of size (limit + 1) and initialize all entries to true
    // This array will be used to keep track of prime numbers
    let primes = [];  // Array to store the final list of prime numbers
    let sieve = Array(limit + 1).fill(true); // Assume all numbers are prime initially
    
    // Step 2: 0 and 1 are not prime numbers, so mark them as false
    sieve[0] = sieve[1] = false;
    
    // Step 3: Start with the first prime number (2) and go up to the square root of the limit
    for (let i = 2; i <= Math.sqrt(limit); i++) {
        // Step 4: If sieve[i] is still true, it means 'i' is a prime number
        if (sieve[i]) {
            // Step 5: Mark all multiples of 'i' as non-prime (false)
            // Start from i * i (the first multiple of 'i' that hasn't been marked yet)
            for (let j = i * i; j <= limit; j += i) {
                sieve[j] = false; // Mark j as non-prime
            }
        }
    }
    
    // Step 6: Collect all numbers that are still marked as prime in the 'sieve' array
    for (let i = 2; i <= limit; i++) {
        if (sieve[i]) primes.push(i); // Add the prime number to the 'primes' array
    }
    
    // Step 7: Return the array of prime numbers
    return primes;
}

/*

Breakdown of Each Step:
Initialization:

let primes = []: This will hold the final list of prime numbers found.
let sieve = Array(limit + 1).fill(true): Creates an array with limit + 1 elements, all initially set to true. This represents that every number is initially assumed to be prime.
Mark Non-Primes:

sieve[0] = sieve[1] = false: Explicitly marks 0 and 1 as non-prime.
Main Loop:

for (let i = 2; i <= Math.sqrt(limit); i++): Iterates from 2 up to the square root of limit. The reason for this upper limit is explained earlier: any non-prime number less than or equal to limit must have at least one factor less than or equal to sqrt(limit).
Marking Multiples:

if (sieve[i]): Checks if i is still marked as prime.
for (let j = i * i; j <= limit; j += i): Marks all multiples of i, starting from i * i, as non-prime. This is efficient because smaller multiples of i will have already been marked by smaller primes.
Collect Primes:

for (let i = 2; i <= limit; i++): Iterates through the array to collect all numbers still marked as prime.
Return Result:

return primes: Returns the array of prime numbers.

Code in Algorithm:

In the Sieve of Eratosthenes algorithm, the goal is to identify all prime numbers up to a given limit. Here’s why Array(limit + 1).fill(true) is used:

Array Initialization: Array(limit + 1) creates an array with limit + 1 elements. The reason for limit + 1 is because arrays are zero-indexed, so you need an array that includes indices from 0 to limit.

Filling with true: The fill(true) method initializes all elements of this array to true. The idea is that initially, we assume all numbers (except 0 and 1) are prime.

Indexing and Marking Non-Primes: The algorithm then proceeds to mark non-prime indices. By setting the value to false for indices that are multiples of a discovered prime, it effectively marks non-prime numbers.

So, Array(limit + 1).fill(true) sets up an array where all potential prime numbers start as true, and as the algorithm runs, it updates this array to reflect which numbers are actually primes and which are not.

In the Sieve of Eratosthenes algorithm, the use of Math.sqrt(limit) in the first for loop is a key optimization. Here’s why it’s important:

Prime Factors Limitation: Any composite number (a non-prime number) has at least one factor that is less than or equal to its square root. 
This is because if you have a number 𝑁
with factors 
a and 𝑏
b (i.e., a × b = N , then if both a and b were greater than square root 𝑁, their product 𝑎 × 𝑏 would exceed 𝑁 Therefore, one of the factors must be less than or equal to 
Square Root 𝑁.

Efficiency: By iterating only up to Math.sqrt(limit), you significantly reduce the number of iterations required. This is because once you’ve marked the multiples of primes up to 
square root limit , you’ve effectively marked all multiples for any number up to limit. Checking beyond square root limit
​is unnecessary because all multiples of larger numbers would have already been marked by their smaller prime factors.

Algorithmic Complexity: This optimization helps in reducing the overall time complexity of the algorithm. The Sieve of Eratosthenes is efficient even without this optimization, but by only iterating up to the square root of limit, it further reduces the number of operations.

To summarize, using Math.sqrt(limit) in the loop ensures that you are only performing the necessary computations to mark non-prime numbers, making the algorithm more efficient.

*/

/* Time and Space Complexity 

Time Complexity
Initialization: Creating and initializing the sieve array takes 
O(n) time, where 𝑛 is the limit.

Marking Non-Primes:

The outer loop runs from 𝑖 = 2 to Square Root n. This loop executes 𝑂(square root 𝑛) times.
Inside the outer loop, the inner loop marks multiples of i as non-prime. For each prime 
i, the inner loop runs from 𝑖 ** 2 to n in steps of i. The number of iterations of the inner loop across all prime i is 
𝑂(𝑛loglog𝑛).

The overall time complexity is 𝑂(𝑛loglog𝑛). 

This is because:
* The cost of marking multiples of each prime i is proportional to 𝑛/i.
​
* Summing up the cost over all primes gives the harmonic series, which is 
𝑂(𝑛loglog𝑛).

Space Complexity
Array Storage:

The sieve array has 𝑛+1 elements, which requires O(n) space.

Primes Array:

The space required for storing the resulting prime numbers is 𝑂(𝑛/log𝑛), but in the worst case, it can be considered 
𝑂(𝑛) because the number of primes less than 𝑛 is approximately 𝑛/log𝑛, and this is an upper bound.

Overall, the space complexity is 𝑂(𝑛).

Summary
Time Complexity: 
𝑂(𝑛 log log 𝑛)

Space Complexity: 𝑂(𝑛).

This makes the Sieve of Eratosthenes very efficient for finding all prime numbers up to a large limit, especially in terms of time complexity.
*/