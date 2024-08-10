/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);

    if (nums.length <= 1) return [nums];

    let results = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;  // 중복된 요소 건너뛰기

        let first = nums[i];
        let rest = nums.slice(0, i).concat(nums.slice(i + 1));

        let permutations = permuteUnique(rest);

        for (let permutation of permutations) {
            results.push([first].concat(permutation));
        }
    }

    return results;
};

