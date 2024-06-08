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

