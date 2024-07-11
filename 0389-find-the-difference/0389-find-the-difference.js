/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    
    const array = {};

    for (let char of t) {
        if (array[char]) {
            array[char]++;
        } else {
            array[char] = 1;
        }
    }

    for (let char of s) {
        if (array[char]) {
            array[char]--;
        }
    }

    for (let char in array) {
        if (array[char] === 1) {
            return char;
        }
    }
};