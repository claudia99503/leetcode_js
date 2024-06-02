/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x === 0 || x === 1) return x; // 0과 1의 제곱근은 자기 자신

    for (let i = 1; i <= x; i++) {
        // i의 제곱이 x보다 크면 i - 1을 반환하여 내림된 제곱근을 반환합니다.
        if (i * i > x) return i - 1;
    }
};
