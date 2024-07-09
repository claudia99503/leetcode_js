/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // magazine의 각 문자의 개수를 세기 위한 객체
    const magazineCount = {};

    // magazine 문자열의 각 문자를 카운트
    for (let char of magazine) {
        if (magazineCount[char]) {
            magazineCount[char]++;
        } else {
            magazineCount[char] = 1;
        }
    }

    // ransomNote 문자열의 각 문자를 확인
    for (let char of ransomNote) {
        // magazine에 해당 문자가 없거나 사용할 수 있는 문자가 남아있지 않은 경우
        if (!magazineCount[char] || magazineCount[char] === 0) {
            return false;
        }
        // 해당 문자를 사용했으므로 개수를 하나 줄임
        magazineCount[char]--;
    }

    // 모든 문자를 사용할 수 있었다면 true 반환
    return true;
};

