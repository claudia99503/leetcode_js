/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 문자열의 각 길이에 대해 검사 (약수는 1부터 가능하므로 1부터)
    for (let i = 1; i < s.length; i++) {
        // i가 문자열의 길이의 약수인지 확인
        if (s.length % i === 0) {
            // 길이 약수 i만큼의 부분 문자열을 자름 
            let newS = s.slice(0, i);
            // 반복 횟수 계산 (전체 길이를 부분 문자열의 길이로 나눈 값)
            let repeatCount = s.length / i;
            // 부분 문자열을 반복하여 새로운 문자열 생성
            let repeatS = newS.repeat(repeatCount);
            // 반복된 문자열이 원래 문자열과 같은지 확인
            if (repeatS === s) {
                // 같다면 true 반환
                return true;
            }
        }
    }
    // 어떤 부분 문자열도 원래 문자열과 같지 않다면 false 반환
    return false;
};
