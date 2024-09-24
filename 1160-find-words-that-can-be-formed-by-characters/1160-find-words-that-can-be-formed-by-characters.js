/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let result = 0;
    
    for (let word of words) {
        let charsCopy = chars.split('');
        let canForm = true;
        
        for (let char of word) {
            let index = charsCopy.indexOf(char);
            if (index === -1) {
                canForm = false;
                break;
            } else {
                charsCopy.splice(index, 1);
            }
        }
        
        if (canForm) {
            result += word.length;
        }
    }
    
    return result;
};

