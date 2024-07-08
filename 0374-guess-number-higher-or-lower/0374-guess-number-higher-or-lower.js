/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let left = 1;
    let right = n;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let result = guess(mid);
        
        if (result === 0) {
            return mid;  // 정답을 찾았을 때
        } else if (result === 1) {
            left = mid + 1;  // 선택한 숫자가 더 크다면, 오른쪽 절반을 탐색
        } else {
            right = mid - 1;  // 선택한 숫자가 더 작다면, 왼쪽 절반을 탐색
        }
    }
    
    return -1;  // 이 코드는 논리적으로 도달하지 않음, 문제의 제약조건으로 보장된 부분
};