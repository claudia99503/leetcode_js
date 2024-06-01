/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i; // 타겟값이 배열에 존재하면 해당 인덱스 반환
        } else if (nums[i] > target) {
            return i; // 타겟값이 현재 요소보다 작으면 현재 인덱스 반환 (타겟값이 삽입되어야 할 위치)
        }
    }
    return nums.length; // 타겟값이 배열의 모든 요소보다 크다면 배열의 길이를 반환
};
