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

// Prefix and Postfix form in FOR loops
for (let i = 0; i < 5; i++) alert( i );

for (let i = 0; i < 5; ++i) alert( i );

/*
You get 0 to 4 in both cases

That can be easily deducted from the algorithm of for:

Execute once i = 0 before everything (begin).
Check the condition i < 5
If true – execute the loop body alert(i), and then i++
The increment i++ is separated from the condition check (2). That’s just another statement.

The value returned by the increment is not used here, so there’s no difference between i++ and ++i.
*/

/* 
Output Even numbers in the Loop

Use the for loop to output even numbers from 2 to 10.
*/
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log( i );
  }
}

/* Replace "for" with "while" loop

Rewrite the code changing the for loop to while without altering
its behavior (the output should stay same).

for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}
}
  */

let i = 0;
while (i < 3){
    alert(`number ${i}!`)
    i++;
}

/* 
Repeat until input is correct

Write a loop which prompts for a number greater than 100. 
If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 
or cancels the input/enters an empty line.

Here we can assume that the visitor only inputs numbers. There’s no need to implement a 
special handling for a non-numeric input in this task.

*/

let userInput = Number(prompt("Please enter a number greater than 100", 0));

if(userInput <= 100){
 console.log("Please try again bro!!! ");
}

/*

Output Prime Numbers

An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.


*/
let n = 10;

//use a label
nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  console.log( i ); // a prime
}