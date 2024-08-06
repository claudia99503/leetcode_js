/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let gap = nums[1] - nums[0];
    const result = [];

    if (gap > 0) {
        for (let i = 1; i < nums.length; i += gap) {
            if (i + 1 < nums.length && gap !== nums[i+1] - nums[i]) {
                gap = nums[i+1] - nums[i];
            }
            else {
                result.push(i-1);
                result.push(i);
                result.push(i+1);
            }
        }
    } else if (gap === 0) {
        return 1;
    }

    return result.length;
};

