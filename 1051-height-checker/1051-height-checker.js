/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let expected = [...heights].sort((a, b) => a - b);
    let length = Math.min(heights.length, expected.length);
    let count = 0;

    for (let i = 0; i <= length; i++) {
        if (heights[i] != expected[i]) {
            count++;
        }
    }

    return count;
};

