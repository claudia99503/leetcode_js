/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    // 문자열을 공백을 기준으로 분리하여 배열을 생성합니다.
    let segments = s.split(' ');
    
    // 배열에서 빈 문자열('')을 제거합니다.
    segments = segments.filter(segment => segment !== '');

    // 필터링된 배열의 길이가 세그먼트의 수입니다.
    return segments.length;
};
