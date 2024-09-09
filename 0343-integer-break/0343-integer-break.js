/**
 * @param {number} n
 * @return {number}
 */

var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);

    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        // 숫자 i를 두 개의 수 a, b로 나눔 (a + b = i)
        for (let j = 1; j < i; j++) {
            // dp[i]는 j와 (i - j)의 곱 또는 j와 dp[i - j]의 곱 중 큰 값으로 갱신
            dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]);
        }
    }

    return dp[n];
};

