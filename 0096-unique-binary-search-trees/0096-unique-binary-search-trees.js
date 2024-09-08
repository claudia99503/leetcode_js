/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // 0개의 노드를 가진 빈트리 구조는 1가지 
    dp[1] = 1; // 1개의 노드를 가진 = 노드 자신만 있는 구조는 1가지

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]; // j를 루트로 선택했을 때의 경우의 수
        }
    }
    
    return dp[n];
};

