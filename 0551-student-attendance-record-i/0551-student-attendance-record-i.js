/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let count = 0;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "A") {
            count++;
        }
        if (s[i] === "L" && s[i+1] === "L" && s[i+2] === "L") {
            return false;
        }
        if (count >= 2) {
            return false;
        }
    }

    return true;
};

