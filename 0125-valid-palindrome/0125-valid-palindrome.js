/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 영숫자 문자를 추출하고 소문자로 변환
    let filteredString = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
    
    // 좌우 포인터 초기화
    let left = 0;
    let right = filteredString.length - 1;
    
    // 좌우 포인터를 비교하며 진행
    while (left < right) {
        // 좌우 문자가 다르면 회문이 아님
        if (filteredString[left] !== filteredString[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    // 모든 문자가 일치하면 회문임
    return true;
};


/*
1. 함수 `isPalindrome`을 정의합니다.
    - 입력: 문자열 `s`
    - 출력: `true` 또는 `false` (회문 여부)

2. 문자열에서 영숫자 문자를 추출하고 소문자로 변환합니다.
    - `filteredString = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()`

3. 좌우 포인터를 초기화합니다.
    - `left = 0`
    - `right = filteredString.length - 1`

4. 좌우 포인터를 비교하며 진행합니다.
    - `while left < right do`
        - `if filteredString[left] != filteredString[right] then`
            - `return false` (좌우 문자가 다르면 회문이 아님)

5. 좌우 포인터를 이동합니다.
    - `left = left + 1`
    - `right = right - 1`

6. 모든 문자가 일치하면 회문임을 확인합니다.
    - `return true`
*/
