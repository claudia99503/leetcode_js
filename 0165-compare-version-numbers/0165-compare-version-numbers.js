/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1 = version1.split('.').map(Number);
    let v2 = version2.split('.').map(Number);

    let maxLength = Math.max(v1.length, v2.length);

    for (let i = 0; i < maxLength; i++) {
        let num1 = i < v1.length ? v1[i] : 0;
        let num2 = i < v2.length ? v2[i] : 0;

        if (num1 > num2) {
            return 1;
        } else if (num1 < num2) {
            return -1;
        }
    }

    return 0;
};

