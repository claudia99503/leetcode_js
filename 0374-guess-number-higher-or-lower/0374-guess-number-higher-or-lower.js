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

    /* 내가 고른 숫자 < pick => 1 반환
       내가 고른 숫자 > pick => -1 반환
       내가 고른 숫자 = pick => 0 반환 */
    
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

/*

내가 고른 숫자 < pick => 1 반환
내가 고른 숫자 > pick => -1 반환
내가 고른 숫자 = pick => 0 반환 

### 예시 1:
**입력:** `n = 10`, `pick = 6`  
**출력:** `6`

초기 값: `left = 1`, `right = 10`

첫 번째 반복:
- `mid = Math.floor((1 + 10) / 2) = 5`
- `guess(5)` 호출 → 반환값: 1 (pick이 더 큼)
- `left = 5 + 1 = 6`

두 번째 반복:
- `mid = Math.floor((6 + 10) / 2) = 8`
- `guess(8)` 호출 → 반환값: -1 (pick이 더 작음)
- `right = 8 - 1 = 7`

세 번째 반복:
- `mid = Math.floor((6 + 7) / 2) = 6`
- `guess(6)` 호출 → 반환값: 0 (pick과 같음)
- 정답을 찾았으므로 `6`을 반환

### 예시 2:
**입력:** `n = 1`, `pick = 1`  
**출력:** `1`

초기 값: `left = 1`, `right = 1`

첫 번째 반복:
- `mid = Math.floor((1 + 1) / 2) = 1`
- `guess(1)` 호출 → 반환값: 0 (pick과 같음)
- 정답을 찾았으므로 `1`을 반환

### 예시 3:
**입력:** `n = 2`, `pick = 1`  
**출력:** `1`

초기 값: `left = 1`, `right = 2`

첫 번째 반복:
- `mid = Math.floor((1 + 2) / 2) = 1`
- `guess(1)` 호출 → 반환값: 0 (pick과 같음)
- 정답을 찾았으므로 `1`을 반환


*/

