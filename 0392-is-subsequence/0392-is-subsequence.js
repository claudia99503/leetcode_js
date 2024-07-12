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

/*
# 수도 코드

1. **초기 상태 확인**
   - 만약 `s`의 길이가 0이면, `true`를 반환한다.

2. **변수 초기화**
   - `i`를 0으로 초기화 (s의 인덱스)
   - `j`를 0으로 초기화 (t의 인덱스)

3. **루프 시작**
   - `j`가 `t`의 길이보다 작은 동안 반복한다.

4. **문자 비교**
   - 만약 `s[i]`가 `t[j]`와 같다면
     - `i`를 증가시킨다 (s의 다음 문자로 이동)
   - 만약 `i`가 `s`의 길이와 같다면
     - `true`를 반환한다 (s의 모든 문자를 찾음)
   - `j`를 증가시킨다 (t의 다음 문자로 이동)

5. **루프 종료 후**
   - 루프가 끝나도 `i`가 `s`의 길이와 같지 않다면
     - `false`를 반환한다 (s의 모든 문자를 찾지 못함)
*/
   
