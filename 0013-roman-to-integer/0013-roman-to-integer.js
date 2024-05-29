/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) { // 주어진 로마 숫자를 정수로 변환하는 함수를 선언합니다.
    const romanValues = { // 로마 숫자와 그에 해당하는 정수 값을 매핑한 객체를 생성합니다.
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0; // 결과를 저장할 변수를 초기화합니다.

    for (let i = 0; i < s.length; i++) { // 주어진 로마 숫자의 문자열을 순회합니다.
        if (romanValues[s[i]] < romanValues[s[i + 1]]) { // 현재 문자의 값이 다음 문자의 값보다 작을 경우
            result -= romanValues[s[i]]; // 결과에 현재 문자의 값을 빼줍니다.
        } else { // 그 외의 경우
            result += romanValues[s[i]]; // 결과에 현재 문자의 값을 더해줍니다.
        }
    }

    return result; // 최종 결과를 반환합니다.
};
