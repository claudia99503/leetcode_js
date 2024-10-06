/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return "1";

    let prev = countAndSay(n - 1);
    
    let result = "";
    let count = 1;
    
    for (let i = 0; i < prev.length; i++) {
        if (i + 1 < prev.length && prev[i] === prev[i + 1]) {
            count++;
        } else {
            result += count + prev[i];
            count = 1;
        }
    }
    
    return result;
};

