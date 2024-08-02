/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let newS = nums.slice().sort((a, b) => a - b);
    let maxCount = 0;
    let i = 0;

    for (let j = 1; j < newS.length; j++) {
        while (newS[j] - newS[i] > 1) {
            i++;
        }
        if (newS[j] - newS[i] === 1) {
            maxCount = Math.max(maxCount, j - i + 1);
        }
    }

    return maxCount;
};

