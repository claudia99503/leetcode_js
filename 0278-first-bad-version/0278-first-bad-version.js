/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1;  // 탐색 범위의 왼쪽 끝
        let right = n; // 탐색 범위의 오른쪽 끝

        while (left < right) {
            let mid = Math.floor((left + right) / 2); // 중간 지점 계산
            if (isBadVersion(mid)) {
                right = mid; // 첫 번째 나쁜 버전이 mid 또는 그 이전에 있음
            } else {
                left = mid + 1; // 첫 번째 나쁜 버전이 mid 이후에 있음
            }
        }
        
        return left; // left는 첫 번째 나쁜 버전을 가리킴
    };
};

