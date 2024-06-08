/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 최소 가격을 아주 큰 값으로 초기화
    let minPrice = Infinity;
    // 최대 이익을 0으로 초기화
    let maxProfit = 0;
    
    // 모든 가격을 순회
    for (let i = 0; i < prices.length; i++) {
        // 현재 가격이 최소 가격보다 작으면 최소 가격을 업데이트
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) { // 현재 가격에서 최소 가격을 뺀 값이 최대 이익보다 크면 최대 이익을 업데이트
            maxProfit = prices[i] - minPrice;
        }
    }
    
    // 최대 이익 반환
    return maxProfit;
};
