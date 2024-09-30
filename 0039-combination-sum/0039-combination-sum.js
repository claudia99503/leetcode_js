/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];

    const backtrack = (remainingTarget, currentCombination, startIndex) => {
        if (remainingTarget === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            const candidate = candidates[i];
            
            if (candidate > remainingTarget) continue;

            currentCombination.push(candidate);
            backtrack(remainingTarget - candidate, currentCombination, i);
            currentCombination.pop();
        }
    };

    backtrack(target, [], 0);

    return result;
};

