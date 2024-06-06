/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // 파스칼의 삼각형에서 각 행은 1로 시작하므로, 초기화
    let row = [1];
    
    // 행의 각 요소를 계산
    for (let i = 1; i <= rowIndex; i++) {
        // 이항 계수 공식을 사용하여 다음 요소를 계산
        row[i] = row[i - 1] * (rowIndex - i + 1) / i;
    }
    
    return row;
};
