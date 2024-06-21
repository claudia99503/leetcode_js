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

/*
### 수도코드

1. **함수 선언**
   - `solution` 함수를 선언하고, `isBadVersion` 함수를 매개변수로 받음.
   
2. **내부 함수 반환**
   - `solution` 함수는 내부에 주어진 버전 `n`을 매개변수로 받는 함수를 반환.

3. **초기 변수 설정**
   - `left` 변수를 1로 초기화 (탐색 범위의 왼쪽 끝).
   - `right` 변수를 `n`으로 초기화 (탐색 범위의 오른쪽 끝).

4. **반복문 시작**
   - `while` 루프를 `left`가 `right`보다 작은 동안 반복.

5. **중간 지점 계산**
   - `mid` 변수를 `left`와 `right`의 중간 지점으로 설정.

6. **조건 확인 및 범위 조정**
   - `isBadVersion(mid)`가 `true`이면:
     - `right`를 `mid`로 설정 (첫 번째 나쁜 버전이 `mid` 또는 그 이전에 있음).
   - `isBadVersion(mid)`가 `false`이면:
     - `left`를 `mid + 1`로 설정 (첫 번째 나쁜 버전이 `mid` 이후에 있음).

7. **반복문 종료**
   - `left`가 `right`와 같아질 때 반복문 종료.

8. **결과 반환**
   - `left`를 반환 (첫 번째 나쁜 버전의 인덱스를 가리킴).
*/


/* 순차함수
var solution = function(isBadVersion) {

    return function(n) {
        for (let i = 1; i <= n; i++) {
            if (isBadVersion(i)) {
                return i; // 첫 번째 나쁜 버전을 찾으면 반환
            }
        }
    };
};
*/

/*
### 수도코드

1. **함수 선언**
   - `solution` 함수를 선언하고, `isBadVersion` 함수를 매개변수로 받음.

2. **내부 함수 반환**
   - `solution` 함수는 주어진 버전 `n`을 매개변수로 받는 내부 함수를 반환.

3. **순차 탐색 시작**
   - `for` 루프를 1부터 `n`까지 실행.

4. **조건 확인**
   - `isBadVersion(i)`를 호출하여 현재 버전 `i`가 나쁜 버전인지 확인.
   - 만약 `isBadVersion(i)`가 `true`이면:
     - 현재 버전 `i`를 반환 (첫 번째 나쁜 버전).

5. **반복문 종료**
   - 반복문이 종료되면 함수도 종료.
*/

/* 재귀함수
var solution = function(isBadVersion) {
   
   
    return function findFirstBadVersion(version) {
        if (isBadVersion(version)) {
            return version; // 현재 버전이 나쁜 버전이면 반환
        } else {
            return findFirstBadVersion(version + 1); // 다음 버전을 검사
        }
    };
};
*/
