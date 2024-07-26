/* 
The goal of this exercise is to convert a string to a new string where
 each character in the new string is "(" if that character appears only once 
 in the original string, or ")" if that character appears more than once in the 
 original string. Ignore capitalization when determining if a character is a 
 duplicate.

Examples:
 
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

*/

function duplicateEncode(word) {
    // Initialize an empty string to build the encoded result
    let encodeString = "";
    
    // Convert the input word to lowercase and split it into an array of characters
    let lowerCase = word.toLowerCase().split("");
    
    // Create an object to store the count of each character
    let charCount = {};
    
    // First pass: Count occurrences of each character
    for (let i = 0; i < lowerCase.length; i++) {
        let char = lowerCase[i];
        // If the character is not yet in the `charCount` object, initialize it to 0
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    // Second pass: Build the encoded string based on character counts
    for (let i = 0; i < lowerCase.length; i++) {
        let char = lowerCase[i];
        // If the character appears only once, add '(' to the encoded string
        // Otherwise, add ')' to the encoded string
        encodeString += charCount[char] === 1 ? '(' : ')';
    }
  
    // Return the final encoded string
    return encodeString;
}

console.log(duplicateEncode("recede"))


/*
charCount[char] = (charCount[char] || 0) + 1;


charCount[char]:

This accesses the current count of the character char in the charCount object.
If char is not yet a property of charCount, this expression evaluates to undefined.
charCount[char] || 0:

This part uses the logical OR (||) operator.
If charCount[char] is undefined (or any falsy value like null or 0), it will default to 0.
This ensures that if the character char hasn’t been counted yet, it starts with a count of 0.
(charCount[char] || 0) + 1:

After evaluating to 0 if charCount[char] was undefined, the expression adds 1.
This increments the count of the character by 1.
charCount[char] =:

Finally, this assigns the new count back to the charCount object for the property corresponding to the character char.




*/