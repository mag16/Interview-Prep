/*
Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/

String.prototype.toJadenCase = function() {
    //...
    let words = this.split(" ");
  
    for (let i = 0; i < words.length; i++){  
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
};

/*
The + words[i].slice(1) part is necessary to ensure that after capitalizing the first letter of each word, the rest of the word remains intact and is appended back.

Why You Need It:
words[i][0].toUpperCase(): This part capitalizes only the first letter of the word. However, if you only use this, you'd lose the rest of the word.

For example, "hello" would become "H", but the rest of the word ("ello") would be missing.
words[i].slice(1): This extracts the rest of the word, starting from the second character (index 1 onwards), and keeps it unchanged.

slice(1) ensures that "hello" becomes "ello".
The Full Operation:
words[i][0].toUpperCase(): Capitalizes the first letter.
"hello" → "H"
+ words[i].slice(1): Appends the rest of the word.
"H" + "ello" → "Hello"
Example:

let word = "hello";
let capitalized = word[0].toUpperCase() + word.slice(1);  // "Hello"
console.log(capitalized);  // Output: "Hello"

Without slice(1), you'd only capitalize the first letter but would lose the rest of the 
word. This ensures the first letter is capitalized while the remaining part stays the same.

*/