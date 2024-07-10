/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let charCount = {};
    
    // 각 문자의 빈도를 계산
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // 첫 번째로 빈도가 1인 문자의 인덱스를 찾음
    for (let i = 0; i < s.length; i++) {
        if (charCount[s[i]] === 1) {
            return i;
        }
    }
    
    // 반복되지 않는 문자가 없으면 -1 반환
    return -1;
};

/*
1. 문자열 `s`를 입력받는다.
2. 빈 객체 `charCount`를 생성한다.
3. 문자열 `s`의 각 문자를 순회하며 다음을 수행한다:
   1. 현재 문자를 변수 `char`에 할당한다.
   2. 만약 `charCount`에 `char`가 이미 존재하면, 해당 값을 1 증가시킨다.
   3. 그렇지 않으면, `char`를 키로 하고 값을 1로 설정하여 `charCount`에 추가한다.
4. 문자열 `s`의 각 문자를 순회하며 다음을 수행한다:
   1. 현재 문자의 빈도가 1인지 확인한다.
   2. 만약 빈도가 1이라면, 해당 문자의 인덱스를 반환한다.
5. 모든 문자를 확인한 후에도 빈도가 1인 문자가 없다면 -1을 반환한다.
*/
