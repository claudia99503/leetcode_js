/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    const n = nums.length;
    let countMap = new Map();
    let result = [];

    nums.forEach(num => {
        if (countMap.has(num)) {
            countMap.set(num, countMap.get(num) + 1);
        } else {
            countMap.set(num, 1);
        }
    });

    countMap.forEach((value, key) => {
        if (value > Math.floor(n/3)) {
            result.push(key);
        }
    });

    return result;
};

