/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    // 대시를 제거하고 대문자로 변환
    s = s.split('-').join('').toUpperCase();

    // 문자열을 뒤집기
    s = s.split('').reverse().join('');

    // k글자씩 나누어 배열에 저장
    let formatted = [];
    for (let i = 0; i < s.length; i += k) {
        formatted.push(s.slice(i, i + k));
    }

    // 나누어진 문자열 조각들을 결합하고 뒤집기
    formatted = formatted.join('-').split('').reverse().join('');

    return formatted;
};