/* 문제 설명
약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(n) {
  let answer = 0; //합성수 개수
    for(i=n; i>=4; i--){ // 최소합성수는 4가 될때까지
      let nums = []; //i의 약수 배열
        for(j=1; j<=i; j++){
            if(i % j === 0){ // 약수 구하기
                nums.push(j)
            }
        }
      nums.length >= 3 && (answer += 1) 
      // 약수개수 == 배열의 길이
      // 약수의 개수가 3이상일때 합성수 개수에 1추가한다
    }
    return answer;
}
