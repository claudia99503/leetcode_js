/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let nonZeroIndex = 0; // 비영(0이 아닌) 요소를 배치할 위치를 가리키는 포인터

    // 첫 번째 반복: 모든 비영 요소를 배열의 시작 부분으로 이동
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) { // 요소가 0이 아닌 경우
            nums[nonZeroIndex] = nums[i]; // 해당 요소를 nonZeroIndex 위치에 배치
            nonZeroIndex++; // nonZeroIndex를 증가시켜 다음 비영 요소를 배치할 위치로 이동
        }
    }

    // 두 번째 반복: 나머지 위치를 0으로 채움
    for (let i = nonZeroIndex; i < nums.length; i++) {
        nums[i] = 0; // nonZeroIndex 이후의 모든 위치를 0으로 설정
    }
};

/*
1. `nonZeroIndex`를 0으로 초기화한다.

2. 배열의 각 요소를 순회한다.
   a. 현재 요소가 0이 아닌 경우:
      i. 현재 요소를 `nonZeroIndex` 위치에 배치한다.
      ii. `nonZeroIndex`를 1 증가시킨다.

3. `nonZeroIndex`부터 배열 끝까지 순회한다.
   a. 현재 위치에 0을 배치한다.
*/