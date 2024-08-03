/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const frequency = {};

    nums.forEach(num => {
        if (frequency[num]) {
            frequency[num]++;
        } else {
            frequency[num] = 1;
        }
    });

    let result = [];
    for (const key in frequency) {
        if (frequency[key] === 2) {
            result.push(Number(key));
        }
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            result.push(i);
        }
    }

    return result;
};

