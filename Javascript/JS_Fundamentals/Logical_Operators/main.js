// https://javascript.info/logical-operators


/* 
     ||
*/

/* 
NOTE:
Truthy values are essentially any values that are not falsy. 
This means almost everything else in JavaScript is truthy, including: All objects ( {} , [] ) 
and non-empty strings.

 All numbers (positive or negative) except 0 and NaN
*/

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


// the number 1 is treated as true, the number 0 as false:
if (1 || 0) { // works just like if( true || false )
    alert( 'truthy!' );
  }


/*
Getting the first truthy value from a list of variables or expressions.

For instance, we have firstName, lastName and nickName variables, 
all optional (i.e. can be undefined or have falsy values).

Let’s use OR || to choose the one that has the data and show it 
(or "Anonymous" if nothing set):

*/

  let firstName = "";
  let lastName = "";
  let nickName = "SuperCoder";
  
  alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder


/* 
  Short-circuit evaluation.
  
Another feature of OR || operator is the so-called “short-circuit” evaluation.

It means that || processes its arguments until the first truthy value is reached, 
and then the value is returned immediately, without even touching the other argument.

The importance of this feature becomes obvious if an operand isn’t just a value, 
but an expression with a side effect, such as a variable assignment or a function call.

In the example below, only the second message is printed:

*/

true || alert("not printed");
false || alert("printed");

/* 
  The AND operator is represented with two ampersands &&:
*/

// In classical programming, AND (&&) returns true if both operands are truthy and false otherwise:
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

if (1 && 0) { // evaluated as true && false
    alert( "won't work, because the result is falsy" );
  }

/* 
AND “&&” finds the first falsy value

Given multiple AND’ed values:

result = value1 && value2 && value3;
The AND && operator does the following:

Evaluates operands from left to right.
For each operand, converts it to a boolean. If the result is false, stops 
and returns the original value of that operand.
If all operands have been evaluated (i.e. all were truthy), returns the last operand.
In other words, AND returns the first falsy value or the last value if none were found.

The rules above are similar to OR. The difference is that AND returns the first falsy 
value while OR returns the first truthy one.

Examples:

*/  
// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0

//We can also pass several values in a row. See how the first falsy one is returned:
alert( 1 && 2 && null && 3 ); // null

//  When all values are truthy, the last value is returned
alert(1 && 2 && 3); // 3, the last one.


/* 

*** Precedence of AND && is higher than OR ||
The precedence of AND && operator is higher than OR ||.

So the code a && b || c && d is essentially the same as 
if the && expressions were in parentheses: (a && b) || (c && d).

*/

/* 
   ! (NOT)

The boolean NOT operator is represented with an exclamation sign !.

The syntax is pretty simple:

result = !value;
The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns the inverse value.


For instance:
*/

alert( !true ); // false
alert( !0 ); // true

// A double NOT !! is sometimes used for converting a value to boolean type:
alert( !!"non-empty string" ); // true
alert( !!null ); // false

//The precedence of NOT ! is the highest of all logical operators, so it always executes first, before && or ||.

//What is the code going to show?
alert( 1 && null && 2 ); // null as it is the first falsy value.


/* 
The call to alert returns undefined (it just shows a message, so there’s no meaningful return).

Because of that, && evaluates the left operand (outputs 1), and immediately stops, because undefined 
is a falsy value. And && looks for a falsy value and returns it, so it’s done.

*/
alert( alert(1) && alert(2) ); // 1  and then undefined

//What will the output be?
alert( null || 2 && 3 || 4 ); // 3

/* 
The precedence of AND && is higher than ||, so it executes first.

The result of 2 && 3 = 3, so the expression becomes:

null || 3 || 4
Now the result is the first truthy value: 3.

*/

/*
Check the range outside
Write an if condition to check that age is NOT between 14 and 90 inclusively.

Create two variants: the first one using NOT !, the second one – without it.
*/

let age;
if (!(age > 14 && age < 90));

if (age < 14 || age > 90);

/*
A question about "if"

Which of these alerts are going to execute?

What will the results of the expressions be inside if(...)?

*/

if (-1 || 0) alert( 'first' ); // truthy, runs "first"
if (-1 && 0) alert( 'second' ); // (truthy && falsy) 0 is falsy doesnt run
if (null || -1 && 1) alert( 'third' ); // && evaluates first..both are truthy so second number is 1 so prints third


/* 
Check the login

rite the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
The schema:

*/

// [Images/CheckLogin.png]

let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}
