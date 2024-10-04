/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const findPosition = (isLeft) => {
        let left = 0, right = nums.length - 1;
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] > target || (isLeft && nums[mid] === target)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };

    let start = findPosition(true);
    if (start >= nums.length || nums[start] !== target) {
        return [-1, -1];
    }

    let end = findPosition(false) - 1;
    return [start, end];
};

