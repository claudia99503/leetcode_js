/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charCount = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    return -1;
};
