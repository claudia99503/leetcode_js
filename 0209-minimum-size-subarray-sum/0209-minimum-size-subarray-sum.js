/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let start = 0;
    let currentSum = 0;
    
    for (let right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        
        while (currentSum >= target) {
            minLength = Math.min(minLength, right - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }
    
    return minLength === Infinity ? 0 : minLength;
};

