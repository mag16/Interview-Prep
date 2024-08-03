/* 

The nullish coalescing operator ?? provides a short way to choose the first “defined” value from a list.

It’s used to assign default values to variables:

// set height=100, if height is null or undefined
height = height ?? 100;
The operator ?? has a very low precedence, only a bit higher than ? and =, so consider adding parentheses when using it in an expression.

It’s forbidden to use it with || or && without explicit parentheses.

*/

let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let name = "John";

alert(name ?? "Anonymous") // John (name is not null/undefined)

/* 

We can also use a sequence of ?? to select the first value from a list that isn’t
 null/undefined.

Let’s say we have a user’s data in variables firstName, lastName or nickName. 
All of them may be not defined, if the user decided not to fill in the corresponding 
values.

We’d like to display the user name using one of these variables, or show “Anonymous” 
if all of them are null/undefined.

Let’s use the ?? operator for that:

*/

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder