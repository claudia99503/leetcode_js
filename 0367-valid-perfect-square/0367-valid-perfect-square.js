/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    // num이 1보다 작으면 false를 반환합니다. (일반적으로 이 조건은 필요하지 않습니다.)
    if (num < 1) return false;
    
    // 이진 탐색을 위한 초기 범위를 설정합니다.
    let left = 1, right = num;
    
    // left가 right보다 작거나 같을 때까지 반복합니다.
    while (left <= right) {
        // 중간 값을 계산합니다.
        let mid = Math.floor((left + right) / 2);
        // 중간 값의 제곱을 계산합니다.
        let square = mid * mid;
        
        // 중간 값의 제곱이 num과 같으면 true를 반환합니다.
        if (square === num) {
            return true;
        // 중간 값의 제곱이 num보다 작으면, 탐색 범위를 오른쪽으로 이동합니다.
        } else if (square < num) {
            left = mid + 1;
        // 중간 값의 제곱이 num보다 크면, 탐색 범위를 왼쪽으로 이동합니다.
        } else {
            right = mid - 1;
        }
    }
    
    // 완전 제곱수를 찾지 못했으므로 false를 반환합니다.
    return false;
};

/*
var isPerfectSquare = function(num) {
    // num이 1보다 작으면 false를 반환합니다.
    if (num < 1) return false;
    
    // 1부터 시작하여 i의 제곱이 num보다 작거나 같은 동안 반복합니다.
    for (let i = 1; i * i <= num; i++) {
        // i의 제곱이 num과 같으면 true를 반환합니다.
        if (i * i === num) {
            return true;
        }
    }
    
    // 완전 제곱수를 찾지 못했으므로 false를 반환합니다.
    return false;
};
*/

