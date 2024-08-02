/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let minSum = Infinity;
    let result = [];

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                let sum = i + j;
                if (sum < minSum) {
                    minSum = sum;
                    result = [list1[i]];
                } else if (sum === minSum) {
                    result.push(list1[i]);
                }
            }
        }
    }

    return result;
};

