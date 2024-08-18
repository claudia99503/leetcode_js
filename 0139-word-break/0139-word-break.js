/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const queue = [0];
    const visited = new Array(s.length).fill(false);

    while (queue.length > 0) {
        const start = queue.shift();
        
        if (visited[start]) continue;
        
        for (let end = start + 1; end <= s.length; end++) {
            const word = s.substring(start, end);
            
            if (wordSet.has(word)) {
                if (end === s.length) {
                    return true;
                }
                queue.push(end);
            }
        }
        
        visited[start] = true;
    }
    
    return false;
};

