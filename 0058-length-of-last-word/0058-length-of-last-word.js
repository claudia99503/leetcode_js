/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            length++;
        } else {
            if (length !== 0) {
                break;
            }
        }
    }
    
    return length;
};

