/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length; // 배열의 길이 n을 변수 n에 저장
    let expectedSum = (n * (n + 1)) / 2; // 0부터 n까지의 숫자의 합을 계산하여 expectedSum에 저장
    let actualSum = 0; // nums 배열의 실제 합을 저장할 변수 actualSum을 0으로 초기화
    
    // nums 배열의 모든 요소를 합산하여 actualSum에 저장
    for (let i = 0; i < nums.length; i++) {
        actualSum += nums[i];
    }
    
    // 예상되는 합에서 실제 합을 빼서 누락된 숫자를 반환
    return expectedSum - actualSum;
};

/*
1. 함수 `missingNumber`를 정의하고, 매개변수로 배열 `nums`를 받습니다.
2. 변수 `n`에 배열 `nums`의 길이를 저장합니다.
3. 변수 `expectedSum`에 0부터 n까지의 모든 숫자의 합을 계산하여 저장합니다.
   - 계산식: `expectedSum = (n * (n + 1)) / 2`
4. 변수 `actualSum`을 0으로 초기화합니다.
5. 배열 `nums`의 모든 요소를 합산하여 `actualSum`에 저장합니다.
   - 반복문을 사용하여 `nums` 배열의 각 요소를 순회하며 `actualSum`에 더합니다.
6. 예상되는 합(`expectedSum`)에서 실제 합(`actualSum`)을 빼서 누락된 숫자를 계산합니다.
7. 누락된 숫자를 반환합니다.
*/
