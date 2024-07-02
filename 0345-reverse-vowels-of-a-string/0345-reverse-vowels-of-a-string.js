/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    // 모음들을 담은 집합을 생성
    const vowels = new Set('aeiouAEIOU');
    // 문자열을 배열로 변환
    let arr = s.split('');
    // 왼쪽 포인터 초기화
    let left = 0, right = arr.length - 1;
    
    // 왼쪽 포인터가 오른쪽 포인터보다 작을 동안 반복
    while (left < right) {
        // 왼쪽 포인터가 가리키는 문자가 모음이 아니면 포인터 이동
        if (!vowels.has(arr[left])) {
            left++;
            continue;
        }
        // 오른쪽 포인터가 가리키는 문자가 모음이 아니면 포인터 이동
        if (!vowels.has(arr[right])) {
            right--;
            continue;
        }
        
        // 왼쪽과 오른쪽 포인터가 가리키는 모음을 교환
        [arr[left], arr[right]] = [arr[right], arr[left]];
        // 포인터 이동
        left++;
        right--;
    }
    
    // 배열을 다시 문자열로 변환하여 반환
    return arr.join('');
};

