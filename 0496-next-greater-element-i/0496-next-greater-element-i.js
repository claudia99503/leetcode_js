/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = [];

    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        let found = false;
        for (let j = index + 1; j < nums2.length; j++) {
            if (nums1[i] < nums2[j]) {
                result.push(nums2[j]);
                found = true;
                break;
            }
        }
        if (!found) {
            result.push(-1);
        }
    }

    return result;
};

