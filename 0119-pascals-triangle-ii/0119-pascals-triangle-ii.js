/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // 결과를 저장할 배열 초기화
    let row = [1];
    
    // 각 행을 순차적으로 생성
    for (let i = 1; i <= rowIndex; i++) {
        // 현재 행을 저장할 배열 초기화
        let newRow = [1];
        
        // 중간 요소들을 계산
        for (let j = 1; j < row.length; j++) {
            newRow[j] = row[j - 1] + row[j];
        }
        
        // 현재 행의 마지막 요소는 항상 1
        newRow.push(1);
        
        // 현재 행을 결과로 지정
        row = newRow;
    }
    
    // 결과 행 반환
    return row;
};

