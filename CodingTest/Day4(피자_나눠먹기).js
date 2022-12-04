/* 문제 설명
머쓱이네 피자가게는 피자를 여섯 조각으로 잘라 줍니다. 피자를 나눠먹을 사람의 수 n이 매개변수로 주어질 때, n명이 주문한 피자를 남기지 않고 모두 같은 수의 피자 조각을 먹어야 한다면 최소 몇 판을 시켜야 하는지를 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이
function solution(n) {
  // i는  피자 총 조각수(6의 배수로 증가)
  for(i=6; ; i+=6){
      if(i % n === 0)
      break;
      // 조건이 없는 for문은 break가 있어야한다!
  }
  return answer = i / 6;
}

// 다른 사람의 풀이
const solution = (n) => {
    let piece = 6

    while(true) {
        if (piece % n === 0) {
            break
        }
        piece += 6
    }

    return piece / 6
}
// while문과 if문을 사용하여 조건이 맞지않으면 피자조각수를 늘리는 방법
// 방법은 같으나 가독성이 더 좋다. 앞으로 문제해결과 가독성이 좋은 코드를 함께 생각해서 풀어야겠다!
