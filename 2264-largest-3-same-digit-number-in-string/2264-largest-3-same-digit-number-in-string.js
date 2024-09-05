/**
 * @param {string} num
 * @return {string}
 */
var largestGoodInteger = function(num) {
    let result = "";

    for (let i = 0; i <= num.length - 3; i++) {
        let subStr = num.slice(i, i + 3);
        if (subStr[0] === subStr[1] && subStr[1] === subStr[2]) {
            if (subStr > result) {
                result = subStr;
            }
        }
    }

    return result;  
};

