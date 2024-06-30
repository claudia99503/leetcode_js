/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        // 두 요소를 교환합니다.
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        
        // 인덱스를 이동합니다.
        left++;
        right--;
    }
};

