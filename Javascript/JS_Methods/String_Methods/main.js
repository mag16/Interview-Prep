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

/*
String behavior to look out for

Because string is a primitive, attempting to assign a value to a string's length property has no observable effect,
 and will throw in strict mode.
*/

const myString = "bluebells";

myString.length = 4;
console.log(myString); // "bluebells"
console.log(myString.length); // 9  strings are immutable

// String .at()
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"

// comparing 3 ways to get the penultimate character of a String
const myString = "Every green bus drives fast.";

// Using length property and charAt() method
const lengthWay = myString.charAt(myString.length - 2);
console.log(lengthWay); // 't'

// Using slice() method
const sliceWay = myString.slice(-2, -1);
console.log(sliceWay); // 't'

// Using at() method
const atWay = myString.at(-2);
console.log(atWay); // 't'
