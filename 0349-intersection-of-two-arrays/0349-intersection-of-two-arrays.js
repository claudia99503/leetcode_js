/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // nums1의 요소들을 가진 set1 생성
    let set1 = new Set(nums1);
    // nums2의 요소들을 가진 set2 생성
    let set2 = new Set(nums2);
    // 결과를 저장할 빈 배열 생성
    let result = [];

    // set1의 각 요소에 대해 반복
    for (let num of set1) {
        // set2에 set1의 요소가 있는지 확인
        if (set2.has(num)) {
            // set2에 있으면 결과 배열에 추가
            result.push(num);
        }
    }

    // 최종 결과 배열 반환
    return result;
};
/*
1. nums1 배열의 요소들을 set1으로 변환
2. nums2 배열의 요소들을 set2로 변환
3. 결과를 저장할 빈 배열 result 생성
4. set1의 각 요소에 대해 반복
   4.1 현재 요소 num을 가져옴
   4.2 num이 set2에 존재하는지 확인
       4.2.1 존재하면, result 배열에 num 추가
5. 최종 결과 배열 result 반환
*/

/*
var intersection = function(nums1, nums2) {
    // 결과를 저장할 빈 배열 생성
    let result = [];
    // 교집합 요소를 저장할 빈 집합 생성
    let set = new Set();

    // nums1 배열의 각 요소에 대해 반복
    for (let i = 0; i < nums1.length; i++) {
        // nums2 배열의 각 요소에 대해 반복
        for (let j = 0; j < nums2.length; j++) {
            // nums1의 현재 요소와 nums2의 현재 요소가 같은지 확인
            if (nums1[i] === nums2[j]) {
                // 같으면 집합에 추가 (중복 요소는 자동으로 처리됨)
                set.add(nums1[i]);
            }
        }
    }

    // 집합의 요소들을 배열로 변환하여 반환
    return Array.from(set);
};
*/
/*Array.from은 유사 배열 객체나 반복 가능한 객체(예: Set)를 배열로 변환하는 메서드. 이 메서드는 새로운 배열 인스턴스를 생성하여 반환*/

/*
1. 빈 배열 result 생성
2. 빈 집합 set 생성
3. nums1 배열의 각 요소에 대해 반복
   3.1 현재 인덱스 i의 요소에 접근
   3.2 nums2 배열의 각 요소에 대해 반복
       3.2.1 현재 인덱스 j의 요소에 접근
       3.2.2 nums1[i]와 nums2[j]가 같은지 확인
           3.2.2.1 같으면 set에 nums1[i] 추가
4. set의 요소들을 배열로 변환하여 반환
*/

