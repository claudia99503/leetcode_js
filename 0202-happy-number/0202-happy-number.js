/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    // 숫자의 각 자리 숫자의 제곱의 합을 계산하는 헬퍼 함수
    const getSumOfSquares = (num) => {
        let sum = 0;
        while (num > 0) {
            // 마지막 자릿수를 구함
            let digit = num % 10;
            // 마지막 자릿수의 제곱을 합계에 더함
            sum += digit * digit;
            // 마지막 자릿수를 제거
            num = Math.floor(num / 10);
        }
        return sum;
    };
    
    // 사이클을 감지하기 위해 본 숫자들을 추적하는 집합
    let seenNumbers = new Set();
    
    // 숫자가 1이 아니고 이전에 본 숫자가 아닐 때까지 반복
    while (n !== 1 && !seenNumbers.has(n)) {
        seenNumbers.add(n);
        n = getSumOfSquares(n);
    }
    
    // 숫자가 1이면 true 반환, 아니면 false 반환
    return n === 1;
};
