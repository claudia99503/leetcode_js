/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = new Array(n + 1).fill(0);
    
    for (let i = 0; i <= n; i++) {
        let count = 0;
        let num = i;
        
        while (num > 0) {
            count += num & 1;
            num >>= 1;
        }
        
        ans[i] = count;
    }
    
    return ans;
};
