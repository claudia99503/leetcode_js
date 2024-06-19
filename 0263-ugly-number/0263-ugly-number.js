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

/*
1. **초기 조건 확인**:
    - n이 0 이하이면 false를 반환합니다.
    - n이 1이면 true를 반환합니다.

2. **소인수 분해**:
    - n을 반복적으로 2로 나누어 떨어질 때까지 나눕니다.
    - n을 반복적으로 3으로 나누어 떨어질 때까지 나눕니다.
    - n을 반복적으로 5로 나누어 떨어질 때까지 나눕니다.

3. **결과 확인**:
    - 최종적으로 n이 1이 되면 true를 반환합니다.
    - 그렇지 않으면 false를 반환합니다.
*/
