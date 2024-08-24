// JavaScript String Methods

const str = "Hello World";

str.length; // 11

str.charAt(4); // o

str.endsWith("d"); // true

str.includes("World"); // true

str.indexOf("W"); // 6

str.repeat(2);// "Hellow WorldHello World";

str.replace("World", "Marco"); // Hello Marco;

str.slice(6, 10); // "Worl"

str.split(" "); // ["Hello World"]

str.startsWith("Hello");

str.substring(6, 11); // "World";

str.toLowerCase(); // "hello world"

str.toUpperCase(); // "HELLO WORLD"

"   Hello World    ".trim(); // "Hello World"


//indexOf()
const paragraph = "I think Ruth's dog is cuter than your dog!";

const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" is ${indexOfFirst}`);
// Expected output: "The index of the first "dog" is 15"

console.log(
  `The index of the second "${searchTerm}" is ${paragraph.indexOf(
    searchTerm,
    indexOfFirst + 1,
  )}`,
);
/* Expected output: "The index of the second "dog" is 38"

indexOf(searchString)
indexOf(searchString, position)

*/

//Using indexOf() to count occurrences of a string.
const string = "To be, or not to be, that is the question.";
let count = 0;
let position = string.indexOf("e");

//keep looping as long as thee character 'e' is found in the string
while (position !== -1) {
  count++;
  position = string.indexOf("e", position + 1);
}

console.log(count); // 4

/*
* string.indexOf("e"):

This method call searches the string from the beginning and returns the index
of the first occurrence of the letter "e". If "e" is found, it returns the index 
of that character. If not, it returns -1.

*position + 1:

After finding an "e" at a certain index (position), you want to search for the next "e" in the string. If you were to call string.indexOf("e", position) without adding 1, the search would start at the current position of the found "e", which would just return the same index.
By using position + 1, you're telling the indexOf method to start searching from the character immediately after the current "e". This avoids finding the same "e" again and instead finds the next occurrence in the string.
*/