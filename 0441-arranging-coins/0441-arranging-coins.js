/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1;
    while (n >= i) {
        n -= i;
        i++;
    }
    return i - 1;
};
