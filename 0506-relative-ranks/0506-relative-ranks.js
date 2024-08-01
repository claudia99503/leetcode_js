/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const newScore = score.slice().sort((a, b) => b - a);

    for (let i = 0; i < score.length; i++) {
        let index = newScore.indexOf(score[i]);

        if (index === 0) {
            score[i] = "Gold Medal";
        } else if (index === 1) {
            score[i] = "Silver Medal";
        } else if (index === 2) {
            score[i] = "Bronze Medal";
        } else {
            score[i] = (index+1).toString();
        }
    }

    return score;
};

