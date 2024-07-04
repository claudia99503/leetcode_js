/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  // 요소들의 출현 횟수를 저장할 빈 객체를 만듭니다.
  let count = {};
  
  // nums1의 각 요소를 확인하면서 객체에 출현 횟수를 기록합니다.
  for (let num of nums1) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }
  }
  
  // 결과를 저장할 빈 배열을 만듭니다.
  let result = [];
  
  // nums2의 각 요소를 확인하면서 nums1에서도 같은 수가 존재하고 그 수의 출현 횟수가 0보다 큰 경우 결과 배열에 추가합니다.
  for (let num of nums2) {
    if (count[num] > 0) {
      result.push(num);
      count[num]--;
    }
  }
  
  // 최종 결과 배열을 반환합니다.
  return result;
};

/*
### 교집합을 찾는 함수의 수도코드

1. **빈 객체 생성**
   - `count`라는 빈 객체를 만듭니다.

2. **첫 번째 배열 순회**
   - `nums1`의 각 요소를 순회합니다.
   - 각 요소를 `count` 객체에 기록합니다.
     - 요소가 이미 `count`에 있으면 해당 값을 1 증가시킵니다.
     - 요소가 `count`에 없으면 해당 값을 1로 초기화합니다.

3. **빈 배열 생성**
   - `result`라는 빈 배열을 만듭니다.

4. **두 번째 배열 순회**
   - `nums2`의 각 요소를 순회합니다.
   - 각 요소를 `count` 객체에서 확인합니다.
     - 요소가 `count`에 있고 그 값이 0보다 크면:
       - 요소를 `result` 배열에 추가합니다.
       - `count` 객체에서 해당 요소의 값을 1 감소시킵니다.

5. **결과 반환**
   - `result` 배열을 반환합니다.
*/


