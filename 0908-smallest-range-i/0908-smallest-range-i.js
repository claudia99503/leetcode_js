/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if (nums.length === 0 || nums.length === 1) {
        return 0;
    }

    let minNum = Math.min(...nums);
    let maxNum = Math.max(...nums);

    let newMax = maxNum - k;
    let newMin = minNum + k;

    return Math.max(0, newMax - newMin);
};

