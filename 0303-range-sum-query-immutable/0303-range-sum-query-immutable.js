/**
 * @param {number[]} nums
 * NumArray 객체를 초기화합니다.
 * nums 배열을 입력으로 받아 누적 합 배열(prefixSum)을 계산합니다.
 */
var NumArray = function(nums) {
    this.prefixSum = [0]; // 누적 합 배열을 초기화합니다. 첫 번째 요소는 0으로 시작합니다.
    for (let i = 0; i < nums.length; i++) {
        // nums 배열의 각 요소를 순회하며 누적 합을 계산하여 prefixSum 배열에 추가합니다.
        this.prefixSum.push(this.prefixSum[i] + nums[i]);
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 * 주어진 left와 right 인덱스 사이의 요소들의 합을 반환합니다.
 */
NumArray.prototype.sumRange = function(left, right) {
    // prefixSum 배열을 이용하여 left와 right 사이의 요소 합을 빠르게 계산합니다.
    return this.prefixSum[right + 1] - this.prefixSum[left];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 * NumArray 객체를 생성하고 sumRange 메소드를 호출하는 예시입니다.
 */

