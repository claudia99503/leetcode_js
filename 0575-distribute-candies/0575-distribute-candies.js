/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function(candyType) {
    const uniqueCandy = new Set(candyType);

    if (uniqueCandy.size <= candyType.length / 2) {
        return uniqueCandy.size;
    } else {
        return candyType.length / 2;
    }
};

