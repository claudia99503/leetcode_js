/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
    return n % 4 !== 0;
};


/*
1. canWinNim 함수를 정의하고 매개변수로 n을 받습니다.
2. n을 4로 나눈 나머지를 계산합니다.
3. 나머지가 0이 아닌 경우 true를 반환합니다.
4. 나머지가 0인 경우 false를 반환합니다.
*/