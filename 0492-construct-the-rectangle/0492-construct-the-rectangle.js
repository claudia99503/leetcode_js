/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    let result = [];
    
    for(let L = 1; L <= area; L++) {
        if (area % L === 0) {
            let W = area / L;
            result.push([L, W]);
        }
    }

    let flooredNumber = Math.floor(result.length/2);

    return result[flooredNumber];
};