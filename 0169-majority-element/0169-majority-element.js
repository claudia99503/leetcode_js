/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let candidate = null; // 과반수 요소를 저장할 변수 초기화
    // 과반수 요소를 저장할 단일 값이기 때문에, 배열이 아닌 null이나 undefined 또는 초기값이 없는 상태로 선언하는 것이 적절

    // 배열의 각 요소를 순회합니다.
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        // count가 0인 경우, 새로운 후보를 설정합니다.
        if (count === 0) {
            candidate = num;
        }

        // 현재 요소가 후보와 같으면 count를 증가시킵니다.
        if (num === candidate) {
            count++;
        } else {
            // 현재 요소가 후보와 다르면 count를 감소시킵니다.
            count--;
        }
    }

    // 최종적으로 과반수 요소인 후보를 반환합니다.
    return candidate;
};

/*
### 예제 1: `nums = [3, 2, 3]`

1. 초기값:
    - `candidate = null`
    - `count = 0`

2. 첫 번째 요소 (3):
    - `count`가 0이므로 `candidate = 3`, `count = 1`

3. 두 번째 요소 (2):
    - `num`이 `candidate`와 다르므로 `count = 0`

4. 세 번째 요소 (3):
    - `count`가 0이므로 `candidate = 3`, `count = 1`

5. 최종적으로 `candidate`는 3이므로 반환값은 3입니다.

### 예제 2: `nums = [2, 2, 1, 1, 1, 2, 2]`

1. 초기값:
    - `candidate = null`
    - `count = 0`

2. 첫 번째 요소 (2):
    - `count`가 0이므로 `candidate = 2`, `count = 1`

3. 두 번째 요소 (2):
    - `num`이 `candidate`와 같으므로 `count = 2`

4. 세 번째 요소 (1):
    - `num`이 `candidate`와 다르므로 `count = 1`

5. 네 번째 요소 (1):
    - `num`이 `candidate`와 다르므로 `count = 0`

6. 다섯 번째 요소 (1):
    - `count`가 0이므로 `candidate = 1`, `count = 1`

7. 여섯 번째 요소 (2):
    - `num`이 `candidate`와 다르므로 `count = 0`

8. 일곱 번째 요소 (2):
    - `count`가 0이므로 `candidate = 2`, `count = 1`

9. 최종적으로 `candidate`는 2이므로 반환값은 2입니다.


*/