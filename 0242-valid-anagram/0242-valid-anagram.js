/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 단계 1: 문자열의 길이가 다르면 애너그램이 될 수 없습니다.
    if (s.length !== t.length) {
        return false;
    }

    // 단계 2: 두 문자열에서 각 문자들의 빈도를 셉니다.
    const countS = {};
    const countT = {};

    for (let char of s) {
        if (countS[char] === undefined) {
            countS[char] = 1;
        } else {
            countS[char] += 1;
        }
    }

    for (let char of t) {
        if (countT[char] === undefined) {
            countT[char] = 1;
        } else {
            countT[char] += 1;
        }
    }

    // 단계 3: 빈도 수를 비교합니다.
    for (let key in countS) {
        if (countS[key] !== countT[key]) {
            return false;
        }
    }

    return true;
};