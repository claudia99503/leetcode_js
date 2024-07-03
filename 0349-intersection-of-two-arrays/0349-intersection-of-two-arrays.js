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

