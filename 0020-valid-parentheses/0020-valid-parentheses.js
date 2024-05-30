/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) { // 유효성을 확인하는 함수 정의
    const stack = []; // 빈 배열을 스택으로 사용
    const openBrackets = ['(', '[', '{']; // 여는 괄호들의 배열
    const closeBrackets = [')', ']', '}']; // 닫는 괄호들의 배열
    
    for (let i = 0; i < s.length; i++) { // 주어진 문자열을 반복문으로 탐색, s : "()" => s.length: 2
        const char = s[i]; // 현재 문자를 char 변수에 할당
        if (openBrackets.includes(char)) { // 현재 문자가 여는 괄호인 경우
            stack.push(char); // 스택에 추가
        } else if (closeBrackets.includes(char)) { // 현재 문자가 닫는 괄호인 경우
            const lastOpenBracket = stack.pop(); // 스택에서 가장 최근에 추가된 여는 괄호를 제거하고 가져옴
            if (!lastOpenBracket || openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(char)) { // 스택이 비거나 현재 닫는 괄호와 짝이 맞지 않는 경우
                return false; // 유효하지 않으므로 false 반환
            }
        }
    }
    
    return stack.length === 0; // 스택이 비어있으면 유효하므로 true 반환, 아니면 false 반환
};
