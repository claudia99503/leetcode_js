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

/*
1. 문자열 `s`를 공백을 기준으로 나누어 단어 배열로 변환한다.
2. 패턴의 길이와 단어 배열의 길이가 다르면 `false`를 반환한다.
3. 문자와 단어의 매핑을 저장할 두 개의 Map 객체 `charToWord`와 `wordToChar`를 생성한다.
4. 패턴 문자열을 순회하면서 다음을 수행한다:
   4.1. 현재 패턴 문자를 `char` 변수에 저장한다.
   4.2. 현재 단어를 `word` 변수에 저장한다.
   4.3. `charToWord`에 현재 패턴 문자가 존재하는지 확인한다.
       4.3.1. 존재하는 경우, `charToWord`의 값이 현재 단어와 일치하는지 확인한다.
              4.3.1.1. 일치하지 않으면 `false`를 반환한다.
       4.3.2. 존재하지 않는 경우, 현재 단어가 `wordToChar`에 존재하는지 확인한다.
              4.3.2.1. 존재하면 `false`를 반환한다.
              4.3.2.2. 존재하지 않으면, `charToWord`에 현재 패턴 문자와 단어를 매핑하고, `wordToChar`에 현재 단어와 패턴 문자를 매핑한다.
5. 모든 검증을 통과하면 `true`를 반환한다.
*/
