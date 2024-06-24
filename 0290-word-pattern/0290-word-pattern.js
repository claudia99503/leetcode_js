/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    // 문자열 s를 공백을 기준으로 나누어 단어 배열로 만듦
    const words = s.split(' ');

    // 패턴의 길이와 단어 배열의 길이가 다르면 false 반환
    if (pattern.length !== words.length) return false;

    // 문자와 단어의 매핑을 저장할 객체 생성
    const charToWord = new Map();
    const wordToChar = new Map();

    // 패턴 문자열을 순회하며 매핑 검증
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]; // 현재 패턴 문자
        const word = words[i];   // 현재 단어

        // 현재 패턴 문자에 대한 매핑이 존재하는지 확인
        if (charToWord.has(char)) {
            // 존재하는 경우, 현재 단어와 일치하는지 확인
            if (charToWord.get(char) !== word) return false;
        } else {
            // 존재하지 않는 경우, 현재 단어가 다른 문자에 매핑되어 있는지 확인
            if (wordToChar.has(word)) return false;
            
            // 매핑이 없으면 새로 추가
            charToWord.set(char, word);
            wordToChar.set(word, char);
        }
    }

    // 모든 검증을 통과하면 true 반환
    return true;
};

