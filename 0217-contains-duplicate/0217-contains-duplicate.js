/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    const set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
};


 /*
var containsDuplicate = function(nums) {
    const array = [];

    for (let i = 0; i < nums.length; i++) {
        
        if (array.includes(nums[i])){
            return true;
            
        }
        array.push(nums[i]);
    } 

    return false;
};
*/