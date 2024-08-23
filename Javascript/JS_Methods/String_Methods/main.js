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