/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 결과를 저장할 배열 초기화
    const triangle = [];

    // numRows 만큼 반복
    for (let i = 0; i < numRows; i++) {
        // 현재 행 초기화
        const row = Array(i + 1).fill(1);
        
        // 첫 번째와 마지막 요소는 항상 1이므로 건너뜀
        for (let j = 1; j < i; j++) {
            // 현재 행의 요소는 바로 위 행의 두 요소의 합
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
        // 현재 행을 결과 배열에 추가
        triangle.push(row);
    }

    return triangle;
};
