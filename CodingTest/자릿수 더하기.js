/* 문제 설명
정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
*/

// 나의 풀이

function solution(n) {
  const arr = n.toString().split("");
  return arr.reduce((sum, num) => sum + +num, 0);
}

// 숫자를 문자열로 변환 한뒤 한자리씩 나눠서 배열 생성한다.
// array.reduce()를 사용해서 속성의 합을 구한다.

// 다른사람 풀이

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 배열을 변수에 할당하지 않고 한번에 처리했다.
