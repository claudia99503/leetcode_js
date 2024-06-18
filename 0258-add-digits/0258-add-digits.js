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

/*
수도코드
1. 함수 `addDigits`를 정의한다.
2. `num`이 한 자리 숫자가 될 때까지 다음을 반복한다:
   2.1. `sum`을 0으로 초기화한다.
   2.2. `num`을 문자열로 변환하여 `digits` 변수에 할당한다.
   2.3. `for` 루프를 사용하여 `digits` 문자열의 각 문자에 대해 다음을 수행한다:
       2.3.1. 문자를 숫자로 변환하여 `sum`에 더한다.
   2.4. `sum`을 `num`에 다시 할당한다.
3. `num`을 반환한다.
*/
