/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(String);

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let order1 = nums[i] + nums[j];
            let order2 = nums[j] + nums[i];
            if (order1 < order2) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
            }
        }
    }

    let result = nums.join('');
    return result[0] === '0' ? '0' : result;
};

