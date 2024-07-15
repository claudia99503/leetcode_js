/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // 각 문자별 빈도를 저장할 객체를 생성
    let charCount = {};
    
    // 문자열의 각 문자에 대해 빈도를 카운트
    for (let char of s) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // 팰린드롬의 길이를 저장할 변수
    let palindromeLength = 0;
    let oddFound = false;
    
    // 각 문자 빈도에 대해 계산
    for (let count of Object.values(charCount)) {
        if (count % 2 === 0) {
            // 짝수 빈도는 모두 더함
            palindromeLength += count;
        } else {
            // 홀수 빈도는 -1하여 더하고, 홀수가 있음을 표시
            palindromeLength += count - 1;
            oddFound = true;
        }
    }
    
    // 홀수가 하나라도 있으면, 중앙에 한 글자를 추가할 수 있음
    if (oddFound) {
        palindromeLength += 1;
    }
    
    return palindromeLength;
};

/*

1. **문자 빈도 객체 초기화**
    - 각 문자의 빈도를 저장할 빈 객체 `charCount`를 생성합니다.

2. **각 문자의 빈도 계산**
    - 문자열 `s`의 각 문자 `char`에 대해 반복합니다.
    - 만약 `char`가 이미 `charCount`에 있다면, 그 값을 1 증가시킵니다.
    - 만약 `char`가 `charCount`에 없다면, 그 값을 1로 설정합니다.

3. **팰린드롬 길이 및 홀수 발견 플래그 초기화**
    - 팰린드롬 길이를 저장할 변수 `palindromeLength`를 0으로 초기화합니다.
    - 홀수 빈도를 발견했는지 여부를 나타내는 변수 `oddFound`를 `false`로 초기화합니다.

4. **각 문자 빈도 계산**
    - `charCount`의 모든 값(각 문자의 빈도)에 대해 반복합니다.
    - 만약 빈도가 짝수라면, `palindromeLength`에 그 값을 더합니다.
    - 만약 빈도가 홀수라면, 그 값을 1 빼고 `palindromeLength`에 더하며, `oddFound`를 `true`로 설정합니다.

5. **홀수 빈도가 하나라도 있으면, 중앙에 한 글자를 추가**
    - `oddFound`가 `true`라면, `palindromeLength`에 1을 더합니다.

6. **팰린드롬 길이 반환**
    - 최종 계산된 `palindromeLength`를 반환합니다.
*/
