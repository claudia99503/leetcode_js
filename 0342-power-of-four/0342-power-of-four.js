/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    // n이 음수이거나 0이면 4의 거듭제곱이 될 수 없음
    if (n <= 0) {
        return false;
    }
    
    // n이 1일 경우에는 true를 반환 (4^0 = 1)
    if (n === 1) {
        return true;
    }
    
    // n이 4의 거듭제곱인지 확인하기 위해 반복문을 사용
    while (n % 4 === 0) {
        n /= 4;
    }
    
    // 반복문 이후 n이 1이면 4의 거듭제곱, 아니면 아님
    return n === 1;
};
