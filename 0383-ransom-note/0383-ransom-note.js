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


/*
1. magazineCount 객체를 생성한다.
2. magazine 문자열의 각 문자를 순회하면서:
   2.1. 만약 magazineCount 객체에 해당 문자가 존재하면:
        2.1.1. 해당 문자의 개수를 1 증가시킨다.
   2.2. 만약 magazineCount 객체에 해당 문자가 존재하지 않으면:
        2.2.1. 해당 문자를 키로 하여 개수를 1로 설정한다.
3. ransomNote 문자열의 각 문자를 순회하면서:
   3.1. 만약 magazineCount 객체에 해당 문자가 존재하지 않거나 개수가 0이면:
        3.1.1. false를 반환한다.
   3.2. 만약 magazineCount 객체에 해당 문자가 존재하고 개수가 0이 아니면:
        3.2.1. 해당 문자의 개수를 1 감소시킨다.
4. 모든 문자를 순회한 후, true를 반환한다.
*/
