/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // s가 빈 문자열이면 true를 반환
    if (s.length === 0) {
        return true;
    }
    
    let i = 0; // s의 인덱스
    let j = 0; // t의 인덱스
    
    // t를 순회
    while (j < t.length) {
        // s의 현재 문자가 t의 현재 문자와 일치하면
        if (s[i] === t[j]) {
            i++; // s의 다음 문자로 이동
        }
        // s의 모든 문자를 찾았으면 true를 반환
        if (i === s.length) {
            return true;
        }
        j++; // t의 다음 문자로 이동
    }
    
    // 루프가 끝나면 false를 반환 (s의 모든 문자를 찾지 못함)
    return false;
};

   
