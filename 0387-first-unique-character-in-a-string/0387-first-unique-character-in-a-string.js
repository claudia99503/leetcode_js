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

