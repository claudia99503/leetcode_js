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

/*
예를 들어, n이 19인 경우:

1. 처음에 `19 % 10`은 9입니다. 9를 제곱하여 81을 얻습니다.
2. `19 / 10`은 1입니다. 이제 `num`은 1이 됩니다.
3. 다음으로 `1 % 10`은 1입니다. 1을 제곱하여 1을 얻습니다.
4. 최종적으로 합산된 값은 81 + 1 = 82입니다.

이 과정을 통해 숫자의 각 자릿수를 처리하여 제곱한 값을 합산하게 됩니다.
*/