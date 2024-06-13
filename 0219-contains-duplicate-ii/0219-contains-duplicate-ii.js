/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 숫자와 인덱스를 저장할 Map을 생성합니다.
    const map = new Map();

    // 배열의 각 요소를 순회합니다.
    for (let i = 0; i < nums.length; i++) {
        // 현재 숫자가 Map에 존재하고, 그 인덱스 차이가 k 이하인지 확인합니다.
        if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
            return true; // 조건을 만족하면 true를 반환합니다.
        }
        // 현재 숫자와 인덱스를 Map에 추가합니다.
        map.set(nums[i], i);
    }

    // 모든 요소를 검사한 후에도 조건을 만족하는 쌍이 없다면 false를 반환합니다.
    return false;
};
