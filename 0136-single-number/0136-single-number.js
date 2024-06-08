/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // 단일 숫자를 저장할 변수 초기화
    let single = 0;
    
    // 배열의 각 숫자에 대해 반복
    for (let num of nums) {
        // 현재 숫자를 단일 변수와 XOR 연산
        single ^= num;
    }
    
    // 단일 숫자 반환
    return single;
};

