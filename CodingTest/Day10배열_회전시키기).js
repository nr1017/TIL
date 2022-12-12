/* 문제 설명
정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(numbers, direction) {
  if(direction === 'right'){
      numbers.unshift(numbers.pop())
  } else {
      numbers.push(numbers.shift())
  }
  return numbers;
}

// array.pop()
// 배열의 마지막 요소를 제거하여 반환

// array.unshift()
// 배열의 시작부분에 요소를 추가 하고 새 배열을 반환

// array.shift()
// 배열의 첫번째 요소를 제거하여 반환

// array.push()
// 배열의 끝에 요소를 추가하고 새 배열을 반환
