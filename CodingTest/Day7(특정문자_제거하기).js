/* 문제 설명
문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.
*/

// 나의 풀이

function solution(my_string, letter) {
  const strArr = my_string.split('');
  return strArr.map((value)=> value !== letter ? value : '').join('')
}

// 다른 사람의 풀이

function solution(my_string, letter) {
    const answer = my_string.split(letter).join('')
    return answer;
}

// string.split('')
/* 
1. 문자열을 하위 문자열의 배열로 분할합니다.
2. 새 배열을 반환합니다.
3. 원래 문자열을 변경하지 않습니다. 
*/

console.log("abcdefabcdefabc".split("f"))

// ["abcde", "abcde", "abc"] 반환
