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