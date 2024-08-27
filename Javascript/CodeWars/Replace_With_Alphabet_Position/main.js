/* 
Welcome.

In this kata you are required to, given a string, replace every letter with its position
 in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

*/




function alphabetPosition(text) {
    let new_string = text.toLowerCase().replace(/[^a-z]/g,"");

    let arr = [];
        for (let i = 0; i < new_string.length; i++) {
            arr.push(new_string[i].charCodeAt() - 96);
        }
    return arr.join(' ');
  }

  console.log(alphabetPosition("The narwhal bacons at midnight."))


/*
let new_string = text.toLowerCase().replace(/[^a-z]/g, "");

Breakdown of the replace() Method:
Original String:

You start with a string text that might contain uppercase letters, lowercase letters, spaces, punctuation, etc.
Example: "The narwhal bacons at midnight."
Convert to Lowercase:

text.toLowerCase():
This converts all characters in the string to lowercase, ensuring that your comparisons are case-insensitive.
Example: "the narwhal bacons at midnight."
Replace Method:

.replace(/[^a-z]/g, ""):
The replace() method here is used to remove any characters from the string that are not lowercase alphabetic letters (a to z).
Detailed Explanation of the Regular Expression /[^a-z]/g:
/[^a-z]/:
This is a regular expression (regex) pattern used to match any character that is not a lowercase letter from a to z.
^: Inside the square brackets [], the caret ^ is a negation operator, meaning "not."
[a-z]: This defines the range of characters from a to z.
Therefore, [^a-z] matches any character that is not a lowercase letter (a to z).
g Flag:
The g flag stands for "global," meaning the replace() method should replace all matches in the string, not just the first one.
Without g, only the first occurrence of a non-letter character would be replaced.
Second Argument "":
The second argument to replace() is an empty string "".
This tells replace() to replace any character that matches the pattern with an empty string (i.e., remove it).
What Happens:
The replace() method will find every character in new_string that is not a lowercase letter and remove it.
Example:
Input: "the narwhal bacons at midnight."
After replace(/[^a-z]/g, ""): "thenarwhalbaconsatmidnight"
Final Result:
After this operation, new_string contains only the lowercase alphabetic characters from the original text, with all other characters (like spaces, punctuation, and numbers) removed.


*/

/*
  Get the Character and Convert to Alphabet Position:
* arr.push(new_string[i].charCodeAt() - 96);
  *new_string[i]:
    *This accesses the character at the index i in new_string.
       *new_string[i].charCodeAt():
       *The charCodeAt() method returns the Unicode value of the character at position i.

For example, if new_string[i] is 'a', charCodeAt() returns 97.
charCodeAt() - 96:
Subtracting 96 from the Unicode value converts it from the Unicode range to its corresponding alphabet position:
'a' has a Unicode value of 97, so 97 - 96 = 1.
'b' has a Unicode value of 98, so 98 - 96 = 2, and so on.
arr.push(...):
The resulting alphabet position is then added to the arr array.
      
*/

/* 
arr.join(" ")

The join() method in JavaScript converts all the elements of an array into a string.
The argument passed to join() (in this case, a space " ") determines what separates the elements in the resulting string.
So, arr.join(" ") will combine all the elements in the arr array into a single string with each element separated by a space.

Result After join(" "):

The array [20, 8, 5, 14, 1, 18, 23, 8, 1, 12] will become the string:
javascript
Copy code
"20 8 5 14 1 18 23 8 1 12"
This string is the final output that represents the positions of each letter in the input string, 
with each position separated by a space.


*/