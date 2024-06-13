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

/*
1. 함수 `containsNearbyDuplicate`를 정의하고, 매개변수로 정수 배열 `nums`와 정수 `k`를 받는다.
2. 새로운 빈 Map을 생성하여 변수 `map`에 저장한다.
3. 배열 `nums`의 각 요소에 대해 다음을 반복한다:
    3.1. 현재 요소 `nums[i]`가 Map에 이미 존재하는지 확인한다.
        - 존재하고, 현재 인덱스 `i`와 Map에 저장된 인덱스 차이가 `k` 이하이면, `true`를 반환한다.
    3.2. 현재 요소 `nums[i]`와 그 인덱스 `i`를 Map에 추가한다.
4. 모든 요소를 검사한 후에도 조건을 만족하는 쌍이 없다면, `false`를 반환한다.
*/