/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let result = ''; // 결과를 저장할 변수
    let carry = 0; // 올림을 저장할 변수

    let i = a.length - 1; // 문자열 a의 마지막 인덱스부터 시작
    let j = b.length - 1; // 문자열 b의 마지막 인덱스부터 시작

    // 각 자릿수를 더하면서 carry를 고려하여 이진수를 더함
    while (i >= 0 || j >= 0) {
        // 현재 자릿수의 값을 가져옴
        let sum = carry;
        if (i >= 0) sum += parseInt(a[i--]); // 문자열 a의 현재 자릿수값을 더함
        if (j >= 0) sum += parseInt(b[j--]); // 문자열 b의 현재 자릿수값을 더함

        // 현재 자릿수의 합과 carry를 계산하여 결과 문자열에 추가
        result = (sum % 2) + result;
        carry = Math.floor(sum / 2); // 올림을 업데이트
    }

    // 마지막 반복 후 carry가 남아있다면 결과에 추가
    if (carry !== 0) {
        result = carry + result;
    }

    return result;
};


