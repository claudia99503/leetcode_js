/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let uniqueNums = [...new Set(nums)];
    
    uniqueNums.sort((a, b) => b - a);
    
    if (uniqueNums.length < 3) {
        return uniqueNums[0];
    } else {
        return uniqueNums[2];
    }
};