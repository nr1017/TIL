/* 문제 설명
영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(my_string) {
  const vowel = 'aeiou';
  let string = my_string;
for(i=0; i < vowel.length; i++){
  string = string.split(vowel[i]).join('')
}
return string;
}


//다른 사람 풀이

function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

//정규표현식 (Regex)
/*
[] -> 문자 선택
g ->	전역 탐색
replace()	-> 문자열에서 일치하는 부분을 탐색하고, 그 부분을 대체 문자열로 바꿈
*/
