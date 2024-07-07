/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 1) return false;
    
    for (let i = 1; i * i <= num; i++) {
        if (i * i === num) {
            return true;
        }
    }
    
    return false;
};
