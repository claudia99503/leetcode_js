/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const count = {};

    for (let num of nums) {
        if (count[num] === undefined) {
            count[num] = 1;
        } else {
            count[num]++;
        }
    }

    for (let num in count) {
        if (count[num] === 1) {
            return parseInt(num);
        }
    }
};

