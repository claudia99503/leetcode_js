/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let count = {};

  for (let num of nums1) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  
  let result = [];
  
  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }
  
  return result;
};


