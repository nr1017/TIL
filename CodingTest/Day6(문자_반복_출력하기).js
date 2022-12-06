/* 문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.
*/

// 나의 풀이

const solution = (my_string, n) => {
  const strArr = my_string.split('');
  let result = '';
  for(let i in strArr){
      result+= strArr[i].repeat(n)
  }
  return result;
}

// 다른 사람의 풀이

function solution(my_string, n) {
  var answer = [...my_string].map(v => v.repeat(n)).join("");
  console.log(answer);
  return answer;
}

// string.split('')
/* 
1. 문자열을 하위 문자열의 배열로 분할합니다.
2. 새 배열을 반환합니다.
3. 원래 문자열을 변경하지 않습니다. 
*/

//string.split('') === [...string]

//array.join('') -> 쉼표 또는 지정된 구분 문자열로 구분된 배열(또는 배열과 유사한 객체join() ) 의 모든 요소를 ​​연결하여 새 문자열을 만들고 반환
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
