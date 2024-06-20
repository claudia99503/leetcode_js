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

