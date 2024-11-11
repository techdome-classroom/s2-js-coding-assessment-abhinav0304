/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        }
        else {
            if (stack.length === 0) return false;
            let last = stack.pop();
            if ((char === ')' && last !== '(') || 
                (char === '}' && last !== '{') || 
                (char === ']' && last !== '[')) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

module.exports = { isValid };


