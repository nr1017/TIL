/* 문제 설명
머쓱이는 친구들과 369게임을 하고 있습니다. 369게임은 1부터 숫자를 하나씩 대며 3, 6, 9가 들어가는 숫자는 숫자 대신 3, 6, 9의 개수만큼 박수를 치는 게임입니다. 머쓱이가 말해야하는 숫자 order가 매개변수로 주어질 때, 머쓱이가 쳐야할 박수 횟수를 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

function solution(order) {
  return [...order.toString()].filter((num)=> num ==='3' || num === '6' || num === '9').length;
}

// number를 string으로 변환하여 spread문법으로 배열로 만들고 369에 해당하는 것들만 배열에 넣고 그 배열의 길이를 구했다.


// 다른 사람 풀이

function solution(order) {
    return (''+order).split(/[369]/).length-1;
}

// 빈문자열을 더해주면 toString()과 동일한 값을 얻을 수 있다.
// 정규표현식, 369를 찾아서 split해주면 예를들어 29423일때 결과값은 아래와 같다.
[ '2', '42', '' ]
// 위 배열길이에서 1을 빼준 값이 369가 있던 횟수가 된다.
