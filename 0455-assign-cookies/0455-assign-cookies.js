/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // 탐욕 지수 배열과 쿠키 크기 배열을 오름차순으로 정렬
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let i = 0; // 아이들의 인덱스
    let j = 0; // 쿠키들의 인덱스
    let contentChildren = 0;

    // 아이들과 쿠키들을 순회
    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            // 현재 쿠키가 아이의 탐욕 지수보다 크거나 같으면
            contentChildren++;
            i++; // 다음 아이로 이동
        }
        j++; // 다음 쿠키로 이동
    }

    return contentChildren; // 만족한 아이들의 수 반환
};



