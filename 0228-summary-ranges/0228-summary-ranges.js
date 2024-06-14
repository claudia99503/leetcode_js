/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = []; // 결과를 저장할 배열을 초기화
    let n = nums.length; // nums 배열의 길이를 n에 저장
    if (n === 0) return result; // nums 배열이 비어 있으면 빈 결과 배열을 반환

    let start = nums[0]; // 첫 번째 요소를 시작점으로 설정

    for (let i = 1; i < n; i++) { // 두 번째 요소부터 마지막 요소까지 반복
        if (nums[i] !== nums[i - 1] + 1) { // 현재 요소가 이전 요소 + 1과 같지 않으면 (연속되지 않으면)
            if (start === nums[i - 1]) { // 시작점과 이전 요소가 같으면
                result.push(`${start}`); // 단일 숫자로 결과에 추가
            } else { // 시작점과 이전 요소가 다르면
                result.push(`${start}->${nums[i - 1]}`); // 범위로 결과에 추가
            }
            start = nums[i]; // 새로운 시작점을 현재 요소로 설정
        }
    }

    // 마지막 요소까지 처리 후 남은 범위를 결과에 추가
    if (start === nums[n - 1]) { // 시작점과 마지막 요소가 같으면
        result.push(`${start}`); // 단일 숫자로 결과에 추가
    } else { // 시작점과 마지막 요소가 다르면
        result.push(`${start}->${nums[n - 1]}`); // 범위로 결과에 추가
    }

    return result; // 최종 결과 배열을 반환
};

/*
# 정렬된 유일한 정수 배열의 범위 요약 - 수도코드

1. 함수 summaryRanges(nums)를 정의합니다.
    1.1. 결과를 저장할 빈 배열 result를 초기화합니다.
    1.2. nums 배열의 길이를 n에 저장합니다.
    1.3. nums 배열이 비어 있는지 확인합니다.
        1.3.1. nums 배열이 비어 있으면 빈 결과 배열 result를 반환합니다.

2. 첫 번째 요소를 시작점 start로 설정합니다.

3. 두 번째 요소부터 마지막 요소까지 반복합니다. (i = 1부터 n-1까지)
    3.1. 현재 요소가 이전 요소 + 1과 같지 않은지 확인합니다. (연속되지 않으면)
        3.1.1. 시작점 start와 이전 요소가 같은지 확인합니다.
            3.1.1.1. 같으면 단일 숫자로 결과 배열 result에 추가합니다. (start)
        3.1.2. 시작점 start와 이전 요소가 다르면 범위로 결과 배열 result에 추가합니다. (start->이전 요소)
        3.1.3. 새로운 시작점을 현재 요소로 설정합니다. (start = 현재 요소)

4. 마지막 요소까지 반복을 마친 후 남은 범위를 결과 배열에 추가합니다.
    4.1. 시작점 start와 마지막 요소가 같은지 확인합니다.
        4.1.1. 같으면 단일 숫자로 결과 배열 result에 추가합니다. (start)
    4.2. 시작점 start와 마지막 요소가 다르면 범위로 결과 배열 result에 추가합니다. (start->마지막 요소)

5. 최종 결과 배열 result를 반환합니다.
*/