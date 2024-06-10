/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        if (n & 1) { // n의 마지막 비트가 1이면 true가 됩니다.
            count++; // 마지막 비트가 1이면 count를 증가시킵니다.
        }
        n >>= 1; // n을 오른쪽으로 1비트 이동하여 다음 비트를 확인합니다.
    }
    return count;
};


