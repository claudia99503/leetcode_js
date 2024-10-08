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

/*
예를 들어, n = 5일 때:

처음 i = 1일 때, n은 4가 됩니다 (n = 5 - 1).
두 번째 i = 2일 때, n은 2가 됩니다 (n = 4 - 2).
세 번째 i = 3일 때, n이 3보다 작으므로 더 이상 행을 만들 수 없습니다. 따라서 i - 1인 2를 반환합니다.
*/