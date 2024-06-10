/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let result = 0; // 결과를 저장할 변수를 0으로 초기화합니다.
    for (let i = 0; i < columnTitle.length; i++) { // columnTitle의 각 문자를 순회합니다.
        let charValue = columnTitle.charCodeAt(i) - 64; // 현재 문자의 ASCII 값에서 64를 빼서 1부터 시작하도록 합니다. ('A'는 65이므로 1이 됩니다)
        result = result * 26 + charValue; // 이전 결과를 26배하고 현재 문자의 값을 더하여 26진수로 변환합니다.
    }
    return result; // 최종 결과를 반환합니다.
};
