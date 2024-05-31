/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0; // k는 val과 같지 않은 요소의 개수를 나타냄
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) { // 현재 요소가 val과 다르면
            nums[k] = nums[i]; // k번째 요소를 현재 요소로 교체
            k++; // k 증가
        }
    }
    
    return k; // k 반환
};
