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
