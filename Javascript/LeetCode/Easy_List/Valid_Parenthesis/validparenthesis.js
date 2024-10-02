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

function validParenthesis(s) {

    let store = [];

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "(" || s[i] === "{" || s[i] === "[") {
            store.push(s[i]);
        } else if (store.length === 0) {
            return false;    
        } else {
            let c = store[store.length - 1];
            store.pop();
            if ((s[i] === ")" && c === "(") || 
                (s[i] === "}" && c === "{") || 
                (s[i] === "]" && c === "[")) {
                    return true;
                }  
                    else {
                        return false;
                }
            }

        }  

    if (store.length === 0) return true;
}

console.log(validParenthesis("()"))