/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let numsCount = [];
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            count++;
        }
        else if (nums[i] === 0) {
            numsCount.push(count);
            count = 0;
        }
    }
    
    numsCount.push(count);
    let maxCount = Math.max(...numsCount);
    
    return maxCount;
};

