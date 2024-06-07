/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let single = 0;
    for (let num of nums) {
        single ^= num;
    }
    return single;
};
