/* 
Javascript Principles

When JS code runs it:
Goes through the code
line by line and runs/executes each line
known as the thread of execution.

Save 'data'like strings and arrays so we can
use the data later - in its memory

We can save code ('Functions')

*/

const num = 3;
function multiplyBy2 (inputNumber) {
    const result = inputNumber*2;
    return result;
}

const output = multiplyBy2(num);
const newOutput = multiplyBy2(10);