/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++; // 합이 타겟보다 작으면 왼쪽 포인터를 오른쪽으로 이동
        } else {
            right--; // 합이 타겟보다 크면 오른쪽 포인터를 왼쪽으로 이동
        }
    }

    return [];
};

