/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = 0;
    let foundWord = false; // 단어를 찾았는지 여부를 나타내는 플래그

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") { // 현재 문자가 공백이 아닌 경우
            foundWord = true; // 단어를 찾았음을 표시
            length++; // 단어의 길이 증가
        } else if (foundWord) { // 단어를 찾은 후에 현재 문자가 공백인 경우
            // 이제까지 찾은 단어의 길이가 마지막 단어의 길이이므로 종료
            break;
        }
    }
    
    return length;
};

