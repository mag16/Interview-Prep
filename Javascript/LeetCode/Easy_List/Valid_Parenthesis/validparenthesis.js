/* 20. Valid Parenthesis

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"

Output: true

Example 2:

Input: s = "()[]{}"

Output: true

Example 3:

Input: s = "(]"

Output: false

Example 4:

Input: s = "([])"

Output: true


*/

console.log('~~~~~~~~~~~~~~~~ validParenthesis() ~~~~~~~~~~~');

function validParenthesis(s) {
    let store = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            store.push(s[i]);
        } else if (store.length === 0) {
            return false;
        } else {
            let c = store.pop();
            if ((s[i] === ")" && c !== "(") || 
                (s[i] === "}" && c !== "{") || 
                (s[i] === "]" && c !== "[")) {
                return false;
            }
        }
    }

    return store.length === 0;
}

console.log(validParenthesis("()"));
console.log(validParenthesis("()[]{}"));
console.log(validParenthesis("[()}"));

console.log('~~~~~~~~~~~~~~~~ isParenthesisValid() ~~~~~~~~~~~');

function isParenthesisValid(s) {
    let store = [];

    for (let i = 0; i < s.length; i++) {
        if(s.charAt(i) == '(') {
            store.push(')')
        } else if(s.charAt(i) == '{') {
            store.push('}')
        } else if(s.charAt(i) == '[') {
            store.push(']')
        } else if(store.length === 0 || store.pop() !== s.charAt(i)) {
            return false;
        }
    }
    // if the store is empty then all parenthesis were matched correctly. 
    return store.length === 0;
}

console.log(isParenthesisValid("()")); // true
console.log(isParenthesisValid("()[]{}")); // true
console.log(isParenthesisValid("(]")); // false
console.log(isParenthesisValid("([)]")); // false
console.log(isParenthesisValid("{[]}")); // true
