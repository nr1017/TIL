/* 문제 설명
문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
*/

// 나의 풀이

function solution(my_string) {  
  const number = '1234567890';
   const arr = [];
   [...my_string].forEach((v)=>{
     number.includes(v) && arr.push(parseInt(v))
   })
   return arr.sort((a,b)=>a - b);
 }

//다른 사람 풀이

function solution(my_string) {
    return my_string.match(/\d/g).sort((a, b) => a - b).map(n => Number(n));
} 

//정규표현식 (Regex)
/*
\d -> digit 를 표현하며 숫자를 의미한다. 
array.sort((a,b)=> a - b)
-> 오름차순 정렬
match()	-> 캡처 그룹을 포함해서 모든 일치를 담은 배열을 반환합니다. 일치가 없으면 null을 반환합니다.
*/
