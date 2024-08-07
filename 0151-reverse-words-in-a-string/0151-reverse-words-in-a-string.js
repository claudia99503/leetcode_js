/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let words = s.split(' ');
    words = words.filter(word => word.length > 0);
    words.reverse();

    return words.join(' ');
};

