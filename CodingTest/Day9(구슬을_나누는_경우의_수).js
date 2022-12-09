/* 문제 설명
머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(balls, share) {
  let numer = 1;
  let deno = 1;
  for(i=0; i < share; i++){
      numer *= balls-i;
  }
  for(i=share; i >= 1; i--){
      deno *= i
  }
  return numer / deno ;
}

/*
순서가 없는 경우의 수 공식

전체 n개 중에서 a개를 순서없이 뽑는 경우의 수

n x (n-1) x (n -2) x ... => a개
------------------------
a x (a-1) x ... x 2 x 1

*/
