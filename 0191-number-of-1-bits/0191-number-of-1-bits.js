/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        count += n & 1; // 현재 비트가 1인지 확인하고, 1이면 count를 증가시킵니다.
        n >>>= 1; // n을 오른쪽으로 1비트 이동하여 다음 비트를 확인합니다.
    }
    return count;
};
