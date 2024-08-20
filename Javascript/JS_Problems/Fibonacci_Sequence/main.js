//Fibonacci Sequence

function fibo(memo = {}, num) {
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibo(memo, num - 1) + fibo(memo, num - 2);
  }
  

  /* 
  
The line memo = memo || {}; is a common JavaScript idiom used to ensure that memo is either assigned an existing object or, if it is not provided or is null/undefined, assigned a new empty object.

Breakdown:
memo: This is a parameter passed into the fibo function, intended to be an object that stores previously calculated Fibonacci numbers to avoid redundant calculations (a technique known as memoization).

memo || {}:

memo: If memo is passed into the function and is a truthy value (an object, in this case), it will be used as is.
{}: If memo is not passed in, or if it's undefined, null, or any other falsy value, the expression will fall back to creating and assigning an empty object {}.
Example Scenarios:
When memo is passed as an argument:

If memo is an object (e.g., {} or {1: 1, 2: 1}), then memo = memo || {}; will simply use the passed object.
When memo is not passed or is falsy:

If memo is undefined, null, or any other falsy value, the memo || {} expression will create and assign a new empty object to memo.
Why This Matters:
Memoization: This line is crucial for ensuring that memo is always a valid object. Memoization works by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Without memo, the function would need to recompute every Fibonacci number from scratch, leading to inefficiency.

Summary:
memo = memo || {}; ensures that memo is always an object, either using the provided one or creating a new empty object if memo wasn't passed or was falsy. This allows the function to safely use memo for caching Fibonacci numbers.
  */