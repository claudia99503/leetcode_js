/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (nums.length <= 1) return [nums];

    let results = [];

    for (let i = 0; i < nums.length; i++) {
        let first = nums[i];
        let rest = nums.slice(0, i).concat(nums.slice(i + 1));

        let permutations = permute(rest);

        for (let permutation of permutations) {
            results.push([first].concat(permutation));
        }
    }

    return results;
};

