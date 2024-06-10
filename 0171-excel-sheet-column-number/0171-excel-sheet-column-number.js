/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0; // 결과를 저장할 변수를 0으로 초기화합니다.
    for (let i = 0; i < columnTitle.length; i++) { // columnTitle의 각 문자를 순회합니다.
        let charValue = columnTitle.charCodeAt(i) - 64; // 현재 문자의 ASCII 값에서 64를 빼서 1부터 시작하도록 합니다. ('A'는 65이므로 1이 됩니다)
        result = result * 26 + charValue; // 이전 결과를 26배하고 현재 문자의 값을 더하여 26진수로 변환합니다.
    }
    return result; // 최종 결과를 반환합니다.
};

/*
## 예제 설명:

### 예제 1: columnTitle = "A"

1. 문자 'A': 
   - charValue = 1
   - 결과: result = 0 * 26 + 1 = 1

### 예제 2: columnTitle = "AB"

1. 문자 'A': 
   - charValue = 1
   - result = 0 * 26 + 1 = 1
2. 문자 'B': 
   - charValue = 2
   - result = 1 * 26 + 2 = 28

### 예제 3: columnTitle = "ZY"

1. 문자 'Z': 
   - charValue = 26
   - result = 0 * 26 + 26 = 26
2. 문자 'Y': 
   - charValue = 25
   - result = 26 * 26 + 25 = 701

이 코드는 문자열을 순회하면서 각 문자를 26진수로 변환하여 최종 열 번호를 계산합니다.
*/