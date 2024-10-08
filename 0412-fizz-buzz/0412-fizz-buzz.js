/**
 * @param {number} n
 * @return {string[]}
 */
function fizzBuzz(n) {
  let answer = []; // 결과를 저장할 배열 선언
  for (let i = 1; i <= n; i++) { // 1부터 n까지 순회하는 반복문
    if (i % 15 === 0) { // i가 15로 나누어 떨어질 때
      answer.push("FizzBuzz"); // "FizzBuzz"를 배열에 추가
    } else if (i % 3 === 0) { // i가 3으로 나누어 떨어질 때
      answer.push("Fizz"); // "Fizz"를 배열에 추가
    } else if (i % 5 === 0) { // i가 5로 나누어 떨어질 때
      answer.push("Buzz"); // "Buzz"를 배열에 추가
    } else { // 위 조건에 해당하지 않을 때
      answer.push(i.toString()); // 숫자를 문자열로 변환하여 배열에 추가
    }
  }
  return answer; // 결과 배열을 반환
}

/*
### FizzBuzz 함수 수도코드

1. **결과 배열 초기화**
   - 결과를 저장할 빈 배열 `answer`를 생성한다.

2. **숫자를 순회하는 반복문**
   - 변수 `i`를 `1`부터 `n`까지 (포함) 반복하는 반복문을 시작한다.

=> i % 15 === 0 조건은 i % 3 === 0과 i % 5 === 0 조건보다 먼저 확인해야 합니다. 
그렇지 않으면 i % 3 === 0이나 i % 5 === 0 조건이 먼저 걸리기 때문에 i % 15 === 0 조건을 체크할 기회가 없습니다.

3. **15로 나누어 떨어지는지 확인**
   - 만약 `i`가 `15`로 나누어 떨어진다면:
     - "FizzBuzz"를 `answer` 배열에 추가한다.

4. **3으로 나누어 떨어지는지 확인**
   - 그렇지 않고 `i`가 `3`으로 나누어 떨어진다면:
     - "Fizz"를 `answer` 배열에 추가한다.

5. **5로 나누어 떨어지는지 확인**
   - 그렇지 않고 `i`가 `5`로 나누어 떨어진다면:
     - "Buzz"를 `answer` 배열에 추가한다.

6. **기본 케이스**
   - 그 외의 경우:
     - `i`를 문자열로 변환하여 `answer` 배열에 추가한다.

7. **결과 반환**
   - `answer` 배열을 반환한다.
*/

// 예시 테스트
console.log(fizzBuzz(3));  // ["1", "2", "Fizz"]
console.log(fizzBuzz(5));  // ["1", "2", "Fizz", "4", "Buzz"]
console.log(fizzBuzz(15)); // ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]