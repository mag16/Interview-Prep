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