/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let binaryString = num.toString(2);
    let newBinaryString = "";

    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === "1") {
            newBinaryString += "0";
        } else if (binaryString[i] === "0") {
            newBinaryString += "1";
        }
    }
     
    return parseInt(newBinaryString, 2);

};

