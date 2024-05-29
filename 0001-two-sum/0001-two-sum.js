/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // 숫자와 인덱스를 매핑하기 위한 Map 생성

    // 배열을 순회하면서 target과의 차이가 map에 있는지 확인
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // 현재 숫자와 target의 차이
        if (map.has(complement)) {
            // 차이가 map에 존재하면, 해당 숫자와의 인덱스와 현재 인덱스를 반환
            return [map.get(complement), i];
        }
        // 차이가 map에 존재하지 않으면, 현재 숫자와 인덱스를 map에 추가
        map.set(nums[i], i);
    }
};