/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = new Set('aeiouAEIOU');
    let arr = s.split('');
    let left = 0, right = arr.length - 1;
    
    while (left < right) {
        if (!vowels.has(arr[left])) {
            left++;
            continue;
        }
        if (!vowels.has(arr[right])) {
            right--;
            continue;
        }
        
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    
    return arr.join('');
};
