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


