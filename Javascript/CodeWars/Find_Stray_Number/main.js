/*
You are given an odd-length array of integers,
 in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)
*/


function stray(numbers) {
    const uniqueValue =  numbers.find(number => numbers.indexOf(number) === numbers.lastIndexOf(number));
    
    return uniqueValue;
}


/*
Using find() Method:

The find() method iterates over each element in the numbers array and returns the first element that satisfies
 the provided testing function.
In this case, the function checks if a number appears only once in the array.
Finding the Unique Value:

numbers.indexOf(number):
This returns the index of the first occurrence of number in the array.
numbers.lastIndexOf(number):
This returns the index of the last occurrence of number in the array.
If a number is unique, both indexOf() and lastIndexOf() will return the same index, because the
 number appears only once in the array.
If a number appears more than once, these two methods will return different indices 
(first occurrence vs. last occurrence).
Returning the Unique Value:

The find() method will return the number for which indexOf() equals lastIndexOf(), meaning it's 
the only occurrence of that number in the array.
Example Walkthrough:
Let's consider the input [1, 1, 2]:

The find() method will check:
For 1: indexOf(1) is 0, and lastIndexOf(1) is 1 (not equal).
For 2: indexOf(2) is 2, and lastIndexOf(2) is 2 (equal).
Since 2 is the only number where indexOf equals lastIndexOf, it is returned as the unique value.

*/