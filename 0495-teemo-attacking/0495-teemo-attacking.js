/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    if (timeSeries.length === 0) return 0;

    let totalPoisonedTime = 0;

    for (let i = 0; i < timeSeries.length - 1; i++) {
        let interval = timeSeries[i + 1] - timeSeries[i];

        totalPoisonedTime += Math.min(interval, duration);
    }

    totalPoisonedTime += duration;

    return totalPoisonedTime;
};

