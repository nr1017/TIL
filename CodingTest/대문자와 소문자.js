/* 문제 설명
문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(my_string) {
  return [...my_string].map((str)=> str.match(/[A-Z]/g) ? str.toLowerCase() : str.toUpperCase()).join('');  
}

// 정규표현식 -> str.match(/[A-Z]/g) 대문자가 있으면 반환하고, 없으면 null 반환한다

// 다른 사람 풀이

function solution(my_string) {
  var answer = '';
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

// for of문은 반복 가능한 객체의 값을 반복
// toLowerCase()로 값을 비교하여 조건을 주는 방식으로 answer에 더해서 답을 구했다.
