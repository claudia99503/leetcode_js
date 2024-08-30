/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const normalizedPlate = licensePlate.toLowerCase().replace(/[^a-z]/g, '');
    const plateCount = {};
    
    for (let char of normalizedPlate) {
        if (plateCount.hasOwnProperty(char)) {
            plateCount[char] += 1;
        } else {
            plateCount[char] = 1;
        }
    }

    let result = null;

    for (let word of words) {
        const wordCount = {};
        
        for (let char of word) {
            if (wordCount.hasOwnProperty(char)) {
                wordCount[char] += 1;
            } else {
                wordCount[char] = 1;
            }
        }

        let canComplete = true;
        for (let char in plateCount) {
            if (!wordCount.hasOwnProperty(char)) {
                canComplete = false;
                break;
            } else if (wordCount[char] < plateCount[char]) {
                canComplete = false;
                break;
            }
        }

        if (canComplete) {
            if (result === null) {
                result = word;
            } else {
                if (word.length < result.length) {
                    result = word;
                }
            }
        }
    }

    return result;
};

