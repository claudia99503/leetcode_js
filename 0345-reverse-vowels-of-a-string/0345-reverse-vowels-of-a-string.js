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

/*1. 함수 `reverseVowels`를 정의하고 문자열 `s`를 인자로 받습니다.
2. 모음들을 담은 집합 `vowels`를 생성합니다.
3. 문자열 `s`를 배열 `arr`로 변환합니다.
4. 두 개의 포인터 `left`와 `right`를 초기화합니다.
   - `left`는 0으로 초기화
   - `right`는 `arr.length - 1`로 초기화
5. `left`가 `right`보다 작을 동안 반복합니다:
   1. `arr[left]`가 모음이 아닌 경우, `left`를 1 증가시킵니다.
   2. `arr[right]`가 모음이 아닌 경우, `right`를 1 감소시킵니다.
   3. `arr[left]`와 `arr[right]`가 모두 모음인 경우:
      - `arr[left]`와 `arr[right]`의 값을 교환합니다.
      - `left`를 1 증가시킵니다.
      - `right`를 1 감소시킵니다.
6. 배열 `arr`를 다시 문자열로 변환합니다.
7. 변환된 문자열을 반환합니다.
*/
