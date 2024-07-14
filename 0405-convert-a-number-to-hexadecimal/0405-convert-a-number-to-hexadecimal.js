/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    if (num === 0) return "0";
    
    const hexChars = '0123456789abcdef';
    let result = '';
    

    if (num < 0) {
        num += 2 ** 32;
    }
    
    while (num > 0) {
        const hexDigit = num % 16; 
        result = hexChars[hexDigit] + result; 
        num = Math.floor(num / 16); 
    }
    
    return result;
};
