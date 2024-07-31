/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    const rows = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];
    
    function isOneRowWord(word) {
        const lowerWord = word.toLowerCase();
        let row;
        
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].includes(lowerWord[0])) {
                row = rows[i];
                break;
            }
        }
        
        for (let j = 0; j < lowerWord.length; j++) {
            if (!row.includes(lowerWord[j])) {
                return false;
            }
        }
        return true;
    }
    
    const result = [];
    for (let k = 0; k < words.length; k++) {
        if (isOneRowWord(words[k])) {
            result.push(words[k]);
        }
    }
    
    return result;
};

