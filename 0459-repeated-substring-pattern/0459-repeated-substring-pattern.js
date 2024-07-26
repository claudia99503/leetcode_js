/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    for (let i = 1; i < s.length; i++) {
    if (s.length % i === 0) {
        let newS = s.slice(0, i);
        let repeatCount = s.length / i;
        let repeatS = newS.repeat(repeatCount);
        if (repeatS === s) { // 반복된 문자열이 원래 문자열과 같은지 확인
                return true; // 같다면 true 반환
            }
        }
    }
    return false; // 어떤 부분 문자열도 원래 문자열과 같지 않다면 false 반환
};



