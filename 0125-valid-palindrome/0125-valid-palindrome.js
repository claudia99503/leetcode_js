/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 모든 대문자를 소문자로 변환하고, 알파벳과 숫자만 남긴 새로운 문자열을 생성
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // 두 포인터를 사용하여 문자열을 앞뒤로 비교
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        // 왼쪽 포인터와 오른쪽 포인터의 문자가 다르면 회문이 아님
        if (s[left] !== s[right]) {
            return false;
        }
        // 포인터를 이동
        left++;
        right--;
    }
    
    // 모든 문자가 일치하면 회문임
    return true;
};
