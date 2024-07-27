/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let binaryStrX = x.toString(2);
    let binaryStrY = y.toString(2);
    let max = Math.max(binaryStrX.length, binaryStrY.length);
    let result = 0;

    while (binaryStrX.length < max || binaryStrY.length < max) {
        if (binaryStrX.length < max) {
            binaryStrX = "0" + binaryStrX;
        }
        if (binaryStrY.length < max) {
            binaryStrY = "0" + binaryStrY;
        }
    }

    for (let i = max-1; i >= 0; i--) {
        if (binaryStrX[i] !== binaryStrY[i]) {
            result++;
        }
    }

    return result;
};

