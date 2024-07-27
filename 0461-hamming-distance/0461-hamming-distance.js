/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    // 정수 x를 이진 문자열로 변환
    let binaryStrX = x.toString(2);
    // 정수 y를 이진 문자열로 변환
    let binaryStrY = y.toString(2);
    // 두 이진 문자열 중 더 긴 문자열의 길이를 구함
    let max = Math.max(binaryStrX.length, binaryStrY.length);
    // 해밍 거리 결과를 저장할 변수 초기화
    let result = 0;

    // 두 이진 문자열의 길이가 max와 같아질 때까지 앞에 '0'을 추가
    while (binaryStrX.length < max || binaryStrY.length < max) {
        if (binaryStrX.length < max) {
            binaryStrX = "0" + binaryStrX;
        }
        if (binaryStrY.length < max) {
            binaryStrY = "0" + binaryStrY;
        }
    }

    // 이진 문자열의 각 비트를 비교하여 다른 비트의 수를 셈
    for (let i = max-1; i >= 0; i--) {
        if (binaryStrX[i] !== binaryStrY[i]) {
            result++;
        }
    }

    // 해밍 거리 결과 반환
    return result;
};

/*
수도 코드
1. 정수 x와 y를 이진 문자열로 변환한다.
    - binaryStrX에 x를 2진수 문자열로 변환한 값을 저장한다.
    - binaryStrY에 y를 2진수 문자열로 변환한 값을 저장한다.

2. 두 이진 문자열 중 더 긴 문자열의 길이를 구한다.
    - maxLength에 binaryStrX와 binaryStrY 중 더 긴 문자열의 길이를 저장한다.

3. 해밍 거리 계산을 위한 초기값을 설정한다.
    - result를 0으로 초기화한다.

4. 두 이진 문자열의 길이가 maxLength와 같아질 때까지 앞에 '0'을 추가한다.
    - binaryStrX의 길이가 maxLength보다 작으면 길이가 같아질 때까지 앞에 '0'을 추가한다.
    - binaryStrY의 길이가 maxLength보다 작으면 길이가 같아질 때까지 앞에 '0'을 추가한다.

5. 두 이진 문자열의 각 비트를 비교하여 서로 다른 비트의 수를 센다.
    - maxLength 길이만큼 반복한다.
        - binaryStrX와 binaryStrY의 각 비트를 비교한다.
        - 두 비트가 다르면 result를 1 증가시킨다.

6. 최종 해밍 거리를 반환한다.
    - result를 반환한다.
*/

