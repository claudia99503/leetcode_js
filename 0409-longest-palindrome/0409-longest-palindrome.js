/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let charCount = {};
    
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    let palindromeLength = 0;
    let oddFound = false;
    
    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            palindromeLength += count;
        } else {
            palindromeLength += count - 1;
            oddFound = true;
        }
    }
    
    if (oddFound) {
        palindromeLength += 1;
    }
    
    return palindromeLength;
};
