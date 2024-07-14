/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";
    
    // 16진수 문자를 나타내는 배열
    const hexChars = '0123456789abcdef';
    let result = '';
    
    // 32비트 정수의 경우 16진수는 최대 8자리 (4비트 = 1헥사)
    // 음수일 경우 2의 보수 사용
    if (num < 0) {
        num += 2 ** 32;
    }
    
    // num이 0이 될 때까지 16진수 변환
    while (num > 0) {
        const hexDigit = num % 16; // 16으로 나눈 나머지를 구함
        result = hexChars[hexDigit] + result; // 결과 문자열 앞에 추가
        num = Math.floor(num / 16); // num을 16으로 나눔
    }
    
    return result;
};

/*
### 예제 1: `num = 26`
1. **입력**: `26`
2. **변환 과정**:
    1. 초기값: `num = 26`
    2. `26 % 16 = 10` (나머지는 10이므로 'a'에 해당)
    3. `result = 'a'`
    4. `Math.floor(26 / 16) = 1`
    5. `1 % 16 = 1` (나머지는 1이므로 '1'에 해당)
    6. `result = '1a'`
    7. `Math.floor(1 / 16) = 0` (이제 num은 0이므로 종료)
3. **출력**: `"1a"`

### 예제 2: `num = -1`
1. **입력**: `-1`
2. **변환 과정**:
    1. 초기값: `num = -1`
    2. 음수이므로 2의 보수를 사용:
        - `num += 2 ** 32`
        - `num = -1 + 4294967296 = 4294967295`
    3. 변환 시작:
        1. `4294967295 % 16 = 15` (나머지는 15이므로 'f'에 해당)
        2. `result = 'f'`
        3. `Math.floor(4294967295 / 16) = 268435455`
        4. `268435455 % 16 = 15` (나머지는 15이므로 'f'에 해당)
        5. `result = 'ff'`
        6. `Math.floor(268435455 / 16) = 16777215`
        7. `16777215 % 16 = 15` (나머지는 15이므로 'f'에 해당)
        8. `result = 'fff'`
        9. 계속해서 동일한 방식으로 변환하여 최종적으로:
            - `result = 'ffffffff'`
3. **출력**: `"ffffffff"`
*/