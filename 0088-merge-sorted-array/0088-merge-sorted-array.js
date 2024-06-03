/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let index1 = m - 1; // nums1 배열의 마지막 요소의 인덱스
    let index2 = n - 1; // nums2 배열의 마지막 요소의 인덱스
    let indexMerged = m + n - 1; // 병합된 배열의 마지막 요소의 인덱스

    while (index2 >= 0) { // nums2 배열이 끝날 때까지 반복
        if (index1 >= 0 && nums1[index1] > nums2[index2]) { // nums1과 nums2 중 큰 값을 병합된 배열의 뒤에서부터 채워넣음
            nums1[indexMerged] = nums1[index1];
            index1--;
        } else {
            nums1[indexMerged] = nums2[index2];
            index2--;
        }
        indexMerged--; // 병합된 배열의 인덱스를 하나씩 감소시킴
    }
};
