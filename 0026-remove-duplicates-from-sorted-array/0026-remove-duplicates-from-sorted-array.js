/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // k는 고유한 요소의 개수를 나타냄
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) { // 현재 요소가 이전 요소와 다르면
            nums[k] = nums[i]; // k번째 요소를 현재 요소로 교체
            k++; // k 증가
        }
    }
    
    return k; // k 반환
};
