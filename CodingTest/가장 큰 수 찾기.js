/* 문제 설명
정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(array) {
  const maxNum = Math.max(...array);
  var answer = [maxNum, array.indexOf(maxNum)];
  return answer;
}

// Math.max() 로 배열에서 가장 큰 수를 찾고,
// array.indexOf() 로 배열에서 해당하는 숫자의 인덱스 값을 구했다.


