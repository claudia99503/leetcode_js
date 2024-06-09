/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function(columnNumber) {
    let result = ''; // 결과를 저장할 변수를 빈 문자열로 초기화합니다.
    while (columnNumber > 0) {
        columnNumber--; // 0 기반 인덱스로 조정합니다.
        result = String.fromCharCode((columnNumber % 26) + 65) + result; // 나머지를 문자로 변환하여 결과 앞에 추가합니다.
        columnNumber = Math.floor(columnNumber / 26); // columnNumber를 26으로 나눈 몫으로 업데이트합니다.
    }
    return result; // 최종 결과를 반환합니다.
};
