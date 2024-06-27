/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    // n이 0 이하인 경우, 3의 거듭제곱이 될 수 없으므로 false 반환
    if (n <= 0) return false;
    
    // n이 3으로 나누어떨어질 동안 계속해서 3으로 나눔
    while (n % 3 === 0) {
        n /= 3;
    }
    
    // n이 1이 되면 true 반환, 그렇지 않으면 false 반환
    return n === 1;
};
