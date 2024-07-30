/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let result = [];
    
    if (duration === 0) {
        return 0;
    }

    for (let i = 0; i < timeSeries.length; i++) {
        result.push(timeSeries[i], timeSeries[i] + duration - 1);
    }

    let uniqueResultSet = new Set(result);
    let uniqueResultArray = [...uniqueResultSet];

    return uniqueResultArray.length;
};

