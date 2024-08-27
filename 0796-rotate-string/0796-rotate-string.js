/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }

    // 문자열을 두 번 연결하면 모든 회전 상태가 포함된다.
    let doubledS = s + s;

    return doubledS.includes(goal);
};

