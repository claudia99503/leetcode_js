/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const n = nums.length; // 배열의 길이 n을 변수에 저장합니다.
    
    // 각 숫자의 인덱스를 이용하여 배열의 값을 음수로 바꿉니다.
    for (let i = 0; i < n; i++) {
        const index = Math.abs(nums[i]) - 1; // 현재 숫자의 값에서 1을 뺀 인덱스를 계산합니다.
        if (nums[index] > 0) { // 해당 인덱스의 값이 양수인 경우
            nums[index] = -nums[index]; // 음수로 변경합니다.
        }
    }

    const result = []; // 결과를 저장할 배열을 생성합니다.
    
    // 배열을 순회하면서 양수인 인덱스를 찾습니다.
    for (let i = 0; i < n; i++) {
        if (nums[i] > 0) { // 양수인 경우
            result.push(i + 1); // 해당 인덱스 + 1을 결과 배열에 추가합니다.
        }
    }

    return result; // 결과 배열을 반환합니다.
};

