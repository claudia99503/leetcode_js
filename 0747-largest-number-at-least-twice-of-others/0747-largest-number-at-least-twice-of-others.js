/**
 * @param {number[]} nums
 * @return {number}
 */
function dominantIndex(nums) {
    let maxVal = Math.max(...nums);
    let maxIndex = nums.indexOf(maxVal);
    
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > maxVal) {
            return -1;
        }
    }
    
    return maxIndex;
}

