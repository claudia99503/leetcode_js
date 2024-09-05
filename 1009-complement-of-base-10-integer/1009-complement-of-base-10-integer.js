/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let binary = n.toString(2);
    
    let complementBinary = '';
    for (let bit of binary) {
        complementBinary += bit === '0' ? '1' : '0';
    }
    
    return parseInt(complementBinary, 2);
};

