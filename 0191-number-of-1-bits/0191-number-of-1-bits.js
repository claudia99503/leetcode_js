/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0) {
        if (n % 2 === 1) { // n을 2로 나눈 나머지가 1이면 마지막 비트는 1입니다.
            count++; // 비트가 1이면 count를 증가시킵니다.
        }
        n = Math.floor(n / 2); // n을 2로 나누어 다음 비트를 확인합니다.
    }
    return count;
};

