/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {

  const results = [];
  nums.sort((a, b) => a - b);
  const length = nums.length;

  for (let i = 0; i < length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    
    for (let j = i + 1; j < length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      
      let left = j + 1;
      let right = length - 1;
      
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        
        if (sum === target) {
          results.push([nums[i], nums[j], nums[left], nums[right]]);
          
          while (left < right && nums[left] === nums[left + 1]) left++;
          while (left < right && nums[right] === nums[right - 1]) right--;
          
          left++;
          right--;
        } else if (sum < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }
  
  return results;
};

