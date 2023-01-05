/* 문제 설명
문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(my_string, num1, num2) {
  const strArr = [...my_string];
  strArr.splice(num1, 1, my_string[num2]);
  strArr.splice(num2, 1, my_string[num1]);
  return strArr.join("");
}

// arr.splice(시작인덱스, 제거할 요소 수, 추가할 요소)
// 문자열을 배열로 만든 후, 인덱스 num1 <-> num2 바꾸는 것이므로 num1을 시작인덱스, 제거할요소수 1개, 추가할 요소는 문자열의 인덱스num2로 변경
// 위와 같은 과정을 num1과 num2의 자리만 바꿔서 한번더 해서 배열을 변경해준 후 문자열로 변환하여 반환한다.

// 다른 사람 풀이

function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

// 구조분해할당을 이용하여 간단하게 인덱스num1 과 인덱스num2를 바꿔주었다.
