/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // 배열의 마지막 인덱스부터 시작
    for(let i = digits.length - 1; i >= 0; i--) {
        // 현재 자릿수가 9보다 작다면, 1을 더하고 함수를 종료
        if(digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        // 현재 자릿수가 9라면, 0으로 설정하고 다음 자릿수를 처리
        digits[i] = 0;
    }
    // 모든 자릿수를 처리한 후 여전히 함수가 종료되지 않았다면, 가장 앞에 1을 추가
    // 예를 들어, [9, 9, 9]의 경우 여기에 도달하게 되며, 결과는 [1, 0, 0, 0]이 됩니다.
    digits.unshift(1);
    return digits;
};
