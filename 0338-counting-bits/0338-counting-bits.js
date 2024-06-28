/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    // n+1 길이의 배열 ans를 생성하고 모든 요소를 0으로 초기화합니다.
    let ans = new Array(n + 1).fill(0);
    
    // 0부터 n까지 반복문을 돕니다.
    for (let i = 0; i <= n; i++) {
        // count 변수를 0으로 초기화하고, num 변수에 i를 저장합니다.
        let count = 0;
        let num = i;
        
        // num이 0보다 크면 while 루프를 돕니다.
        while (num > 0) {
            // num의 가장 낮은 자리 비트가 1이면 count를 1 증가시킵니다.
            count += num & 1;
            // num을 1비트 오른쪽으로 shift합니다.
            num >>= 1;
        }
        
        // ans[i]에 count 값을 저장합니다.
        ans[i] = count;
    }
    
    // ans 배열을 반환합니다.
    return ans;
};

