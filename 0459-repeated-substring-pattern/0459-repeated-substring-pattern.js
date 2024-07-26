/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    // 문자열의 각 길이에 대해 검사 (약수는 1부터 가능하므로 1부터)
    for (let i = 1; i < s.length; i++) {
        // i가 문자열의 길이의 약수인지 확인
        if (s.length % i === 0) {
            // 길이 약수 i만큼의 부분 문자열을 자름 
            let newS = s.slice(0, i);
            // 반복 횟수 계산 (전체 길이를 부분 문자열의 길이로 나눈 값)
            let repeatCount = s.length / i;
            // 부분 문자열을 반복하여 새로운 문자열 생성
            let repeatS = newS.repeat(repeatCount);
            // 반복된 문자열이 원래 문자열과 같은지 확인
            if (repeatS === s) {
                // 같다면 true 반환
                return true;
            }
        }
    }
    // 어떤 부분 문자열도 원래 문자열과 같지 않다면 false 반환
    return false;
};

/* 수도코드
1. 함수 `repeatedSubstringPattern`을 정의하고, 매개변수 `s`를 받는다.
2. `for` 루프를 1부터 `s.length - 1`까지 반복하여 `i`를 증가시킨다.
3. 현재 `i`가 `s.length`의 약수인지 확인한다 (`s.length % i === 0`).
4. `i`가 `s.length`의 약수라면, 다음 단계를 수행한다:
   1. 부분 문자열 `newS`를 `s`의 처음부터 `i` 길이만큼 잘라낸다 (`s.slice(0, i)`).
   2. `repeatCount`를 `s.length`를 `i`로 나눈 값으로 설정한다.
   3. `repeatS`를 `newS`를 `repeatCount`만큼 반복하여 생성한다 (`newS.repeat(repeatCount)`).
   4. `repeatS`가 원래 문자열 `s`와 같은지 확인한다.
   5. 같다면 `true`를 반환하고 함수 실행을 종료한다.
5. `for` 루프가 종료될 때까지 조건을 만족하는 경우가 없으면 `false`를 반환한다.
*/