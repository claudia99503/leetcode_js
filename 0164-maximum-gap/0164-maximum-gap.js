/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    const difference = [];

    if (nums.length < 2) {
        return 0;
    } else {
        nums.sort((a, b) => a - b);

        for (let i = 0; i < nums.length - 1; i++) {
            difference.push(nums[i+1] - nums[i]);
        }

        return Math.max(...difference);
    }
};

