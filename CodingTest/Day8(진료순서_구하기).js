/* 문제 설명
외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 정수 배열 emergency가 매개변수로 주어질 때 응급도가 높은 순서대로 진료 순서를 정한 배열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(emergency) {
  const orderArr = [...emergency].sort(function(a, b){return b-a});
  return emergency.map((num)=> orderArr.indexOf(num)+1);    
}

/* 처음에 배열이 [0,1,2,3,4] 이런식으로 나와서 이유를 알고보니
 
array.sort()는 기존 배열을 변경하여 요소 정렬하기 때문에 emergency 자체 정렬을 바꿨기 때문이었다..

=> Spread연산자(...)로 해결!
배열을 복사하는 가장 간단한 방법
[...emergency] -> 새로운 배열의 값을 변경해도 기존 배열이 변경되지 않는다
*/
