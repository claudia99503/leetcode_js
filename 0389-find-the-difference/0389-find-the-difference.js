/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    // 각 문자의 빈도를 저장할 객체 생성
    const array = {};

    // 문자열 t의 각 문자의 빈도 증가
    for (let char of t) {
        if (array[char]) {
            array[char]++;
        } else {
            array[char] = 1;
        }
    }

    // 문자열 s의 각 문자의 빈도 감소
    for (let char of s) {
        if (array[char]) {
            array[char]--;
        }
    }

    // 빈도가 1인 문자를 찾아 반환
    for (let char in array) {
        if (array[char] === 1) {
            return char;
        }
    }
};