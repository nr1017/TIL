/* 문제 설명
군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

암호화된 문자열 cipher를 주고받습니다.
그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(cipher, code) {
  return [...cipher].filter((str,i)=> (i+1)%code === 0).join('');
}

// code의 배수 번째 글자 구하기 -> (배열의 인덱스 + 1) 를 code로 나눴을때 나머지가 0

// 다른 사람 풀이

function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// 반복문에서 code의 배수만 순회하면서 글자를 더해주는 방법으로 해결했다.
