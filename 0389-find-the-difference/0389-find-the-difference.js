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

/*
var findTheDifference = function(s, t) {
    // 문자열 t를 배열로 변환
    const arrayT = t.split('');
    
    // 문자열 s의 각 문자를 순회
    for (let i = 0; i < s.length; i++) {
        // s의 각 문자가 t에 포함되어 있으면 t에서 해당 문자 제거
        const index = arrayT.indexOf(s[i]);
        if (index > -1) {
            arrayT.splice(index, 1);
        }
    }
    
    // 남은 문자는 추가된 문자
    return arrayT[0];
};
*/

/*
1. 빈 객체 `array`를 초기화합니다.
2. 문자열 `t`의 각 문자를 순회합니다.
    2.1. 문자가 `array` 객체에 이미 존재하는지 확인합니다.
    2.2. 존재하면, 그 문자의 빈도를 증가시킵니다.
    2.3. 존재하지 않으면, 그 문자를 키로 사용하여 빈도를 1로 설정합니다.
3. 문자열 `s`의 각 문자를 순회합니다.
    3.1. 문자가 `array` 객체에 존재하는지 확인합니다.
    3.2. 존재하면, 그 문자의 빈도를 감소시킵니다.
4. `array` 객체의 각 키를 순회합니다.
    4.1. 빈도가 1인 문자를 찾습니다.
    4.2. 빈도가 1인 문자를 반환합니다.
*/