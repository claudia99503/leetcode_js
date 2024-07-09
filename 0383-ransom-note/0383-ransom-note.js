/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineCount = {};
    for (let char of magazine) {
        if (magazineCount[char]) {
            magazineCount[char]++;
        } else {
            magazineCount[char] = 1;
        }
    }
    for (let char of ransomNote) {
        if (!magazineCount[char] || magazineCount[char] === 0) {
            return false;
        }
        magazineCount[char]--;
    }
    return true;
};
