/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    // num이 한 자리 숫자가 될 때까지 반복
    while (num >= 10) {
        let sum = 0;
        // num을 문자열로 변환하고 각 자릿수 합산
        let digits = num.toString();
        for (let i = 0; i < digits.length; i++) {
            sum += parseInt(digits[i]);
        }
        // sum을 num에 다시 할당
        num = sum;
    }
    return num;
};

// 예시 사용법
console.log(addDigits(38)); // 출력: 2
console.log(addDigits(0));  // 출력: 0
