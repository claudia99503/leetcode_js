/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    if(a === b) return -1;
    if (a !== b) {
        return Math.max(a.length, b.length);
    }
};

