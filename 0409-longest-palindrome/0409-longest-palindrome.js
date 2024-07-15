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

