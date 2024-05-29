/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // 숫자를 문자열로 변환합니다.
    var str = x.toString();
    
    // 문자열을 뒤집은 후에도 원래 문자열과 같은지 비교합니다.
    // 문자열을 뒤집는 방법은 문자열을 배열로 변환하여 reverse() 함수를 사용한 후 다시 join() 함수로 합치는 것입니다.
    return str === str.split('').reverse().join('');
};
