/*
You need to write a function that reverses the words in a given string. Words are always separated by a single space.

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"
Happy coding!
*/

function reverse(string) {
    let arr = string.split(" ");
    let reversed = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);  // Push each word into reversed array
    }
    
    return reversed.join(" ");  // Join and return after loop completes
}

  