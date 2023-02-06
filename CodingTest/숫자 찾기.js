/* 문제 설명
정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(num, k) {
  var answer = num.toString().split("").indexOf(k.toString());
  return answer >= 0 ? answer + 1 : answer;
}

// 숫자를 문자열로 변환한 뒤 배열로 만들어서 array.indexOf()를 활용했다.

// 다른사람 풀이

function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

// 배열 만든 뒤, Number로 값을 다시 숫자로 변환하여 indexOf로 해당 인덱스를 찾고 || 연산자를 활용하여 숫자 자리수 또는 -1을 반환하게 했다.


