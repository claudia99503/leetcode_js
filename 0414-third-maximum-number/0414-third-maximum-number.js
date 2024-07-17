/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    // 배열의 중복 요소를 제거하여 유일한 값만 남긴다.
    let uniqueNums = [...new Set(nums)];
    
    // 중복 제거한 배열을 내림차순으로 정렬한다.
    uniqueNums.sort((a, b) => b - a);
    
    // 세 번째로 큰 수가 존재하는지 확인하고 반환한다.
    if (uniqueNums.length < 3) {
        // 세 번째로 큰 수가 없으면 가장 큰 수를 반환한다.
        return uniqueNums[0];
    } else {
        // 세 번째로 큰 수가 있으면 이를 반환한다.
        return uniqueNums[2];
    }
};
