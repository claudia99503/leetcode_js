/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newS = s.split(' ');

    for (let i = 0; i < newS.length; i++) {
        newS[i] = newS[i].split('').reverse().join('');
    }

    return newS.join(' '); 
};

