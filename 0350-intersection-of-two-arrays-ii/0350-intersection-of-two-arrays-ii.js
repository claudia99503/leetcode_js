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


