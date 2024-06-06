/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 최대 이익을 저장할 변수
    let maxProfit = 0;
    // 현재까지의 최소 가격을 저장할 변수, 초기값을 매우 큰 값으로 설정
    let minPrice = Infinity;

    // 가격 배열을 순회
    for (let i = 0; i < prices.length; i++) {
        // 현재 가격이 최소 가격보다 작으면 최소 가격 업데이트
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        // 그렇지 않으면 현재 가격에서 최소 가격을 뺀 값과 최대 이익을 비교하여 최대 이익 업데이트
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }

    // 최대 이익 반환
    return maxProfit;
};
