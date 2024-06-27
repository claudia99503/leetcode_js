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

/*
var wordPattern = function(pattern, s) {
    // 문자열 s를 공백을 기준으로 나누어 단어 배열로 만듦
    const words = s.split(' ');

    // 패턴의 길이와 단어 배열의 길이가 다르면 false 반환
    if (pattern.length !== words.length) return false;

    // 패턴 문자와 단어의 매핑을 저장할 객체 생성
    const map = {};

    // 패턴 문자열을 순회하며 매핑 검증
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i]; // 현재 패턴 문자
        const word = words[i];   // 현재 단어

        // 패턴 문자에 대한 매핑이 존재하지 않는 경우
        if (!map[char]) {
            // 단어가 이미 다른 문자에 매핑되어 있는지 확인
            if (Object.values(map).includes(word)) return false;
            // 매핑이 없으면 새로 추가
            map[char] = word;
        } else {
            // 존재하는 경우, 현재 단어와 일치하는지 확인
            if (map[char] !== word) return false;
        }
    }

    // 모든 검증을 통과하면 true 반환
    return true;
};
*/

/*
1. 문자열 `s`를 공백을 기준으로 나누어 단어 배열로 변환한다.
2. 패턴의 길이와 단어 배열의 길이가 다르면 `false`를 반환한다.
3. 패턴 문자와 단어의 매핑을 저장할 객체 `map`을 생성한다.
4. 패턴 문자열을 순회하면서 다음을 수행한다:
   4.1. 현재 패턴 문자를 `char` 변수에 저장한다.
   4.2. 현재 단어를 `word` 변수에 저장한다.
   4.3. `map` 객체에 현재 패턴 문자가 존재하지 않는지 확인한다.
       4.3.1. 존재하지 않는 경우:
              4.3.1.1. 현재 단어가 `map` 객체의 값 중 하나로 이미 존재하는지 확인한다.
              4.3.1.2. 존재하면 `false`를 반환한다.
              4.3.1.3. 존재하지 않으면, `map` 객체에 현재 패턴 문자와 단어를 매핑한다.
       4.3.2. 존재하는 경우:
              4.3.2.1. 현재 단어와 매핑된 단어가 일치하는지 확인한다.
              4.3.2.2. 일치하지 않으면 `false`를 반환한다.
5. 모든 검증을 통과하면 `true`를 반환한다.
*/


/*
문제 설명
패턴과 문자열 s가 주어졌을 때, s가 주어진 패턴을 따르는지 확인하는 문제입니다. 여기서 "패턴을 따른다"는 것은 패턴의 각 문자가 문자열의 각 단어에 일대일 대응(전단사)을 가지는 것을 의미합니다.

예제
예제 1
입력: pattern = "abba", s = "dog cat cat dog"
출력: true
설명: 패턴 "abba"와 문자열 "dog cat cat dog"를 비교해보면:
첫 번째 문자인 'a'는 첫 번째 단어인 "dog"에 대응됩니다.
두 번째 문자인 'b'는 두 번째 단어인 "cat"에 대응됩니다.
세 번째 문자인 'b'는 두 번째 단어와 동일하게 "cat"에 대응됩니다.
네 번째 문자인 'a'는 첫 번째 단어와 동일하게 "dog"에 대응됩니다.
따라서 패턴과 문자열이 일치하므로 true를 반환합니다.

예제 2
입력: pattern = "abba", s = "dog cat cat fish"
출력: false
설명: 패턴 "abba"와 문자열 "dog cat cat fish"를 비교해보면:
첫 번째 문자인 'a'는 첫 번째 단어인 "dog"에 대응됩니다.
두 번째 문자인 'b'는 두 번째 단어인 "cat"에 대응됩니다.
세 번째 문자인 'b'는 두 번째 단어와 동일하게 "cat"에 대응됩니다.
네 번째 문자인 'a'는 첫 번째 단어와 동일하게 "dog"에 대응되어야 하지만 "fish"에 대응됩니다.
따라서 패턴과 문자열이 일치하지 않으므로 false를 반환합니다.

예제 3
입력: pattern = "aaaa", s = "dog cat cat dog"
출력: false
설명: 패턴 "aaaa"와 문자열 "dog cat cat dog"를 비교해보면:
모든 문자인 'a'는 같은 단어에 대응되어야 하지만 각각 "dog", "cat", "cat", "dog"에 대응됩니다.
따라서 패턴과 문자열이 일치하지 않으므로 false를 반환합니다.
*/
