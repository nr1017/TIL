/* 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

const solution = (my_string) => my_string.match(/[0-9]/g).reduce((a,b)=> parseInt(a) + parseInt(b))


//정규표현식 (Regex)
/*
 /[0-9]/g -> 전체에서 0~9 사이에 아무 숫자 '하나' 찾음
\d -> digit 를 표현하며 숫자를 의미한다. 
array.sort((a,b)=> a - b)
-> 오름차순 정렬
match()	-> 캡처 그룹을 포함해서 모든 일치를 담은 배열을 반환합니다. 일치가 없으면 null을 반환합니다.
*/
