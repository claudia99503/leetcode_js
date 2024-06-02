/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) return 1; // 만약 계단이 한 칸 밖에 없으면 한 가지 방법밖에 없음
    let prevStepOne = 1; // 이전 계단에서의 한 칸씩 올라가는 방법 수
    let prevStepTwo = 2; // 이전 계단에서의 두 칸씩 올라가는 방법 수
    
    for (let i = 3; i <= n; i++) {
        let currentStep = prevStepOne + prevStepTwo; // 현재 계단에서의 방법 수는 이전 두 계단의 방법 수를 합한 것
        prevStepOne = prevStepTwo; // 다음 반복을 위해 prevStepOne과 prevStepTwo 업데이트
        prevStepTwo = currentStep;
    }
    
    return prevStepTwo; // 마지막 계단까지 도달한 경우의 방법 수 반환
};
