/* 문제 설명
숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(n) {
  const arr = n.split(" ");
   return arr.filter((v, i)=> v!== 'Z' && arr[i+1] !== 'Z').reduce((a,b)=> parseInt(a) + parseInt(b), 0)
 }

// arr.filter() => 조건에 대해 true인 값만 배열로 반환
// 배열의 값이 Z가 아니고 그다음 인덱스의 값이 Z가 아닌 숫자를 배열로 반환하여 모두 더하는 방식으로 해결했다.
