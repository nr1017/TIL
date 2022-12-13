/* 문제 설명
i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.
0 < n ≤ 3,628,800
10! = 3,628,800입니다. n이 3628800이므로 최대 팩토리얼인 10을 return 합니다.
*/

// 나의 풀이

function solution(n) {
  const arr = [];
  let num = 1;
  let answer = 0;

// 1부터 10까지의 팩토리얼 값의 배열을 구한다
 for(i=1; i<=10; i++){
     num *= i;
     arr.push(num)
 }

 // 팩토리얼 배열의 인덱스+1 이 정수값
 // 팩토리얼 배열의 값이 해당 정수보다 같거나 작고 
 //위에 선언해둔 answer정수보다 크면 위의 answer정수에 할당하여 가장 큰 정수를 구한다

 arr.forEach((v,i)=>{
   if(v <=n && answer <= i+1) answer = i+1;
 })
 return answer;
}
