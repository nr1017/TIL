/* 문제 설명
정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
* 가장 가까운 수가 여러 개일 경우 더 작은 수를 return 합니다.
*/

// 나의 풀이

function solution(array, n) {
  let answer = array[0]
  array.forEach((num)=>{
      if(Math.abs(n - num) < Math.abs(n - answer)){
          answer = num;
      }else if(Math.abs(n - num) === Math.abs(n - answer)){
          if(answer > num) answer = num; 
      }
  })
  return answer;
}

// array에 있는 정수와 n의 차이를 비교하여, 차이가 작은 정수를 answer에 재할당했다.
// 가까운 수가 여러개일 경우 작은 수를 return 해야하기 때문에, 차이가 같은 경우 배열안의 정수끼리 비교하여 더 작은 값을 answer에 재할당하여 return 하도록 했다!


// 다른 사람 풀이

function solution(array, n) {
    return array.reduce((a,c)=> Math.abs(a-n) < Math.abs(c-n) ? a : Math.abs(a-n) === Math.abs(c-n) ? Math.min(a, c) : c);
}

// 나의 풀이와 논리는 같지만, array.reduce()와 삼항연산자를 이용하여 짧게 풀이했다.

// Math.abs()
// 숫자의 절대값을 반환

Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity
