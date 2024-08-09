/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length; // k가 배열 길이보다 클 경우를 대비하여 나머지로 계산

    if (k === 0 || nums.length === 1) {
        return nums; // k가 0이거나 배열의 길이가 1이면 회전할 필요가 없음
    }

    let part1 = nums.slice(-k); // 뒤쪽 k개의 요소를 자르기
    let part2 = nums.slice(0, nums.length - k); // 앞쪽 나머지 요소를 자르기
    nums.splice(0, nums.length, ...part1, ...part2);

    return nums;
};

