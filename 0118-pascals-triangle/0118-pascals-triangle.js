/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    // 결과를 저장할 배열 초기화
    const triangle = [];

    // 각 행을 순차적으로 생성
    for (let i = 0; i < numRows; i++) {
        // 현재 행을 저장할 배열 초기화
        const row = [];
        // 현재 행의 첫 번째 요소는 항상 1
        row.push(1);

        // 중간 요소들을 계산
        for (let j = 1; j < i; j++) { // i = numRows - 1
		        // numRows = 3, i = 2에서 (2, 0) + (2, 1) / (2, 1) + (2, 2)
		        // 바로 위 행의 두 요소를 더하여 현재 요소를 계산
		        // numRows = 4, i = 3 은 [ 1, ?, ?, 1 ] 
		    /*    
		    i = 3, j = 1인 경우:  첫 번째 물음표 자리
            triangle[2][0]는 1 (위 행의 첫 번째 요소)
            triangle[2][1]는 2 (위 행의 두 번째 요소)
            더한 값 3을 현재 행의 중간 요소로 추가합니다.

            i = 3, j = 2인 경우:  두 번째 물음표 자리
            triangle[2][1]는 2 (위 행의 두 번째 요소)
            triangle[2][2]는 1 (위 행의 세 번째 요소)
            더한 값 3을 현재 행의 중간 요소로 추가합니다.
            */
            
            row.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);
        }

        // 현재 행의 마지막 요소는 항상 1 (첫 번째 행 제외)
        if (i > 0) {
            row.push(1);
        }

        // 현재 행을 결과 삼각형 배열에 추가
        triangle.push(row);
    }

    // 결과 삼각형 배열 반환
    return triangle;
};
