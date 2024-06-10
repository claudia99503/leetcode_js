/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ''; // 결과를 저장할 변수를 빈 문자열로 초기화합니다.
    while (columnNumber > 0) {
        columnNumber--; // 0 기반 인덱스로 조정합니다.
        result = String.fromCharCode((columnNumber % 26) + 65) + result; // 나머지를 문자로 변환하여 결과 앞에 추가합니다.
        columnNumber = Math.floor(columnNumber / 26); // columnNumber를 26으로 나눈 몫으로 업데이트합니다.
    }
    return result; // 최종 결과를 반환합니다.
};

/*
### 예제 1: `columnNumber = 1`

1. 감소 후: `columnNumber = 0`
2. 나머지: `0 % 26 = 0`
3. 문자: `char(0 + 65) = 'A'`
4. 결과: `'A'`

### 예제 2: `columnNumber = 28`

1. 감소 후: `columnNumber = 27`
2. 첫 번째 나머지: `27 % 26 = 1`
3. 문자: `char(1 + 65) = 'B'`
4. 업데이트 후: `columnNumber = 27 // 26 = 1`
5. 다시 감소 후: `columnNumber = 0`
6. 두 번째 나머지: `0 % 26 = 0`
7. 문자: `char(0 + 65) = 'A'`
8. 결과: `'AB'`

*/

/*
1. 결과를 저장할 변수를 빈 문자열로 초기화한다 (`result = ''`).
2. `columnNumber`가 0보다 큰 동안 반복한다:
    1. `columnNumber`를 1 감소시켜 0 기반 인덱스로 조정한다 (`columnNumber--`).
    2. `columnNumber`를 26으로 나눈 나머지를 계산한다 (`remainder = columnNumber % 26`).
    3. `remainder`에 65를 더하여 해당하는 문자를 얻고, 이를 `result`의 앞에 추가한다 (`result = char(remainder + 65) + result`).
    4. `columnNumber`를 26으로 나눈 몫으로 업데이트한다 (`columnNumber = columnNumber // 26`).
3. 최종 결과를 반환한다 (`return result`).
*/