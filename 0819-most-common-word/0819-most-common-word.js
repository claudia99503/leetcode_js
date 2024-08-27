/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let cleanedParagraph = paragraph
        .toLowerCase()
        .replace(/[^\w\s]/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();

    let words = cleanedParagraph.split(' ').filter(word => word.length > 0);
    
    let bannedSet = new Set(banned);
    let wordCount = {};

    for (let word of words) {
        if (!bannedSet.has(word)) {
            if (wordCount[word]) {
                wordCount[word]++;
            } else {
                wordCount[word] = 1;
            }
        }
    }

    let mostFrequentWord = '';
    let maxCount = 0;

    for (let word in wordCount) {
        if (wordCount[word] > maxCount) {
            mostFrequentWord = word;
            maxCount = wordCount[word];
        }
    }

    return mostFrequentWord;
};

