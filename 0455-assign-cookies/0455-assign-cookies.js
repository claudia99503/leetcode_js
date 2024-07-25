/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let i = 0;
    let j = 0;
    let result = 0;
    g.sort((a, b) => a - b); // 오름차순 정렬
    s.sort((a, b) => a - b); // 오름차순 정렬

    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            result++;
            i++;
            s.splice(j, 1);
            j = 0;
        } else {
            if (j < s.length - 1) {
                j++  
            } else {
                i++;
                j = 0;
            }
        }
    }

    return result;
};


