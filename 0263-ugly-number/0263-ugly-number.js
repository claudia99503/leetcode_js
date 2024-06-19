/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) return false;
    if (n === 1) return true;
    
    // 반복적으로 n을 2, 3, 5로 나눈다
    while (n % 2 === 0) {
        n /= 2;
    }
    while (n % 3 === 0) {
        n /= 3;
    }
    while (n % 5 === 0) {
        n /= 5;
    }
    
    // 최종적으로 n이 1이 되면 못생긴 수이다
    return n === 1;
};
