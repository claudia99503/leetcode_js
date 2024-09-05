/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function(rolls, mean, n) {
    const m = rolls.length;
    const totalSum = (n + m) * mean;
    const observedSum = rolls.reduce((acc, curr) => acc + curr, 0);
    const missingSum = totalSum - observedSum;

    if (missingSum < n || missingSum > 6 * n) {
        return [];
    }

    const baseValue = Math.floor(missingSum / n);
    const remainder = missingSum % n;
    const result = Array(n).fill(baseValue);

    for (let i = 0; i < remainder; i++) {
        result[i]++;
    }

    return result;
};

