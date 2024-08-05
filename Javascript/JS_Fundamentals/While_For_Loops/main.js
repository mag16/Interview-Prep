/*
https://javascript.info/while-for

We often need to repeat actions.

For example, outputting goods from a list one after another or 
ust running the same code for each number from 1 to 10.

Loops are a way to repeat the same code multiple times.

*/

// While Loop
while (condition) {
    // code
    // so-called "loop body"
  }


/*
While the condition is truthy, the code from the loop body is executed.

For instance, the loop below outputs i while i < 3:

*/
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

/* 

The for loop is more complex, but it’s also the most commonly used loop.

It looks like this:

*/

for (begin; condition; step) {
  // ... loop body ...
}


for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  alert(i);
}

/*
part		
begin::	let i = 0	Executes once upon entering the loop.
condition::	i < 3	Checked before every loop iteration. If false, the loop stops.
body::	alert(i)	Runs again and again while the condition is truthy.
step::	i++	Executes after the body on each iteration.
*/


/* 
LABELS for Break & Continue

Sometimes we need to break out from multiple nested loops at once.

For example, in the code below we loop over i and j, prompting for the coordinates 
(i, j) from (0,0) to (2,2):

*/
for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // what if we want to exit from here to Done (below)?
  }
}

alert('Done!');

/* 
We need a way to stop the process if the user cancels the input.

The ordinary break after input would only break the inner loop. That’s not sufficient – labels, come to the rescue!

A label is an identifier with a colon before a loop:

*/

labelName: for (...) {
 // ...
}

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');

/* SUMMARY
We covered 3 types of loops:

while – The condition is checked before each iteration.
do..while – The condition is checked after each iteration.
for (;;) – The condition is checked before each iteration, additional settings available.
To make an “infinite” loop, usually the while(true) construct is used. Such a loop, just like any other, can be stopped with the break directive.

If we don’t want to do anything in the current iteration and would like to forward to the next one, we can use the continue directive.

break/continue support labels before the loop. A label is the only way for break/continue to escape a nested loop to go to an outer one.

*/

/*
TASKS

Last Loop Value

What is the last loop value alerted by the following code? Why?
*/
let x = 3;

while (x) {
  alert( x-- );
} //3,2,1

alert(x--); // shows 3, decreases x to 2

alert(x--) // shows 2, decreases x to 1

alert(x--) // shows 1, decreases x to 0

/*
Which values does the loop show?

*/
//prefix form ++i
let y = 0;
while (++y < 5) alert(y) //1,2,3,4 ...no 5 because (5 < 5) is false

//postfix form i++
let z = 0;
while (z++ < 5) console.log(z); // 1,2,3,4,5 

/*
The first value is again z = 1. The postfix form of i++ increments i and then returns the old value, 
so the comparison z++ < 5 will use z = 0 (contrary to ++z < 5).

But the alert call is separate. It’s another statement which executes after the increment and the comparison.
 So it gets the current z = 1.

Then follow 2, 3, 4…

Let’s stop on z = 4. The prefix form ++i would increment it and use 5 in the comparison. 
But here we have the postfix form i++. So it increments i to 5, but returns the old value. 
Hence the comparison is actually while(4 < 5) – true, and the control goes on to alert.

The value i = 5 is the last one, because on the next step while(5 < 5) is false.
*/