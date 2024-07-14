/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";
    
    // 16진수 문자를 나타내는 배열
    const hexChars = '0123456789abcdef';
    let result = '';
    
    // 32비트 정수의 경우 16진수는 최대 8자리 (4비트 = 1헥사)
    // 음수일 경우 2의 보수 사용
    if (num < 0) {
        num += 2 ** 32;
    }
    
    // num이 0이 될 때까지 16진수 변환
    while (num > 0) {
        const hexDigit = num % 16; // 16으로 나눈 나머지를 구함
        result = hexChars[hexDigit] + result; // 결과 문자열 앞에 추가
        num = Math.floor(num / 16); // num을 16으로 나눔
    }
    
    return result;
};

