/* 
Javascript Principles

When JS code runs it:
Goes through the code
line by line and runs/executes each line
known as the thread of execution.

Save 'data' like strings and arrays so we can
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


//functions are used for reusable code
function numSquared() {
    return num * num;
}



//functions are first class objects
/* 
they can co-exist with and can be treated like any other JS Object
1. Assigned to variables and properties of other objects
2. Passed as arguments into functions
3. Returned as values from functions

*/
function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]))
    }
    return output;
}

function multiplyBy2(input) { return input * 2;}
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);