// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const splittedString = s.split('');
    const stackArray = [];
    for (let i = 0; i < splittedString.length; i++) {
        const bracket = splittedString[i];
        if (bracket === '(' || bracket === '{' || bracket === '[') {
            stackArray.push(bracket);
            continue;
        } else {
            if (bracket === ')') {
                if (stackArray.length === 0 || stackArray.pop() !== '(') return false;
            }
            if (bracket === '}') {
                if (stackArray.length === 0 || stackArray.pop() !== '{') return false;
            }
            if (bracket === ']') {
                if (stackArray.length === 0 || stackArray.pop() !== '[') return false;
            }
        }
    }
    return stackArray.length === 0;
};

// Improvised version in javascript
var isValidImprovised = function (s) {
    const stack = [];
    const matchingBrackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

// Solution 1: Java
// class Solution {
//     public boolean isValid(String s) {
//         Stack<Character> stack = new Stack<>();
//         for(char ch: s.toCharArray()){
//             if(ch=='('||ch=='{'||ch=='['){
//                 stack.push(ch);
//             }else{
//                 if(ch==')'){
//                     if(stack.isEmpty() || stack.pop()!='(')return false;
//                 }
//                 if(ch=='}'){
//                     if(stack.isEmpty() || stack.pop()!='{')return false;
//                 }
//                 if(ch==']'){
//                     if(stack.isEmpty() || stack.pop()!='[')return false;
//                 }
//             }
//         }
//         return stack.isEmpty();
//     }
// }