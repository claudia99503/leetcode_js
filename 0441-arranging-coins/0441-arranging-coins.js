/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
    let i = 1; // 현재 행 번호를 나타내는 변수 i를 1로 초기화
    while (n >= i) { // n이 현재 행 번호보다 크거나 같을 때까지 반복
        n -= i; // n에서 현재 행 번호만큼 코인을 빼줌
        i++; // 다음 행으로 넘어감
    }
    return i - 1; // 마지막으로 완성된 행 번호를 반환
};

