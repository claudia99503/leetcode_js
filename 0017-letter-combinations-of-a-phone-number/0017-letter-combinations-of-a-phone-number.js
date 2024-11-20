/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if (!digits.length) return [];
    const map = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    };
    const result = [];
    const backtrack = (path, index) => {
        if (path.length === digits.length) {
            result.push(path);
            return;
        }
        for (let char of map[digits[index]]) {
            backtrack(path + char, index + 1);
        }
    };
    backtrack('', 0);
    return result;
};
