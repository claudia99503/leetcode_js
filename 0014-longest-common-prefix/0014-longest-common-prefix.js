/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    // 만약 문자열 배열이 비어있다면 빈 문자열을 반환합니다.
    if (strs.length === 0) return '';

    // 가장 짧은 문자열을 기준으로 설정합니다.
    let prefix = strs[0];

    // 문자열 배열을 순회하며 각 문자열과 비교합니다.
    for (let i = 1; i < strs.length; i++) {
        // 현재 문자열과 prefix의 공통 접두사를 찾습니다.
        while (strs[i].indexOf(prefix) !== 0) {
            // 만약 공통 접두사가 아니라면 prefix를 줄입니다.
            prefix = prefix.substring(0, prefix.length - 1);
            // 만약 prefix가 빈 문자열이 되었다면 공통 접두사가 없는 것입니다.
            if (prefix === '') return '';
        }
    }

    return prefix; // 공통 접두사를 반환합니다.
};
