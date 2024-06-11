/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // 두 개의 맵을 사용하여 문자 매핑을 추적
    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        let charS = s[i];
        let charT = t[i];

        // s의 문자가 이미 매핑되어 있는 경우
        if (mapS.has(charS)) {
            // 기존 매핑이 현재 t의 문자와 일치하지 않으면 false
            if (mapS.get(charS) !== charT) {
                return false;
            }
        } else {
            // 새로운 매핑 추가
            mapS.set(charS, charT);
        }

        // t의 문자가 이미 매핑되어 있는 경우
        if (mapT.has(charT)) {
            // 기존 매핑이 현재 s의 문자와 일치하지 않으면 false
            if (mapT.get(charT) !== charS) {
                return false;
            }
        } else {
            // 새로운 매핑 추가
            mapT.set(charT, charS);
        }
    }

    // 모든 조건을 만족하면 true 반환
    return true;
};
