/* 문제 설명
덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(quiz) {
  return quiz.map((v) => {
    var arr = v.split(" ");
    var answer;
    arr[1] === "-"
      ? (answer = Number(arr[0]) - Number(arr[2]))
      : (answer = Number(arr[0]) + Number(arr[2]));
    return answer == arr[4] ? "O" : "X";
  });
}

// 숫자와 수식의 index는 정해져 있으므로 연산자가 '-'인지 '+' 확인 후 숫자로 변환하여 계산했다.

// 다른사람 풀이

function solution(quiz) {
  var answer = [];
  return quiz.map((t) => {
    const [calc, result] = t.split(" = ");
    const sign = calc.includes("+") ? 1 : -1;
    const [a, b] = calc.split(sign === 1 ? " + " : " - ");

    return +a + +b * sign === +result ? "O" : "X";
  });
}

// 구조분해할당으로 계산식과 결과값을 할당
// 계산식의 연산자를 확인 후 1 또는 -1 값을 sign에 할당
// 구조분해할당으로 계산식내 숫자를 나누어서 a, b에 할당
