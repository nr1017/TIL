/* 문제 설명
문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(n) {
  let arr = [];
  [...n].map((str)=> !arr.includes(str) && arr.push(str))
  return arr.join("")
}

//arr.includes() -> 배열이 해당 값을 포함여부에 따라 true or false 반환
/*
해당문자가 없으면 arr에 문자를 추가하여 중복된 문자를 제거했다.
*/


// 다른사람 풀이

function solution(my_string) {
    return [...new Set(my_string)].join('');
}
