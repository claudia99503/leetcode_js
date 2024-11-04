/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = Array.from({ length: Math.min(numRows, s.length) }, () => "");
    let pos = 0, down = false;

    for (let c of s) {
        rows[pos] += c;
        if (pos === 0 || pos === numRows - 1) down = !down;
        pos += down ? 1 : -1;
    }

    return rows.join("");
};
