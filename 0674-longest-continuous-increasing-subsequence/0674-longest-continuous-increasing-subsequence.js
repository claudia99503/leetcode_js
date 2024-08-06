/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return 1;

    let gap = nums[1] - nums[0];
    let result = 1;
    let currentLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength++;
            result = Math.max(result, currentLength);
        } else {
            currentLength = 1;
        }
    }

    return result;
};

