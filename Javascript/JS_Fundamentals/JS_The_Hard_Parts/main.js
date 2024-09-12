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
// higher order function
function copyArrayAndManipulate(array, instructions) {
    const output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]))
    }
    return output;
}

function multiplyBy2(input) { return input * 2;} // the function we insert is the callback function
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);

// Arrow functions
const multiplyBy2 = input => input * 2;

/*
FUNCTIONS WITH MEMORIES
* When our functions get called, we create a live storage of 
data (local memory/variable environment/state) for that functions
execution context.

* When the function finishes executing, its local memory is deleted (except the returned value)

* But what if our functions could hold on to live data between executions?

* This would let our function definitions have an associated cache/persistent memory

* But it all starts with us returning a function from another function.

*/

/*
Functions can be returned from other functions in JavaScript
*/

function createFunction() {
    function multiplyBy2(num) {
        return num*2;
    }
}

const generatedFunc = createFunction();
const results = generatedFunc(3); // 6



// Calling a function in the same function as it was defined

function outer() {
    let counter = 0;
    //Closure
    function incrementCounter() {
        counter++;
    }
    incrementCounter();
}
const myNewFunction = outer();  
myNewFunction(); // 1
myNewFunction(); // 2

const anotherFunction = outer();
anotherFunction();  // 1
anotherFunction(); // 2

// Where you define your functions determines what data is has access to when you call it.

/*
What can we call this "Backpack"?

- Closed over "Variable Environment" (C.O.V.E)
- Persistent Lexical Scope Referenced Data (P.L.S.R.D)
- "Backpack"
- "Closure"

The backpack (or closure) of live data is attached incrementCounter (thenm to myNewFunction)
thorough a hidden property known as [[scope]] which persists when the inner function is returned out.

*/

/*
Closure gives our functions persistent memories and entirely
new toolkit for writing professional code.

* Helper functions: Everyday professional helper functions like "once" and "memoize"

* Iterators and generators: which use lexical scoping and closure to achieve the most contemporary
patterns for handling data in javascript

* Module pattern: Preserve state for the life of an application without polluting the global namespace

* Asynchronous JavaScript: Callbacks and Promises rely on closure to persist state in an asynchronous environment
*/