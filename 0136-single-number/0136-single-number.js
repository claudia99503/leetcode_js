/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 배열을 정렬합니다.
    nums.sort((a, b) => a - b);
    
    // 정렬된 배열에서 유일한 요소를 찾습니다.
    for (let i = 0; i < nums.length; i += 2) {
        // 마지막 요소이거나 현재 요소와 다음 요소가 다르면 현재 요소가 유일한 요소입니다.
        if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
    
    // 유일한 요소를 찾지 못한 경우 (이 경우는 발생하지 않아야 합니다)
    return -1;
};


